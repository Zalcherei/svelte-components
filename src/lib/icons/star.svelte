<script>
	import Icon from '$lib/icons/icon.svelte';
	let props = $props();
	const iconNode = [
		[
			'polygon',
			{
				points:
					'12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
			}
		]
	];
</script>

<Icon name="star" {...props} {iconNode}>
	{@render props.children?.()}
</Icon>
