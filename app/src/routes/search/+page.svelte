<script>
	import { FaceSmile, Squares2x2, XMark } from 'svelte-heros-v2';
	import NavigationBar from '$components/Navigation.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	import { flip } from 'svelte/animate';

	let searchHistory = ['仁仁', '杏儒', '行德', '許鴻安', '塵瞧舒', '王安石'];

	function remove_history(name) {
		searchHistory = searchHistory.filter((n) => n !== name);
	}
	function clear_history() {
		searchHistory = [];
	}
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="w-screen min-h-screen">
	<SearchBar return_btn={true} hint="搜尋醫院與醫生" divider={true} />
	<div class="grid grid-cols-2 place-items-center">
		<a href="/search/categorys">
			<div class="py-8">
				<Squares2x2 class="mx-auto mb-1/2" size="32" color="#9AD0D0" />
				<span class="text-xs">依症狀分類搜尋</span>
			</div>
		</a>
		<a href="/search/body">
			<div class="py-8">
				<FaceSmile class="mx-auto mb-1/2" size="32" color="#9AD0D0" />
				<span class="text-xs">依身體部位搜尋</span>
			</div>
		</a>
	</div>

	<hr class="p-2" />

	<div class="grid px-4">
		<div class="container flex justify-between pb-4">
			<span class="text-start">最近搜尋</span>
			<button class="w-fit active:border-none" on:click={clear_history}>全部清除</button>
		</div>

		{#each searchHistory as name (name)}
			<div class="flex pb-4" animate:flip>
				<a class="flex-1" href="/search/result?name={encodeURIComponent(name)}">
					<span class="text-start text-sm pb-4">{name}</span>
				</a>
				<XMark class="m-1" size="16" color="#BAB6B2" on:click={(e) => remove_history(name)} />
			</div>
		{/each}
	</div>

	<hr class="p-2" />

	<p class="w-full mx-auto text-center text-xs">沒有更多搜尋結果了</p>

	<div class="mt-auto">
		<NavigationBar />
	</div>
</div>

<style>
	/* .XMark {} */
</style>
