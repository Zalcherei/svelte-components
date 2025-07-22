<script lang="ts">
	import Navbar from '$lib/navbar/navbar.svelte';
	import type { BottomNavigationProps } from '$lib/bottom-navigation/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BottomNavigationProps = $props();
</script>

<Navbar class={cn('absolute bottom-0 px-0', className)}>
	{@render children?.()}
</Navbar>
