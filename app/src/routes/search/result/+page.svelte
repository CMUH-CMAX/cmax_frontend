<script>
	import { Heart, ArrowUpRight, Phone } from 'svelte-heros-v2';
	import HeaderSearch from '../../../components/HeaderSearch.svelte';
	export let result_length = 3;
</script>
<svelte:head>
	<title>搜尋結果 | CMAX</title>
	<meta name="description" content="Notification" />
</svelte:head>
<style>
	.app {
		background: var(--gray-1);
	}
	.result-info > .num {
		color: var(--gray-5)
	}
	.result-info > .result-text {
		color: var(--gray-4);
	}
</style>
<div class="relative w-screen flex flex-col min-h-screen">
	<HeaderSearch return_btn={false} search_hint="搜尋醫院與醫生"/>

	<div class="px-4">
		<p class="result-info text-xs gray">
			<span class="num">{result_length}</span>
			<span class="result-text i18n">中醫搜尋結果</span>
		</p>
	</div>
	<hr>

	<div class="">
		<div class="grid grid-cols-3 grid-flow-col">
			<div class="col-span-7 py-4 px-6">
				<h1>某某某某診所</h1>
				<div>
					<span>#1</span>
					<span>#2</span>
					<span>#3</span>
					<span>#4</span>
				</div>
				<div>
					<span>Address</span>
				</div>
				<div>
					<span>Phone</span>
				</div>
			</div>
			<div class="col-span-1 grid grid-rows-4 justify-items-end px-2">
				<div class="row-span-2"><Heart /></div>
				<div class="grid grid-cols-2"><span>212m</span> <ArrowUpRight/></div>
				<div><Phone/></div>
			</div>
		</div>
		<hr>
	</div>

</div>