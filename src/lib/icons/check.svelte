<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [['path', { d: 'M20 6 9 17l-5-5' }]];
</script>

<Icon name="check" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
