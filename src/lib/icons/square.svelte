<script>
	import Icon from '$lib/icons/icon.svelte';
	const iconNode = [['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }]];
</script>

<Icon name="square" {...$$props} {iconNode}>
	<slot />
</Icon>
