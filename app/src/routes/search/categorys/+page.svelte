<script>
	import HeaderSearch from '../../../components/HeaderSearch.svelte';
	import ItemBlock from '../../../components/ItemBlock.svelte'
</script>
<svelte:head>
	<title>堅果好吃</title>
	<meta name="description" content="Notification" />
</svelte:head>
<style>
	.app {
		background: var(--gray-1);
	}
</style>
<div class="relative w-screen flex flex-col min-h-screen">
	
	<HeaderSearch return_btn={false} search_hint="搜尋醫院與醫生"/>

	<div class="grid grid-cols-2 justify-items-center items-center p-6">
		<div class="w-full h-16 p-2">
			<ItemBlock />
		</div>
		<div class="w-full h-16 p-2">
			<ItemBlock />
		</div>
		<div class="w-full h-16 p-2">
			<ItemBlock />
		</div>
		<div class="w-full h-16 p-2">
			<ItemBlock />
		</div>
		<div class="w-full h-16 p-2">
			<ItemBlock />
		</div>
	</div>
</div>

<!-- <div class="relative w-screen flex flex-col min-h-screen grid place-items-center drop-shadow">
	<div class="text-center">
		<h1>這裡是堅果樂園</h1>
		<a href="/">你可以點我返回</a>
	</div>
</div> -->
