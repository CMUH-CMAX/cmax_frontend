<script>
	import NavigationBar from '../../components/NavigationMenu.svelte'
	import Search from '../../components/Search.svelte';
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="relative w-screen flex flex-col min-h-screen">
	<Search />
	<div class="p-3">
		<p class="i18n">Hello</p>
	</div>
</div>
