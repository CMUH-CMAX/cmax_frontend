<script>
	import BellItem from '../components/BellItem.svelte';
	import Navigation from '../components/NavigationMenu.svelte';
	import ServiceProvide from '../components/ServiceProvide.svelte';
	import WellDesignSearchBtn from '../components/WellDesignSearchBtn.svelte';
	import SymptomsRanking from '../components/SymptomsRanking.svelte';

	import Mascots from '../components/Mascots.svelte';

	import mountainSvg from '$lib/assets/mountain.svg';
	let lastname = '書僑';
</script>
<svelte:head>
	<title>首頁</title>
</svelte:head>
<style>#home{background: url('/Stars.svg'), var(--linear-x21);}</style>
<div id="home" class="relative w-screen flex flex-col min-h-screen">
	<div class="w-full mx-auto grid grid-cols-4 gap-4 content-around p-5 z-10">
		<div class="col-span-3 text-white">
			<p class="text-xs">Hi，<span class="lastname font-semibold i18n">{lastname}</span>！</p>
			<p class="text-base i18n">今天過得好嗎？</p>
		</div>
		<div class="flex justify-end">
			<div class="notification">
				<a href="/notification">
					<BellItem />
				</a>
			</div>
		</div>
		<div class="col-span-4">
			<a href="/search">
				<WellDesignSearchBtn />
			</a>
		</div>
	</div>
	
	<Mascots />

	<div class="grid mx-5 z-10">
		<div class="grid grid-cols-4 gap-4 pb-2 text-white text-base">
			<p class="col-span-3 gap-4 pb-2">最近常見症狀</p>
			<p class="text-end">
				<a href="/recent">
					查看更多
				</a>
			</p>
		</div>
		<SymptomsRanking />
	</div>
	
	<div class="service-slot mx-5 z-10">
  	<span class="text-white drop-shadow-xl">服務</span>
		<ServiceProvide />
	</div>
	<div class="p-5 gap"></div>
	<img class="mountainSvg absolute w-screen inset-x-0 bottom-0" src={mountainSvg} alt="The mountain" disbled draggable="false"/>
	<div class="mt-auto fixed inset-x-0 bottom-0 z-20">
		<Navigation />
	</div>
</div>