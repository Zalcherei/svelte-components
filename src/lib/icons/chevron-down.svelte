<script>
	import Icon from '$lib/icons/icon.svelte';
	const iconNode = [['path', { d: 'm6 9 6 6 6-6' }]];
</script>

<Icon name="chevron-down" {...$$props} {iconNode}>
	<slot />
</Icon>
