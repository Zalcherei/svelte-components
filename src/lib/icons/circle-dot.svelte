<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		['circle', { cx: '12', cy: '12', r: '10' }],
		['circle', { cx: '12', cy: '12', r: '1' }]
	];
</script>

<Icon name="circle-dot" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
