<script lang="ts">
	import type { StepsProps } from '$lib/steps/types';

	let { children, class: className }: StepsProps = $props();
</script>

<ul class="flex {className}">
	{@render children?.()}
</ul>
