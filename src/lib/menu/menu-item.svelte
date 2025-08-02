<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import type { MenuItemProps } from '$lib/types';

	let { children, href }: MenuItemProps = $props();
</script>

<li>
	<Button {href}>
		{@render children?.()}
	</Button>
</li>
