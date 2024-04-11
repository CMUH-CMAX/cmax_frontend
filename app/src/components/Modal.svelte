<script lang="ts">
	import { ExclamationCircle } from 'svelte-heros-v2';
	import Overlay from './Overlay.svelte';
	export let mainMessage = '';
	export let symptomsDescription: Array<string> = [];
	export let endMessage = '';
	export let buttonHint = '';
	export let showModal = false;

	function closeModal() {
		showModal = false;
	}

	$: console.log(showModal);
</script>

{#if showModal}
	<Overlay showOverlay={showModal} handleOverlayClick={closeModal} />
	<div
		class=" rounded-md w-[70%] absolute left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col py-2 px-6 bg-white border border-main-mild items-center"
	>
		<ExclamationCircle class="text-strong my-4" size="36" />
		<p class="text-center">{mainMessage}</p>
		<br />
		{#each symptomsDescription as description}
			<p class="self-start">{description}</p>
		{/each}
		<br />

		<p class="text-center font-bold">{endMessage}</p>
		<br />
		<button
			class="rounded-md hover:bg-main-light px-2 py-1 w-full relative bottom-1/2 -translate-y-1/2 tracking-widest h-10 text-white bg-gradient-to-r from-main-lighter to-main-light flex-grow"
			on:click={closeModal}>{buttonHint}</button
		>
	</div>
{/if}
