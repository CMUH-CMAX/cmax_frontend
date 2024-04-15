<script>
	import { PlusCircle } from 'svelte-heros-v2';

	export let symptom = '';
	export let urgentSymptom = '';
	let selected = false;

	$: selected = urgentSymptom == symptom;
</script>

<label class="group has-[:checked]:bg-main-lighter w-full bg-white h-[37px] py-1">
	<input
		type="checkbox"
		class="p-5 border-b text-base hidden"
		on:click={(e) => {
			urgentSymptom = e.target.value;
		}}
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
