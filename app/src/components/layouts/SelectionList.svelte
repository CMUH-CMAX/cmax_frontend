<script>
	import { twMerge } from '$lib/helper';
	import { ChevronLeft } from 'svelte-heros-v2';

	export let cancelSelection = () => {};
	export let title = '';
	export let showList = false;
</script>

<div
	class={twMerge('fixed bg-white-f w-full bottom-0 border-t', {
		'display-none': showList
	})}
>
	<div
		class={twMerge('bg-white-f rounded-t-lg border-t-2 border-main-lighter', {
			'mt-0 animate-slideDown fill-mode-forwards': showList,
			'mt-[-300px] opacity-100 relative animate-slideUp': !showList
		})}
	>
		<div class="py-[10px] bg-main-lightest px-5 flex items-center">
			<ChevronLeft on:click={cancelSelection} class="mx-2 outline-none" />
			<span>{title}</span>
		</div>
		<slot />
	</div>
</div>
