<script>
	import NavigationBar from '../../components/NavigationMenu.svelte'
	import HeaderSearch from '../../components/HeaderSearch.svelte';
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="relative w-screen flex flex-col min-h-screen">
	<HeaderSearch />
	<div class="p-3">
		<p class="i18n">我的</p>
	</div>


	<div class="mt-auto">
		<NavigationBar />
	</div>
</div>
