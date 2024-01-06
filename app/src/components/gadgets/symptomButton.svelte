<script>
	import { Eye } from "svelte-heros-v2";

    export let symptom = '發燒';
    export let count = 3578;
    export let notificationCount = 1;
</script>

<div class="relative text-black text-md flex-1 ">
    <button data-count={notificationCount >= 99 ? '99+':notificationCount} class="text-xs w-full flex text-inherit bg-white rounded-md justify-between h-[3rem] items-center px-5 after:content-[attr(data-count)] after:absolute after:left-0 after:-top-2 after:bg-notification-badge after:rounded-[50%] after:w-max after:h-max after:px-1 after:flex after:justify-center after:items-center after:border-2 after:border-white after:text-notification-size">
        <h3 class="">{symptom}</h3>
        <div class="flex gap-2">
            <Eye variation='outline' size='14'/>
            <p>{count}</p>
        </div>
    </button>
</div>