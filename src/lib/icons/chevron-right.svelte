<script>
	import Icon from '$lib/icons/icon.svelte';
	const iconNode = [['path', { d: 'm9 18 6-6-6-6' }]];
</script>

<Icon name="chevron-right" {...$$props} {iconNode}>
	<slot />
</Icon>
