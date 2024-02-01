<script>
	import HeaderNavigator from '$components/gadgets/HeaderNavigator.svelte';
	import { twMerge } from '$lib/helper';

  let bulletins = [
    {
      type: 'info',
      class: '公告',
      content: "自民國107年開始，民眾看診需自備散彈槍。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    },
    {
      type: 'warning',
      class: '個人',
      content: "您已預約 24 小時候在「樵殊診所」14:30 的看診。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    },
    {
      type: "info",
      class: '公告',
      content: "由於近期台中消波塊之亂，大量民眾流離失所，目前樵殊診所已開放民眾短暫居住，前往時請自備沐浴用品與禦寒衣物。",
      date: "2023年4月28日 4:49 AM",
      note: "帳戶資料"
    }
  ]
</script>
<svelte:head>
  <meta name="theme-color" id="theme-color" content="#1A5B5B">
  <title>通知</title>
</svelte:head>

<div>
	<header>
    <HeaderNavigator mainTitle="通知" featureTitle="全部已讀" />
  </header>
  <main class="grid">
    <!-- for each bulletin -->
    {#each bulletins as bulletin}
    <section class="hover:bg-tap p-5 border-b cursor-pointer">

      <div class="flex mb-1">
        <div class={twMerge("bg-bulletin text-white text-sm py-1 px-1.5 rounded-lg"
        ,
        {
          "bg-bulletin-info": bulletin["type"] === 'info',
          "bg-bulletin-warning": bulletin["type"] === 'warning',
        })}
        >
          {bulletin.class}
        </div>
      </div>
      <p class="text-main text-base">{bulletin.content}</p>
      <p class="text-silent text-sm text-gray">
        <span>{bulletin.date}</span>
        <span>・</span>
        <span>{bulletin.note}</span>
      </p>
    </section>
    {/each}
  </main>

  <footer class="text-silent text-center text-xs p-5">
    <span>最後更新時間: {new Date().toISOString().replace(/T|Z/g, ' ')}</span>
  </footer>  
</div>

<style>

</style>