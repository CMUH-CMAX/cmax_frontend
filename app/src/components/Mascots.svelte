<script>
	import moonAndRabitSvg from '$lib/assets/Moon&Rabit.svg';
	import cloudSvg from '$lib/assets/Cloud.svg';
</script>
<style>
	.signin-slot > .front-cover {
		position: absolute;
		/* add keyframe */
		animation: front-cover 100s ease-in-out infinite;
	}
	/* animation of front-cover */
	@keyframes front-cover {
		0% {
			transform: translateX(-105%);
		}
		100% {
			transform: translateX(105%);
		}
	}
</style>

<div class="signin-slot mx-5 text-white flex justify-center items-center">
  <img src="{moonAndRabitSvg}" alt="">
  <img class="front-cover" src="{cloudSvg}" alt="">
</div>