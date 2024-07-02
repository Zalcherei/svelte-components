<script>
	import Avatar from '$lib/avatar/avatar.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex items-center">
		<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
		<Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />
	</div>
</div>
