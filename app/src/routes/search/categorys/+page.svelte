<script>
	import SearchBar from '$components/SearchBar.svelte';

	import ItemBlock from '$components/ItemBlock.svelte';

	let symptom_list = [
		{ text: '五官', link: '' },
		{ text: '呼吸系統', link: '' },
		{ text: '消化', link: '' },
		{ text: '皮膚', link: '' },
		{ text: '神經', link: '' },
		{ text: '泌尿', link: '' },
		{ text: '腎', link: '' },
		{ text: '婦產', link: '' },
		{ text: '小兒', link: '' },
		{ text: '身心', link: '' },
		{ text: '骨骼肌肉外傷', link: '' },
		{ text: '內分泌', link: '' },
		{ text: '風濕免疫', link: '' },
		{ text: '血液腫瘤', link: '' },
		{ text: '心血管', link: '' },
		{ text: '家庭醫科', link: '' },
		{ text: '慢性病控制', link: '' }
	];
</script>

<svelte:head>
	<title>症狀分類 | CMAX</title>
	<meta name="description" content="Notification" />
</svelte:head>
<div class="w-screen min-h-screen">
	<SearchBar return_btn={true} hint="搜尋醫院與醫生" divider={true} />
	<p class="ml-6 mt-6">症狀分類</p>
	<div
		class="grid mx-6 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ld:grid-cols-5 xl:grid-cols-6"
	>
		{#each symptom_list as symptom}
			<a href="/search/result" class="h-16">
				<ItemBlock text={symptom['text']} img={symptom['link']} />
			</a>
		{/each}
	</div>
</div>

<style>
	/* .app {
		background: var(--gray-1);
	} */
</style>
