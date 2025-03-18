<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['polyline', { points: '16 18 22 12 16 6' }],
		['polyline', { points: '8 6 2 12 8 18' }]
	];
</script>

<Icon name="code" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
