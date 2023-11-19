<script>
	import HeaderSearch from '../../../components/HeaderSearch.svelte';
	import ItemBlock from '../../../components/ItemBlock.svelte'

	let symptom_list = [
		{text: '五官', link: ''},
		{text: '呼吸系統', link: ''},
		{text: '消化', link: ''},
		{text: '皮膚', link: ''},
		{text: '神經', link: ''},
		{text: '泌尿', link: ''},
		{text: '腎', link: ''},
		{text: '婦產', link: ''},
		{text: '小兒', link: ''},
		{text: '身心', link: ''},
		{text: '骨骼肌肉外傷', link: ''},
		{text: '內分泌', link: ''},
		{text: '風濕免疫', link: ''},
		{text: '血液腫瘤', link: ''},
		{text: '心血管', link: ''},
		{text: '家庭醫科', link: ''},
		{text: '慢性病控制', link: ''}
	]
</script>
<svelte:head>
	<title>症狀分類 | CMAX</title>
	<meta name="description" content="Notification" />
</svelte:head>
<style>
	.app {
		background: var(--gray-1);
	}

	/* .item:nth-child(3n-2){
		@apply pr-2;
	}
	.item:nth-child(3n-3){
		@apply pl-2;
	}
	.item:nth-child(3n-1){
		@apply px-1;
	} */
</style>
<div class="relative w-screen flex flex-col min-h-screen">
	
	<HeaderSearch return_btn={false} search_hint="搜尋醫院與醫生"/>

	<p class="ml-6 mt-6">症狀分類</p>
	<div class="grid justify-items-center items-center mx-6
						  xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ld:grid-cols-5 xl:grid-cols-6">
		{#each symptom_list as symptom }
		<div class="item w-full h-16 py-2 sm:odd:pr-2 sm:even:pl-2
																			md:odd:p-0 md:even:p-0 
																			">
			<a href="/search/result">
				<ItemBlock text="{symptom['text']}" img="{symptom['link']}" />
			</a>
		</div>
		{/each}
	</div>
</div>