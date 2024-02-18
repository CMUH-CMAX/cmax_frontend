<script>
	import { goto } from '$app/navigation';
	import { MagnifyingGlass, Home, User } from 'svelte-heros-v2';
	import { page } from '$app/stores';
	import { twMerge } from '$lib/helper';

	let searchUrl = '/search';
	let homeUrl = '/';
	let personalInfoUrl = '/about';
	let currentPath = $page.url.pathname;
</script>

<nav>
	<ul class="w-full fixed inset-x-0 bottom-0 flex justify-around bg-white">
		<li class="h-10 my-2">
			<Home
				strokeWidth="2"
				class={twMerge('text-navigation-inactive', {
					'text-navigation-active': currentPath === homeUrl
				})}
				size="24"
				on:click={() => {
					goto(homeUrl);
				}}
			/>
			<h3
				class={twMerge('text-[0.625rem] text-center text-navigation-inactive', {
					'text-navigation-active font-bold': currentPath === homeUrl
				})}
			>
				首頁
			</h3>
		</li>
		<li class="h-10 my-2">
			<MagnifyingGlass
				strokeWidth="2"
				class={twMerge('text-navigation-inactive', {
					'text-navigation-active': currentPath === searchUrl
				})}
				size="24"
				on:click={() => {
					goto(searchUrl);
				}}
			/>
			<h3
				class={twMerge('text-[0.625rem] text-center text-navigation-inactive', {
					'text-navigation-active font-bold': currentPath === searchUrl
				})}
			>
				搜尋
			</h3>
		</li>
		<li class="h-10 my-2">
			<User
				size="24"
				strokeWidth="2"
				class={twMerge('text-navigation-inactive', {
					'text-navigation-active': currentPath === personalInfoUrl
				})}
				on:click={() => {
					goto('/about');
				}}
			/>
			<h3
				class={twMerge('text-[0.625rem] text-center text-navigation-inactive', {
					'text-navigation-active font-bold': currentPath === personalInfoUrl
				})}
			>
				我的
			</h3>
		</li>
	</ul>
</nav>
