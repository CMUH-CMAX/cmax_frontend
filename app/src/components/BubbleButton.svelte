<script type="module">
  export let size = "sm";
  export let content = "";
  export let hint = "";
  export let hint_off = hint=='' ? true : false;
  export let color = "";
  let bubble_color_supported = ["blue", "white", "gray"]; // default bubble color will be the first element.
  let bubble_selected_index = bubble_color_supported.indexOf(color);
  let bubble_color = bubble_color_supported[(bubble_selected_index == -1 ? 0 : bubble_selected_index)];
</script>
<style>
.bubble-color-white > .bubble-btn {
  background-color: var(--white-f);
  color: black;
  border: 1px solid black;
}
.bubble-color-blue > .bubble-btn {
  background-color: var(--blue-3);
  color: white;
}
.bubble-color-gray > .bubble-btn {
  background-color: var(--gray-4);
  color: white;
}
.bubble-btn {
  color: var(--white-f);
}
.bubble-container[data-size='sm'] > .bubble-btn {
  width: 32px;
  height:32px;
  border-radius: 50%;
}
.bubble-container[data-size='sm'] {
  font-size: 12px;
}
.bubble-container[data-size='md'] > .bubble-btn {
  width: 48px;
  height:48px;
  font-size:16px;
  background-color: var(--blue-3);
  border-radius: 50%;
}
.bubble-container[data-size='md'] > .bubble-btn {}
.bubble-container[data-size='xl'] > .bubble-btn {}
.bubble-container[data-size='2xl'] > .bubble-btn {}


</style>
<div class="bubble-container grid place-items-center bubble-color-{bubble_color}" data-size="{size}">
  <div class="bubble-btn grid place-items-center">{content}</div>
  {#if !hint_off}
  <span class="hint">{hint}</span>
  {/if}
</div>