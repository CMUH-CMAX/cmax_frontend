<script>
	import LoginPage from '$components/LoginPage.svelte';
</script>

<LoginPage>
	<a href="#" class="text-center w-full block text-sm text-neutral-500" slot="sub-option"
		>忘記密碼</a
	>
	<a
		href="/join/register"
		class="fixed bottom-2 w-full text-center left-0 right-0"
		slot="counterpart">立即註冊</a
	>
</LoginPage>
