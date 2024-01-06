<script>
    import {Bell} from 'svelte-heros-v2';
    export let extraStyle = '';
  </script>
  
  <a class={` bg-white-f text-blue-3 rounded-full w-10 h-10 flex justify-center items-center
  my-auto ${extraStyle}`} href="/notification">
    <Bell variation="outline" size="24" class="bell" />
  </a>