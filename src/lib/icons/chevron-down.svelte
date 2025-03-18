<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [['path', { d: 'm6 9 6 6 6-6' }]];
</script>

<Icon name="chevron-down" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
