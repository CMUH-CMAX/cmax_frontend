<script>
  import { Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis, Eye } from 'svelte-heros-v2';
</script>
<svelte:head>
  <!-- something I might need. -->
</svelte:head>
<style>
	.service-icon {
		width: 57px;
		height: 57px;
		background: var(--linear-2);
	}
</style>
<div class="service-card bg-[#FFFFFFBF] grid grid-cols-4 rounded-lg py-5 mt-2 shadow-lg shadow-black-500/50">

  <div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer col">
    <div class="service-icon flex justify-center items-center rounded-full mb-2">
      <Squares2x2 color="white" size="24"/>
    </div>
    <span class="text-sm">症狀分類</span>
  </div>

  <div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer col">
    <div class="service-icon flex justify-center items-center rounded-full mb-2">
      <FaceSmile color="white" size="24"/>
    </div>
    <span class="text-sm">症狀檢查器</span>
  </div>

  <div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer col">
    <div class="service-icon flex justify-center items-center rounded-full mb-2">
      <Map color="white" size="24"/>
    </div>
    <span class="text-sm">診所地圖</span>
  </div>

  <div class="flex flex-col justify-center items-center duration-100 hover:scale-110 cursor-pointer col">
    <div class="service-icon flex justify-center items-center rounded-full mb-2">
      <ChatBubbleOvalLeftEllipsis color="white" size="24"/>
    </div>
    <span class="text-sm">許願池</span>
  </div>

</div>
