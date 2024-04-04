<script>
	import { handleOverlayAction } from '$lib/helper';
	export let handleOverlayClick = () => {};
	export let showOverlay = false;
</script>

{#if showOverlay}
	<div
		class="h-screen w-screen bg-neutral-500 absolute top-0 left-0 opacity-10"
		use:handleOverlayAction
		on:overlayClick={handleOverlayClick}
	>
		<slot />
	</div>
{/if}
