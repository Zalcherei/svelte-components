<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['path', { d: 'M18 6 6 18' }],
		['path', { d: 'm6 6 12 12' }]
	];
</script>

<Icon name="x" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
