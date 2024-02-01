<script>
    import { MagnifyingGlass, Home, User } from 'svelte-heros-v2';
</script>

<nav>
    <ul class="w-full fixed inset-x-0 bottom-0 flex justify-around bg-white">
        <li class="h-10 my-2">
            <Home size='24' />
            <h3 class="text-[0.625rem]">首頁</h3>
        </li>
        <li class="h-10 my-2">
            <MagnifyingGlass size='24' />
            <h3 class="text-[0.625rem]">搜尋</h3>
        </li>
        <li class="h-10 my-2">
            <User size='24' />
        <h3 class="text-[0.625rem]">我的</h3>
        </li>
    </ul>
</nav>