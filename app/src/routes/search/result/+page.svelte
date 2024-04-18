<script>
	import { Heart, ArrowUpRight, Phone } from 'svelte-heros-v2';
	import SearchBar from '$components/SearchBar.svelte';
	import { space } from 'postcss/lib/list';
	export let result_length = 0;

	let clinic_data = [
		{
			title: '醫林勤美診所',
			tags: ['家庭醫學', '婦科', '皮膚', '內分泌'],
			address: '403台中市西區臺灣大道二段375號5F之1',
			tel: '04-2277-3786',
			distance: 212
		}
	];

	$: result_length = clinic_data.length;
</script>

<svelte:head>
	<title>搜尋結果 | CMAX</title>
	<meta name="description" content="Notification" />
</svelte:head>
<div class="flex flex-col min-h-screen">
	<SearchBar return_btn={true} hint="搜尋醫院與醫生" divider={true} />
	<p class="text-xs h-auto my-3 ml-6">
		{result_length} <span class="text-silent">筆搜尋資料</span>
	</p>
	<hr />
	<main class="mx-6">
		{#each clinic_data as data}
			<div class="flex flex-col gap-2 my-3">
				<div class="flex justify-between">
					<h1 class="text-lg font-bold">{data.title}</h1>
					<Heart color="gray focus:outline-none" />
				</div>
				<p class="text-blue-4 text-sm">
					{#each data.tags as tag}
						# {`${tag} `}
					{/each}
				</p>
				<p class="flex justify-between text-sm">
					地址 : {data.address}
					<span class="flex"
						><span class="mr-2">{data.distance}m</span><ArrowUpRight
							class="bg-neutral-200 rounded-full p-2 focus:outline-none"
							color="gray"
							size="28"
						/></span
					>
				</p>
				<p class="flex justify-between text-sm">
					電話 : {data.tel}
					<Phone
						class="bg-neutral-200 rounded-full p-2 focus:outline-none"
						size="28"
						color="gray"
					/>
				</p>
			</div>
			<hr class="w-full" />
		{/each}
	</main>
</div>

<style>
	.app {
		background: var(--gray-1);
	}
	.result-info > .num {
		color: var(--gray-5);
	}
	.result-info > .result-text {
		color: var(--gray-4);
	}
</style>
