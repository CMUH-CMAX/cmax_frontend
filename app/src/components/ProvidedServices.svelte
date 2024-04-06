<script>
	import ServiceButton from './gadgets/BubbleButton.svelte';
	import { Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis } from 'svelte-heros-v2';
	export let margins = 'mb-5';
</script>

<div class={margins}>
	<h2 class=" text-white mb-[15px] font-noto-sans">服務</h2>
	<div class="grid grid-flow-col justify-between">
		<ServiceButton hint="診所地圖" content={Map} />
		<ServiceButton hint="症狀類別" content={Squares2x2} />
		<ServiceButton hint="症狀搜尋" content={FaceSmile} />
		<ServiceButton hint="許願池" content={ChatBubbleOvalLeftEllipsis} />
	</div>
</div>
