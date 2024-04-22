<script context="module" lang="ts">
	import SelectedSymtomPicker from './SelectedSymtomPicker.svelte';
	import SelectionList from './layouts/SelectionList.svelte';
	import { writable } from 'svelte/store';
	export type SymptomData = {
		part: string;
		symptom: string;
	};
	export const selected_symptoms = writable<SymptomData[]>([]);
</script>

<script>
	import SymptomBlock from '$components/gadgets/SymptomBlock.svelte';
	import { focus_body } from '$components/HumanBeing.svelte';
	import { twMerge } from '$lib/helper';
	import SymptomSlider from './gadgets/SymptomSlider.svelte';
	import { bodyPartChinese, symptomDictionary, symptomsList } from '$lib/constants';

	import { onMount, setContext } from 'svelte';
	import { page } from '$app/stores';

	setContext('selected_symptoms', selected_symptoms);

	function cancelSelection() {
		selected_body_part = undefined;
		focus_body(undefined);
		clearSelected();
	}
	function whitespaceCancel() {
		if (selected_body_part === undefined) {
			cancelSelection();
		}
	}

	export function clearSelected() {
		selected_symptoms.set([]);
	}
	export let selected_body_part = '';
	export let show_menu = true;
	export let symptoms_selected_pass = false;
	let selected_symptoms_count = 0;
	let nextStep = false;

	$: show_menu = selected_body_part !== undefined;
	$: selected_symptoms_count = $selected_symptoms.length;
	$: symptoms_selected_pass = $selected_symptoms.length > 0;

	function showNextStep() {
		nextStep = true;
	}
	function backToLastStep() {
		nextStep = false;
	}
	onMount(() => {
		const body_part = $page.url.searchParams.get('body_part') || '';
		if (body_part) focus_body(body_part);
		const recentSymptom = $page.url.searchParams.get('name') || '';
		if (recentSymptom) {
			selected_symptoms.set([...$selected_symptoms, { part: body_part, symptom: recentSymptom }]);
			console.log('getelement');
			console.log(document.getElementById(recentSymptom));
			console.log('queryselector');
			console.log(document.querySelector(`#${recentSymptom}`));
			document.getElementById(recentSymptom)?.click();
		}
	});
</script>

<SelectionList
	{cancelSelection}
	showList={show_menu}
	title={selected_body_part ? bodyPartChinese[selected_body_part] : ''}
>
	{#if selected_body_part}
		<div class="overflow-scroll h-[260px] z-0 flex flex-col">
			{#each symptomsList[selected_body_part] as symptom}
				<SymptomBlock
					{symptom}
					{selected_body_part}
					extraStyle="shrink-0"
					showWarning={symptom == '胸痛' ? true : false}
				/>
			{/each}
		</div>
	{/if}
	<div class="next-process p-5 border-t">
		<div class="grid grid-cols-2 mb-4">
			<div class="symptoms-selection text-blue-4">
				已選症狀：{selected_symptoms_count}
			</div>
			<button class="text-right text-xs" on:click={clearSelected}>清空症狀</button>
		</div>
		{#if symptoms_selected_pass}
			<SymptomSlider extraStyle="mb-4" />
		{/if}
		{#if symptoms_selected_pass}
			<button on:click={showNextStep} class="w-full">
				<div
					class={twMerge('bg-neutral-300 text-white text-center p-2 rounded-lg', {
						'bg-gradient-to-r from-main-lighter to-main-light': symptoms_selected_pass
					})}
				>
					下一步
				</div>
			</button>
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
	</div>
	{#if nextStep}
		<SelectedSymtomPicker
			cancelSelection={backToLastStep}
			title="其他基本資料"
			showList={nextStep}
		/>
	{/if}
</SelectionList>
