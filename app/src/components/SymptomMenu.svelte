<script context="module" lang="ts">
	import SelectionList from './layouts/SelectionList.svelte';
	import { writable } from 'svelte/store';
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
	import { onMount, setContext } from 'svelte';
	import Overlay from './Overlay.svelte';
	import SymptomSlider from './gadgets/SymptomSlider.svelte';
	import { bodyPartChinese, symptomDictionary, symptomsList } from '$lib/constants';
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
	export let menu_hide = true;
	export let symptoms_selected_pass = false;
	let selected_symptoms_count = 0;

	$: menu_hide = selected_body_part === undefined;
	$: selected_symptoms_count = $selected_symptoms.length;
	$: symptoms_selected_pass = $selected_symptoms.length > 0;

	onMount(() => {
		const body_part = $page.url.searchParams.get('body_part') || '';
		const recentSymptom = $page.url.searchParams.get('name') || '';
		if (recentSymptom) {
			const symptomChinese = symptomDictionary[recentSymptom];
			selected_symptoms.set([...$selected_symptoms, { part: body_part, symptom: symptomChinese }]);
			console.log(document.getElementById(symptomChinese));
			document.getElementById(symptomChinese)?.click();
		}
	});
</script>

<Overlay showOverlay={!menu_hide} handleOverlayClick={cancelSelection} />
<SelectionList
	{cancelSelection}
	showList={menu_hide}
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
	</div>
</SelectionList>
