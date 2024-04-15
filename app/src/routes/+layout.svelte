<script>
	import '../app.css';
</script>

<svelte:head>
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
	/>
	<link rel="manifest" href="/manifest.json" />
</svelte:head>
<div class="app">
	<slot />
</div>
