<script>
	import { FaceSmile, Squares2x2, XMark } from 'svelte-heros-v2';
	import NavigationBar from '../../components/NavigationMenu.svelte'
	import HeaderSearch from '../../components/HeaderSearch.svelte'

	let searchHistory = ['仁仁', '杏儒','行德', '許鴻安', '塵瞧舒', '王安石']
</script>
<svelte:head>
	<title>Search</title>
	<meta name="description" content="About this app" />
</svelte:head>
<style>
	/* .XMark {} */
</style>
<div class="relative w-screen flex flex-col min-h-screen">
	
	<HeaderSearch return_btn={false} search_hint="搜尋醫院與醫生"/>

	<div class="grid grid-cols-2 place-items-center my-10">
		<div class="">
			<Squares2x2 class="mx-auto mb-1/2" size="32" color="#9AD0D0"/>
			<span class="text-xs">依症狀分類搜尋</span>
		</div>
		<div>
			<FaceSmile class="mx-auto mb-1/2" size="32" color="#9AD0D0"/>
			<span class="text-xs">依身體部位搜尋</span>
		</div>
	</div>

	<hr class="p-2">

	<div class="grid grid-cols px-4">
		<div class="container grid grid-cols-2 pb-4">
			<span class="text-start">最近搜尋</span>
			<span class="text-end text-xs">全部清除</span>
		</div>

		{#each searchHistory as name}
		<div class="container grid grid-cols-2 pb-4">
			<span class="text-start text-sm">{name}</span>
			<div class="grid justify-end">
				<XMark class="XMark" size="16" color="#BAB6B2"/>
			</div>
		</div>
		{/each}
	</div>

	<hr class="p-2">

	<span class="w-full text-center text-xs">沒有更多搜尋結果了</span>

	<div class="mt-auto">
		<NavigationBar />
	</div>
</div>
