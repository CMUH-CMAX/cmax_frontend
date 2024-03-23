<script>
	import { twMerge } from '$lib/helper';
	let login_pass = false;
	let authentication_pass = true;
	let password_validation = false;
	let email_validation = false;
	let password = '';
	let validation_failed = false;
	$: login_pass = password_validation && authentication_pass;
</script>

<h1 class=" text-2xl text-center mt-[15%]">Welcome to CMAX</h1>
<main>
	<form class="mx-[5%] flex flex-col gap-4">
		<div class="flex flex-col gap-1">
			<label class="font-bold" for="email"> Email </label>
			<input
				type="email"
				id="email"
				placeholder="請輸入Email"
				class="outline outline-neutral-500 rounded-md p-2"
				required
			/>
			<p class=" text-neutral-300 text-xs">請注意分大小寫</p>
		</div>
		<div class="flex flex-col gap-1 peer">
			<label class="font-bold" for="password"> Password </label>
			<input
				type="password"
				id="password"
				placeholder="請輸入密碼"
				class="outline outline-neutral-500 rounded-md p-2 invalid:outline-red-500"
				pattern=""
			/>
		</div>
		<a href="#" class="text-center w-full block text-sm text-neutral-500">忘記密碼</a>

		<div class=" peer-has-[:invalid]:block hidden">
			<p class="text-red-4 text-xs">8-24位</p>
			<p class="text-red-4 text-xs">至少在大寫字母、小寫字母、數字、或特殊符號中含有任兩種的組合</p>
		</div>
		<button
			disabled
			type="submit"
			class=" text-white text-center p-2 rounded-lg bg-gradient-to-r from-main-lighter to-main-light"
			>下一步</button
		>
	</form>
</main>
