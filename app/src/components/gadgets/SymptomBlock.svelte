<script lang="ts">
	import { PlusCircle } from 'svelte-heros-v2';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { SymptomData } from '../SymptomMenu.svelte';

	export let symptom: string;
	export let selected_body_part: string;
	let selected_symptoms = getContext<Writable<SymptomData[]>>('selected_symptoms');
	let selected = false;
	$: selected =
		$selected_symptoms.find((symptomData) => symptomData.symptom == symptom) !== undefined;

	function select_symptoms() {
		let foundSelected =
			$selected_symptoms.find((symptomData) => symptomData.symptom === this.dataset.name) !==
			undefined;

		if (foundSelected) {
			let i = $selected_symptoms.findIndex(
				(symptomData) => symptomData.symptom === this.dataset.name
			);
			$selected_symptoms.splice(i, 1);
			selected_symptoms.set($selected_symptoms);
			return;
		}

		selected_symptoms.set([
			...$selected_symptoms,
			{ part: selected_body_part, symptom: this.dataset.name }
		]);
	}
</script>

<label class="group has-[:checked]:bg-main-lighter w-full bg-white h-[37px] py-1">
	<input
		type="checkbox"
		class="p-5 border-b text-base hidden"
		on:click={select_symptoms}
		data-name={symptom}
		value={symptom}
		bind:checked={selected}
	/>
	<div class="flex justify-between px-3 h-full w-full">
		<span class="my-auto">{symptom}</span>
		<span class="group-has-[:checked]:text-navigation-active group-has-[:checked]:font-bold my-auto"
			><PlusCircle strokeWidth="0.5" size="20" variation={selected ? 'solid' : 'outline'} /></span
		>
	</div>
</label>
