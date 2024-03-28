<script lang="ts">
	import { twMerge } from '$lib/helper';
	let login_pass = false;
	let authentication_pass = true;
	let password_validation = false;
	let email_validation = false;
	let password = '';
	let validation_failed = false;
	let password_min_length = 8;
	$: login_pass = password_validation && authentication_pass;

	function validatePassword(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		let inputValue = e.currentTarget.value;
		if (inputValue.length < password_min_length) {
			return;
		}

		let lowerRegex = /[a-z]+/g;
		let upperRegex = /[A-Z]+/g;
		let specialRegex = /[_#@%\*\-]+/g;
		let numberRegex = /[/d]+/g;

		let lowerTest = lowerRegex.test(inputValue) ? 1 : 0;
		let upperTest = upperRegex.test(inputValue) ? 1 : 0;
		let specialTest = specialRegex.test(inputValue) ? 1 : 0;
		let numberTest = numberRegex.test(inputValue) ? 1 : 0;

		console.log(e.currentTarget);
		if (lowerTest + upperTest + specialTest + numberTest <= 1) {
			e.currentTarget.validity.valid = false;
		} else {
			e.currentTarget.validity.valid = true;
		}
	}
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
				maxlength="24"
				minlength="8"
				pattern="(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*\d)(?=.*[_#@%\*\-!]+)(?=.*[A-Za-z0-9]+).+"
			/>
		</div>
		<a href="#" class="text-center w-full block text-sm text-neutral-500">忘記密碼</a>

		<div class="peer-has-[:invalid]:block hidden">
			<p class="text-red-4 text-xs">8-24位</p>
			<p class="text-red-4 text-xs">需含有大寫字母、小寫字母、數字、及特殊符號各至少一個的組合</p>
		</div>
		<button
			disabled
			type="submit"
			class=" text-white text-center p-2 rounded-lg bg-gradient-to-r from-main-lighter to-main-light"
			>下一步</button
		>
	</form>
</main>
