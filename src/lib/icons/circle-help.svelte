<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '10' }],
		['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' }],
		['path', { d: 'M12 17h.01' }]
	];
</script>

<Icon name="circle-help" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
