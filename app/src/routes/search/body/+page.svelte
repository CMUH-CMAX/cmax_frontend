<script>
	import SearchBar from '$components/SearchBar.svelte';
	import HumanBeing from '$components/HumanBeing.svelte';
	import BubbleButton from '$components/gadgets/BubbleButton.svelte';
	import SymptomMenu from '$components/gadgets/SymptomMenu.svelte';

	let body_selected;
	let menu_hide = true;

	function returnToDefault() {
		body_selected = undefined;
	}
	// function goto previous page
	function gotoPreviousPage() {
		window.history.back();
	}

	// when currentBodyFocus change
	$: {
		menu_hide = body_selected === undefined;
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
			<HumanBeing bind:body_selected />
			<div class="pt-24" />
		</div>
	</div>
</div>

<SymptomMenu bind:menu_hide bind:selected_body_part={body_selected} />

<!-- symptom-select-{symptoms_selected[
	encodeURIComponent(body_selected + symptom)
] != undefined} -->
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
