<script>
	import SymptomButton from "./gadgets/symptomButton.svelte";
    export let margins = 'mb-5';
</script>
<div class={margins}>
    <header class="flex justify-between text-white mb-4">
        <h2>近期常見症狀</h2>
        <h3 class="text-sm">查看更多</h3>
    </header>
    <nav class="flex gap-2 max-w-screen-sm ">
        <SymptomButton />
        <SymptomButton symptom='紅疹' count={1985}/>
    </nav>
</div>