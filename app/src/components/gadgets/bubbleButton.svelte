<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let hint: string;
	export let content: SvelteComponent | string;
</script>

<div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer">
	<div class="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-white mb-2">
		<!-- svelte-ignore ts -->

		<svelte:component this={content} size="28" class="text-strong outline-none" />
	</div>
	<span class="text-sm text-white">{hint}</span>
</div>
