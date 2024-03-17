<script>
  import { ChevronLeft, Eye } from 'svelte-heros-v2';
	import HeaderNavigator from '../../components/HeaderNavigator.svelte';

	import { onMount } from 'svelte';
  let recent_symptoms = []
  onMount(async () => {
    recent_symptoms = await (await fetch("http://localhost:8000/api/symptoms")).json();
  })
</script>
<svelte:head>
  <meta name="theme-color" id="theme-color" content="#1A5B5B">
</svelte:head>
<style>
  .headerbar {
    color: var(--gray-1);
    background: var(--blue-5);
    border-bottom: 1px solid #E5E5E5;
  }


	.symptoms-card {
		transition-duration: 0.1s;
		cursor: pointer;
		background: var(--white-75p);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    
	}
	.symptoms-card:hover {
    transform: scale(1.05);
		background: var(--white-f);
	}
	.symptoms-card::after {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		/* transform: translateY(-100%); */
		/* transform to top left  */
		transform: translate(-120%, -120%);
		font-size: 9px;
		width:17px;
		height:17px;
		content: attr(data-rank);
		border: 1px solid var(--white-f);
		border-radius: 50%;
		background: var(--linear-gold);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1);
		transition-duration: 0.1s;
	}
  .symptoms-card:active {
    transform: scale(1);
    background: var(--blue-1);
  }
	.symptoms-card:hover::after {
		/* scale */
		transform: translate(-120%, -120%) scale(1.2);
	}
</style>
<div class="relative w-screen flex flex-col min-h-screen">
	<HeaderNavigator mainTitle="近期常見症狀" />
  
  <div class="p-5">

    {#each recent_symptoms as symptom, i}
    <div class="symptoms-card flex col-span rounded px-5 py-3.5 text-sm border shadow" data-rank="{i+1}">
      <div class="flex justify-start">
        <span class="pr-1">
          {symptom.name}
        </span>
        <small>{symptom.academic}</small>
      </div>
      <div class="flex justify-end mr-0 ml-auto items-center visit prevent-select">
        <div class="visit-eye">
          <Eye variation="outline" size="14"/>
        </div>
        <span>{symptom.visit}</span>
      </div>
    </div>
    {/each}

  </div>

  <div class="last-updated text-center text-xs p-5">
    <span>最後更新時間: {new Date().toISOString().replace(/T|Z/g, ' ')}</span>
  </div>

</div>