<script>
    import { ChevronLeft, MagnifyingGlass } from 'svelte-heros-v2';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    const gotoPreviousPage = () => {
      history.back();
    }
    const gotoHomePage = () => {
      goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
    }

</script>
<div class="headerbar prevent-select border-b flex items-center">
  <div class="flex-none pl-5" on:click={gotoHomePage}>
    <ChevronLeft/>
  </div>
  <div class="relative flex-1 w-max mx-5">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <MagnifyingGlass size="20"/>
          <!-- <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> -->
      </div>
      <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full placeholder:text-xs" placeholder="搜尋醫院與醫生" required>
  </div>
  <div class="flex-none text-right pr-5" on:click={gotoPreviousPage}>
    取消
  </div>
</div>