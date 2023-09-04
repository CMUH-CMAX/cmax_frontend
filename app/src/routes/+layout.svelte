<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<h1 class="text-3xl font-bold underline">
		Hello world!
	</h1>
	<main>
		<slot />
	</main>

	<footer>
		<p>查看 <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
  :global(h1) {
    background-color: theme(colors.gray.100);
  }
</style>
