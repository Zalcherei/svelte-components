<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }]];
</script>

<Icon name="square" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
