<script>
    import ServiceButton from './gadgets/bubbleButton.svelte';
    import { Squares2x2, FaceSmile, Map, ChatBubbleOvalLeftEllipsis } from 'svelte-heros-v2';
    export let margins = 'mb-5';
</script>

<div class={margins}>
    <h2 class=" text-white mb-[15px] font-noto-sans">服務</h2>
    <div class='grid grid-flow-col justify-between'>
        <ServiceButton title='診所地圖' iconComponent={Map} />
        <ServiceButton title='症狀類別' iconComponent={Squares2x2} />
        <ServiceButton title='症狀搜尋' iconComponent={FaceSmile} />
        <ServiceButton title='許願池' iconComponent={ChatBubbleOvalLeftEllipsis} />
    </div>
</div>