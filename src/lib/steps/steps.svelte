<script lang="ts">
	import type { BaseProps } from '$lib/types';

	let { children, class: className }: BaseProps = $props();
</script>

<ul class="flex {className}">
	{@render children?.()}
</ul>
