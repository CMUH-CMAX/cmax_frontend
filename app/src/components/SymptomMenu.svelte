<script context="module" lang="ts">
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
	import { setContext } from 'svelte';
	import Overlay from './Overlay.svelte';
	import SymptomSlider from './gadgets/SymptomSlider.svelte';
	import { bodyPartChinese, symptomsList } from '$lib/constants';

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
	export let selected_body_part;
	export let menu_hide = true;
	export let symptoms_selected_pass = false;
	let selected_symptoms_count;

	$: menu_hide = selected_body_part === undefined;
	$: selected_symptoms_count = $selected_symptoms.length;
	$: symptoms_selected_pass = $selected_symptoms.length > 0;
</script>

<Overlay showOverlay={!menu_hide} handleOverlayClick={cancelSelection} />
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
			<span>{selected_body_part ? bodyPartChinese[selected_body_part] : ''}</span>
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
	</div>
</div>
