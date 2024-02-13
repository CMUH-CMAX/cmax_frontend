<script>
	import MainPageLogo from '$components/MainPageLogo.svelte';
	import RecentSymptoms from '$components/RecentSymptoms.svelte';
	import NotificationBtn from '$components/NotificationButton.svelte';
	import ProvidedServices from '$components/ProvidedServices.svelte';
	import Navigation from '$components/Navigation.svelte';
	import SearchBar from '$components/SearchBar.svelte';
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="CMAX Home Page"/>
</svelte:head>

<style>#home{background: url('/Stars.svg'), var(--linear-x21);}</style>

<div id='home' class="bg-gradient-to-b from-main-light via-main-strong to-main-strong h-screen px-5">
	<header class="w-full">
		<div class="flex py-4">
			<div class=" text-white-f text-lg">
				<h2>Hi, 殊樵</h2>
				<h2>今天過得好嗎？</h2>
			</div>
			<!-- bell item -->
			
			<NotificationBtn extraStyle="ml-auto"/>
		</div>
		<!-- turn it into Search Component -->
		<SearchBar hint="症狀、醫院與醫生" jumpToSearch={true}/>
	</header>
	<main class="w-full">
		<MainPageLogo />
		<RecentSymptoms />
		<ProvidedServices />
	</main>
	<Navigation />
</div>