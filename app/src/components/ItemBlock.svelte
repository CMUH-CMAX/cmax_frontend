<script>
  export let text = "範本";
</script>
<style>
  .item:hover{
  }
</style>
<!-- that not going to work!!! -->

<div class="item drop-shadow rounded-lg w-full h-full grid grid-cols-2 justify-center  items-center bg-white">
  <img class="rounded-full" width="48" src="" alt="">
  <p>{text}</p>
</div>