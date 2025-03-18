<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [['path', { d: 'm15 18-6-6 6-6' }]];
</script>

<Icon name="chevron-left" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
