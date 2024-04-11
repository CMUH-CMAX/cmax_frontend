<script>
	import { handleOverlayAction } from '$lib/helper';
	export let handleOverlayClick = () => {};
	export let showOverlay = false;
</script>

{#if showOverlay}
	<div
		class="h-screen w-screen bg-gray-5 absolute top-0 left-0 opacity-50"
		use:handleOverlayAction
		on:overlayClick={handleOverlayClick}
	>
		<slot />
	</div>
{/if}
