<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	type SymptomData = {
		part: string;
		symtom: string;
	};
	export let selected_symptoms = writable<SymptomData[]>([]);
</script>

<script>
	export let symptom;
	export let selected_body_part;

	let selected_symptoms_count = 0;
	$: selected_symptoms_count = $selected_symptoms.length;
	function select_symptoms() {
		let hash = encodeURIComponent(selected_body_part + this.dataset.name);
		if (selected_symptoms_count >= 5) return;
		if ($selected_symptoms[hash] != undefined) {
			delete $selected_symptoms[hash];
			// symptoms_selected_count-=1
		} else {
			$selected_symptoms[hash] = {
				part: selected_body_part,
				symptom: this.dataset.name
			};
			// symptoms_selected_count+=1;
		}
		console.log(select_symptoms);
	}
</script>

<div class="bg-white-f p-5 border-b text-base" on:click={select_symptoms} data-name={symptom}>
	{symptom}
</div>
