<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2' }],
		['path', { d: 'm9 12 2 2 4-4' }]
	];
</script>

<Icon name="square-check" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
