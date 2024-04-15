<script>
	import { twMerge } from '$lib/helper';
	import SelectedSymptomBlock from './gadgets/SelectedSymptomBlock.svelte';
	import SelectionList from './layouts/SelectionList.svelte';
	import { selected_symptoms } from './SymptomMenu.svelte';

	export let cancelSelection = () => {};
	export let title = '';
	export let showList = false;

	let symptoms_selected_pass = false;
	let urgentSymptom = '';

	$: symptoms_selected_pass = urgentSymptom.length > 0;
</script>

<SelectionList {cancelSelection} {title} {showList}>
	<p class=" text-blue-4 ml-8 my-2">最困擾/最想解決的症狀</p>
	<div class="overflow-scroll h-[260px] z-0 flex flex-col">
		{#each $selected_symptoms as symptomData}
			<SelectedSymptomBlock bind:urgentSymptom symptom={symptomData.symptom} />
		{/each}
	</div>
	{#if symptoms_selected_pass}
		<a href="/search/result">
			<div
				class={twMerge('bg-neutral-300 text-white text-center p-2 rounded-lg', {
					'bg-gradient-to-r from-main-lighter to-main-light': symptoms_selected_pass
				})}
			>
				下一步
			</div>
		</a>
	{/if}
	{#if !symptoms_selected_pass}
		<div
			class={twMerge('bg-neutral-300 text-white text-center p-2 rounded-lg', {
				'bg-gradient-to-r from-main-lighter to-main-light': symptoms_selected_pass
			})}
		>
			下一步
		</div>
	{/if}
</SelectionList>
