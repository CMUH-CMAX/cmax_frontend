<script>
    import { ChevronLeft } from 'svelte-heros-v2';
    export let retBtn = null;
    export let mainTitle = ""
    export let featureTitle = ""
    export let themeColor = "default";
    let retEnable = true || (retBtn != null);
    let mainEnable = true || (mainTitle != "");
    let featureEnable = true || (featureTitle != "");
    let colSize = [retBtn, mainEnable, featureEnable].map(v=>v===true?1:0).reduce((a,b)=>a+b)
  </script>
  <header class="border-b border-gray-300 grid grid-cols-{colSize} headerbar-{themeColor} text-black h-16 w-full grid grid-cols-3 p-5 prevent-select">
    {#if retEnable}
    <div class="return">
      <a href="/">
        <ChevronLeft/>
      </a>
    </div>
    {/if}
    {#if mainEnable}
    <div class="flex justify-center">{mainTitle}</div>
    {/if}
    {#if featureEnable}
    <div class="readed flex justify-end cursor-pointer">{featureTitle}</div>
    {/if}
  </header>

  <style>
    .headerbar-white {
      background: white;
      color: black;
    }
    .headerbar-default {
      background: var(--blue-5);
    }
    .readed:hover {
      color: var(--blue-1);
    }
    .readed:active {
      color: var(--blue-2);
    }
  </style>