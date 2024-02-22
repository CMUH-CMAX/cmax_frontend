<script>
	import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
	import SearchBar from '$components/SearchBar.svelte';
	import HumanBeing, { focus_body } from '$components/HumanBeing.svelte';
	import BubbleButton from '$components/gadgets/BubbleButton.svelte';

	let body_selected, body_parts;
	let menu_hide = true;
	let symptomsList = {
		head: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		chest: [4, 5, 6],
		left_arm: [7, 8, 9],
		right_arm: [10, 11, 12],
		stomach: [13, 14, 15],
		symphysis: [16, 17, 18],
		left_leg: [19, 20, 21],
		right_leg: [22, 23, 24],
		left_knee: [25, 26, 27],
		right_knee: [28, 29, 30],
		left_calves: [31, 32, 33],
		right_calves: [34, 35, 36],
		left_foot: [37, 38, 39],
		right_foot: [39, 40, 41]
	};
	let symptoms_selected = {};
	let symptoms_selected_count = 0;
	let symptoms_selected_pass = false;
	function returnToDefault() {
		body_selected = undefined;
	}
	// function goto previous page
	function gotoPreviousPage() {
		window.history.back();
	}

	function cancelSelection() {
		body_selected = undefined;
		focus_body(undefined);
		symptoms_selected = {};
		// symptoms_selected_count = 0;
	}
	function whitespaceCancel() {
		if (body_selected === undefined) {
			cancelSelection();
		}
	}
	function select_symptoms() {
		let hash = encodeURIComponent(body_selected + this.dataset.name);
		if (symptoms_selected_count >= 5) return;
		if (symptoms_selected[hash] != undefined) {
			delete symptoms_selected[hash];
			// symptoms_selected_count-=1
		} else {
			symptoms_selected[hash] = {
				part: body_selected,
				symptom: this.dataset.name
			};
			// symptoms_selected_count+=1;
		}
		console.log(symptoms_selected);
	}
	// when currentBodyFocus change
	$: {
		menu_hide = body_selected == undefined;

		// symptoms_selected
		symptoms_selected_count = Object.keys(symptoms_selected).length;
		symptoms_selected_pass = symptoms_selected_count > 0;
	}
</script>

<svelte:head>
	<title>身體搜尋 | CMAX</title>
	<meta name="description" content="Body search" />
</svelte:head>
<div class="relative w-screen flex flex-col min-h-screen">
	<SearchBar return_btn={true} divider={true} hint="搜尋醫院與醫生" />
	<div class="grid grid-cols-5 gap-4 w-screen">
		<div>
			<div class="mt-4">
				<BubbleButton hint="變更" color="theme" size="md" hintColor="black">
					<p slot="buttonText" class="text-white text-2xs">殊樵</p>
				</BubbleButton>
			</div>
			<div class="mt-4">
				<BubbleButton hint="性別" color="gray" size="md" hintColor="black">
					<p slot="buttonText" class="text-white text-2xs">男/女</p>
				</BubbleButton>
			</div>
		</div>
		<div class="human col-span-3 py-12 grid place-items-center">
			<HumanBeing bind:body_selected bind:body_parts />
			<div class="pt-24" />
		</div>
	</div>
</div>

{#if menu_hide == false || true}
	<div class="process bottom-0 border-t">
		<div
			class="selection rounded-t-lg {body_selected === undefined
				? 'hide-menu'
				: 'show-menu'} {menu_hide ? 'not-ready' : ''}"
		>
			<div class="selection-header px-5 flex items-center">
				<ChevronLeft on:click={cancelSelection} class="mx-2" />
				<span>{body_selected === undefined ? '' : body_selected}</span>
			</div>
			{#if body_selected !== undefined}
				<div class="selection-body z-0">
					{#each symptomsList[body_selected] as symptom}
						<div
							class="selection-item p-5 border-b text-base symptom-select-{symptoms_selected[
								encodeURIComponent(body_selected + symptom)
							] != undefined}"
							on:click={select_symptoms}
							data-name={symptom}
						>
							{symptom}
						</div>
					{/each}
				</div>
			{/if}
		</div>
		<div class="next-process p-5 border-t">
			<div class="grid grid-cols-2 mb-4">
				<div class="symptoms-selection grid-span-1">已選症狀：{symptoms_selected_count}/5</div>
				<div class="grid-span-1 text-right text-xs">清空症狀</div>
			</div>
			<a href="/search/result">
				<div class="next-step-{symptoms_selected_pass} text-center p-2 rounded-lg">下一步</div>
			</a>
		</div>
	</div>
{/if}

<style>
	.process {
		position: fixed;
		margin-top: -160px;
		height: 130px;
		background: var(--white-f);
		width: 100%;
	}
	.selection-item,
	.selection {
		background: var(--white-f);
	}
	.not-ready {
		display: none;
	}
	.process > .show-menu {
		margin-top: -300px;
	}
	.process > .hide-menu {
		margin-top: 0px;
	}
	.hide-menu {
		position: relative;
		animation: slide-up 0.3s forwards;
		opacity: 0;
	}
	.show-menu {
		position: relative;
		animation: slide-down 0.3s forwards;
		opacity: 1;
	}
	@keyframes slide-up {
		0% {
			height: 300px;
			opacity: 1;
		}
		100% {
			height: 0px;
			opacity: 0;
		}
	}
	@keyframes slide-down {
		0% {
			height: 0px;
			opacity: 0;
		}
		100% {
			height: 300px;
			opacity: 1;
		}
	}
	.selection {
		transition-duration: 0.5s;
	}
	.selection::after {
		/* set top border */
		content: '';
		position: absolute;
		top: -10px;
		left: 0;
		width: 100%;
		height: 10px;
		border-radius: 10px 10px 0px 0px;
		background: var(--white-f);
		/* border: 1px  solid black; */
		border-top: 1px solid var(--blue-2);
		background: var(--blue-1);
	}
	.selection-header {
		background: var(--blue-1);
		padding-bottom: 10px;
	}
	.selection-body {
		height: 265px;
		overflow: auto;
	}

	.symptoms-selection {
		color: var(--blue-4);
	}

	.next-process .next-step-false {
		color: var(--white-f);
		background: var(--gray-2);
	}
	.next-process .next-step-true {
		color: var(--white-f);
		background: var(--blue-2);
	}
	.symptom-select-true {
		background: var(--blue-1);
	}
	.symptom-select-false {
	}
	.main {
		height: 100vh;
		overflow: hidden;
	}
</style>
