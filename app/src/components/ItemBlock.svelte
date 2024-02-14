<script>
  export let text = "範本";
  export let img = "";
</script>
<style>
  .item:hover{
  }
  img {
    background: var(--gray-2);
  }
</style>
<!-- that not going to work!!! -->

<div class="item drop-shadow rounded-lg w-full h-full grid grid-cols-3 justify-center items-center bg-white hover:scale-105 active:scale-100 duration-75">
  <img src="{img}" alt="" class="w-8 h-8 m-auto rounded-full">
  <p class="col-span-2">{text}</p>
</div>