<script>
	import { goto } from '$app/navigation';
	import { goBack, twMerge } from '$lib/helper';
	import { MagnifyingGlass, ChevronLeft } from 'svelte-heros-v2';

	export let hint = '';
	export let return_btn = false;
	export let extraSpacing = '';
	export let divider = false;
</script>

<div class="sticky top-2">
	<div class={twMerge('flex items-center justify-between mb-3 mx-4 mt-6 ', extraSpacing)}>
		{#if return_btn}
			<ChevronLeft class="mr-4 text-neutral-400 focus:outline-none" on:click={goBack} />
		{/if}
		<label
			class={twMerge('flex relative bg-white rounded-full text-xs py-2 col-span-full flex-1', {
				'outline outline-neutral-200 outline-1': return_btn
			})}
		>
			<div class="flex items-center mr-1 ml-2">
				<MagnifyingGlass size="12" />
			</div>
			<input
				type="text"
				placeholder={hint}
				class="w-11/12 outline-none placeholder:tracking-widest"
				on:focus={() => {
					goto('/search');
				}}
			/>
		</label>
		{#if return_btn}
			<button
				on:click={() => {
					history.back();
				}}
				class="ml-4 text-neutral-400">取消</button
			>
		{/if}
	</div>
	{#if divider}
		<hr class="pb-2" />
	{/if}
</div>
