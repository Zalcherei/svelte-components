<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['line', { x1: '4', x2: '20', y1: '12', y2: '12' }],
		['line', { x1: '4', x2: '20', y1: '6', y2: '6' }],
		['line', { x1: '4', x2: '20', y1: '18', y2: '18' }]
	];
</script>

<Icon name="menu" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
