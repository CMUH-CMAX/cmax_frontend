<script>
  import { Bell } from 'svelte-heros-v2';
</script>
<style>
	.notification-btn {
		color: var(--blue-3);
		background: var(--white-f);
		transition-duration: 0.1s;
	}
</style>
<div class="notification-btn rounded-full w-10 h-10 flex justify-center items-center">
  <Bell variation="outline" size="24" class="bell" />
</div>