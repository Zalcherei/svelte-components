<script lang="ts">
	import type { StatProps } from '$lib/stat/types';
	import { cn } from '$lib/utils';

	let { class: className, title, stat, subtitle }: StatProps = $props();
</script>

<div class={cn('rounded-md bg-white p-4 dark:bg-neutral-800', className)}>
	<div class="text-gray-500">{title}</div>
	<div class="text-2xl font-bold">{stat}</div>
	<div class="text-sm text-gray-500">{subtitle}</div>
</div>
