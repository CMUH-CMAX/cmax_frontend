<script>
    import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    export let return_btn = true;
    export let search_hint = "搜尋";
    const gotoPreviousPage = () => {
      location.href = '/'
    }
    const gotoHomePage = () => {
      location.href = '/'
    }

</script>
<div class="headerbar prevent-select border-b flex items-center">
  {#if return_btn}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="flex-none pl-5" on:click={gotoHomePage}>
    <ChevronLeft/>
  </div>
  {/if}
  <div class="relative flex-1 w-max mx-5 my-2">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MagnifyingGlass size="20"/>
      </div>
      <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full placeholder:text-xs" placeholder="{search_hint}" required>
  </div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex-none text-right pr-5" on:click={gotoPreviousPage}>
    取消
  </div>
</div>