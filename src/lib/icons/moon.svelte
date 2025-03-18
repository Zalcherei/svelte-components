<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' }]];
</script>

<Icon name="moon" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
