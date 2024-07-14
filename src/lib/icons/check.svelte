<script>
	import Icon from '$lib/icons/icon.svelte';
	const iconNode = [['path', { d: 'M20 6 9 17l-5-5' }]];
</script>

<Icon name="check" {...$$props} {iconNode}>
	<slot />
</Icon>
