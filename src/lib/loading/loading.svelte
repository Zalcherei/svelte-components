<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';
	import { cn } from '$lib/utils';
	import type { LoadingProps } from '$lib/loading/types';

	let { class: className }: LoadingProps = $props();
</script>

<LoaderCircle class={cn('animate-spin', className)} />
