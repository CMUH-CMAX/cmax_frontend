<script lang="ts">
	import { PlusCircle } from 'svelte-heros-v2';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { SymptomData } from '../SymptomMenu.svelte';
	import Modal from '$components/Modal.svelte';

	export let symptom: string;
	export let selected_body_part: string;
	export let showWarning = false;
	let showModal = false;

	let selected_symptoms = getContext<Writable<SymptomData[]>>('selected_symptoms');
	let selected = false;

	$: selected =
		$selected_symptoms.find((symptomData) => symptomData.symptom == symptom) !== undefined;

	export function select_symptoms() {
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
		if (showWarning) {
			showModal = true;
		}
	}
</script>

{#if showWarning}
	<Modal
		mainMessage={`您好，由於您點擊「${symptom}」的症狀可能會有伴隨急症的風險。若您除了「${symptom}」以外伴隨以下的症狀，建議您立即至附近醫療院所就診！`}
		symptomsDescription={[
			'1、您的胸痛為急性發作',
			'2、伴隨胸悶、心悸，或伴有嚴重的呼吸急促、冒冷汗或噁心嘔吐'
		]}
		endMessage="有以上情況請考慮前往距離您最近的急診院所。"
		buttonHint="知道了"
		bind:showModal
	/>
{/if}
<label class="group has-[:checked]:bg-main-lighter w-full bg-white h-[37px] py-1">
	<input
		id={symptom}
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
