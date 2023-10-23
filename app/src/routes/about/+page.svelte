<script>
	import { FaceSmile, Squares2x2 } from 'svelte-heros-v2';
	import NavigationBar from '../../components/NavigationMenu.svelte'
	import HeaderNavigator from '../../components/HeaderNavigator.svelte';
	let lastname = "殊樵";
	let appointment = "無";
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="relative w-screen flex flex-col min-h-screen">
	<HeaderNavigator mainTitle="我的" themeColor="default"/>
	<div class="grid grid-cols-2 p-5 relative">
		<div>
			<p class="i18n text-lg">{lastname}</p>
			<p class="i18n text-xs">即將到來的看診：{appointment}</p>
		</div>
		<div class="flex justify-end">
			<img class="w-10 h-10 rounded-full bg-sky-600" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Default avatar">
		</div>
	</div>

	<hr>

	<div class="grid grid-cols-2 place-items-center text-center my-5">
		<div class="">
			<Squares2x2 class="mx-auto mb-1/2" size="32" color="#9AD0D0"/>
			<span class="text-xs i18n">設定</span>
		</div>
		<div>
			<FaceSmile class="mx-auto mb-1/2" size="32" color="#9AD0D0"/>
			<span class="text-xs i18n">我的最愛</span>
		</div>
	</div>

	<hr>

	<div class="mt-auto">
		<NavigationBar />
	</div>
</div>
