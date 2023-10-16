<script>
	import NavigationBar from '../../components/NavigationMenu.svelte'
	import SearchBar from '../../components/Search.svelte'
</script>
<svelte:head>
	<title>Search</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="container w-96 flex flex-col min-h-screen">
	<SearchBar />
	<div class="p-3">
		<p class="i18n">Search Page</p>
	</div>
	<div class="mt-auto">
		<NavigationBar />
	</div>
</div>
