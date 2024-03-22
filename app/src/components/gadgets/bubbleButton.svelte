<script lang="ts">
	import { twMerge } from '$lib/helper';
	import type { SvelteComponent, ComponentType } from 'svelte';
	type HintColor = 'black' | 'theme' | 'white';
	type Size = 'md' | 'lg';
	type Color = 'black' | 'theme' | 'white' | 'gray';
	export let hint: string;
	export let content: ComponentType<SvelteComponent> | undefined = undefined;
	export let color: Color = 'white';
	export let size: Size = 'lg';
	export let hintColor: HintColor = 'white';
</script>

<div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer">
	<div
		class={twMerge(
			'w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-white mb-2 active:scale-75 transition-transform duration-75 scale-100',
			{
				'bg-main-light': color === 'theme',
				'bg-bulletin': color === 'gray',
				'w-[40px] h-[40px]': size === 'md'
			}
		)}
	>
		<!-- svelte-ignore ts -->
		<slot name="buttonText">
			<svelte:component this={content} size="28" class="text-strong outline-none" />
		</slot>
	</div>
	<span
		class={twMerge('text-sm text-white', {
			'text-black': hintColor === 'black',
			'text-2xs': size === 'md'
		})}>{hint}</span
	>
</div>
