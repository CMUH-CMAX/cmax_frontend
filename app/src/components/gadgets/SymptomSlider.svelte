<script lang="ts">
	import { twMerge } from '$lib/helper';
	import { getContext } from 'svelte';
	import type { SymptomData } from '$components/SymptomMenu.svelte';
	import type { Writable } from 'svelte/store';

	export let extraStyle = '';
	let selectedSymptoms = getContext<Writable<SymptomData[]>>('selected_symptoms');

	function removeSelf(symptom: string) {
		let i = $selectedSymptoms.findIndex((symptomData) => symptomData.symptom === symptom);

		$selectedSymptoms.splice(i, 1);
		selectedSymptoms.set($selectedSymptoms);
	}
</script>

<div class={twMerge('w-full overflow-scroll flex gap-2', extraStyle)}>
	{#each $selectedSymptoms as selected}
		<button
			class="bg-gray-2 rounded-full px-2 py-1 shrink-0"
			on:click={removeSelf.bind(null, selected.symptom)}
			aria-roledescription={`Remove selected symptom: ${selected.symptom}`}
		>
			<span class="text-sm">{selected.symptom} &times;</span>
		</button>
	{/each}
</div>
