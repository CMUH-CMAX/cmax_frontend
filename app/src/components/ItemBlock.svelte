<script>
	export let text = '範本';
	export let img = '';
</script>

<!-- that not going to work!!! -->

<div
	class="drop-shadow-lg rounded-xl w-full h-full flex items-center mr-auto gap-2 bg-white hover:scale-105 active:scale-100 duration-75"
>
	<img src={img} alt="" class="w-8 h-8 rounded-full ml-4 bg-img-alt" />
	<p class="text-center font-bold">{text}</p>
</div>
