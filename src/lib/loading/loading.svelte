<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';
	import type { LoadingProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className }: LoadingProps = $props();
</script>

<LoaderCircle class={cn('animate-spin', className)} />
