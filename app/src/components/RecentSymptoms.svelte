<script>
	import SymptomButton from "./gadgets/SymptomButton.svelte";
    export let margins = 'mb-5';
</script>
<div class={margins}>
    <header class="flex justify-between text-white mb-4">
        <h2>近期常見症狀</h2>
        <a class="text-sm" href="/recent">查看更多</a>
    </header>
    <nav class="flex gap-2 max-w-screen-sm ">
        <SymptomButton />
        <SymptomButton symptom='紅疹' count={1985}/>
    </nav>
</div>