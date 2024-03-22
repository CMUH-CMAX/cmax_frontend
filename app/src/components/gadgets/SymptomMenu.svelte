<script context="module" lang="ts">
	import { writable, type Writable } from 'svelte/store';
	export type SymptomData = {
		part: string;
		symptom: string;
	};
	let selected_symptoms = writable<SymptomData[]>([]);
</script>

<script>
	import SymptomBlock from '$components/gadgets/SymptomBlock.svelte';
	import { focus_body } from '$components/HumanBeing.svelte';
	import { twMerge } from '$lib/helper';
	import { ChevronLeft } from 'svelte-heros-v2';
	import { setContext } from 'svelte';

	setContext('selected_symptoms', selected_symptoms);
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
	export let selected_body_part;
	function cancelSelection() {
		selected_body_part = undefined;
		focus_body(undefined);
		// symptoms_selected_count = 0;
	}
	function whitespaceCancel() {
		if (selected_body_part === undefined) {
			cancelSelection();
		}
	}

	export let menu_hide = true;
	export let symptoms_selected_pass;
	let selected_symptoms_count;

	$: menu_hide = selected_body_part === undefined;
	$: selected_symptoms_count = $selected_symptoms.length;
</script>

<div
	class={twMerge('fixed bg-white-f w-full bottom-0 border-t', {
		'display-none': menu_hide
	})}
>
	<div
		class={twMerge('bg-white-f rounded-t-lg border-t-2 border-main-lighter', {
			'mt-0 animate-slideDown fill-mode-forwards': menu_hide,
			'mt-[-300px] opacity-100 relative animate-slideUp': !menu_hide
		})}
	>
		<div class="py-[10px] bg-main-lightest px-5 flex items-center">
			<ChevronLeft on:click={cancelSelection} class="mx-2 outline-none" />
			<span>{selected_body_part === undefined ? '' : selected_body_part}</span>
		</div>
		{#if selected_body_part !== undefined}
			<div class="overflow-scroll h-[260px] z-0 flex flex-col">
				{#each symptomsList[selected_body_part] as symptom}
					<SymptomBlock {symptom} {selected_body_part} extraStyle="shrink-0" />
				{/each}
			</div>
		{/if}
		<div class="next-process p-5 border-t">
			<div class="grid grid-cols-2 mb-4">
				<div class="symptoms-selection">已選症狀：{selected_symptoms_count}/5</div>
				<div class="text-right text-xs">清空症狀</div>
			</div>
			<a href="/search/result">
				<div class="next-step-{symptoms_selected_pass} text-center p-2 rounded-lg">下一步</div>
			</a>
		</div>
	</div>
</div>
