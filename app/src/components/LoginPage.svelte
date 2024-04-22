<script lang="ts">
	import { twMerge } from '$lib/helper';

	let login_pass = false;
	let authenticated = false;
	let password_validated = false;
	let disabled = true;
	let email_validated = false;
	let password = '';

	let password_min_length = 8;
	let password_max_length = 24;

	function setEmailValid(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		email_validated = e.currentTarget.checkValidity();
	}
	function setPasswordValid(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		password_validated = e.currentTarget.checkValidity();
	}
	$: {
		disabled = !password_validated || !email_validated;
	}
</script>

<h1 class=" text-2xl text-center mt-[15%]">Welcome to CMAX</h1>
<main>
	<form
		class="mx-[5%] flex flex-col gap-4"
		on:submit={() => console.log('submitted')}
		method="post"
	>
		<div class="flex flex-col gap-1 peer/email">
			<label class="font-bold" for="email"> Email </label>
			<input
				name="email"
				type="email"
				id="email"
				placeholder="請輸入Email"
				class="outline outline-neutral-500 rounded-md p-2"
				on:input={setEmailValid}
				required
			/>
			<p class=" text-neutral-300 text-xs">請注意分大小寫</p>
		</div>
		<div class="flex flex-col gap-1 peer/password">
			<label class="font-bold" for="password"> Password </label>
			<input
				name="password"
				type="password"
				id="password"
				placeholder="請輸入密碼"
				class="outline outline-neutral-500 rounded-md p-2 invalid:outline-red-500"
				maxlength={password_max_length}
				minlength={password_min_length}
				on:input={setPasswordValid}
			/>
		</div>
		<slot name="sub-option" />

		<div class="peer-has-[:invalid]/password:block hidden">
			<p class="text-red-4 text-xs">8-24位</p>
			<p class="text-red-4 text-xs">需含有大寫字母、小寫字母、數字、及特殊符號各至少一個的組合</p>
		</div>
		<button
			type="submit"
			class={twMerge(
				' text-white text-center p-2 rounded-lg bg-gradient-to-r from-main-lighter to-main-light',
				{
					'bg-none bg-slate-400': disabled
				}
			)}>下一步</button
		>
		<slot name="counterpart" />
	</form>
</main>
<footer />
