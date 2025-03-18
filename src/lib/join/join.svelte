<script lang="ts">
	let { children, class: className = '', direction = '' } = $props();
</script>

{#if direction === 'horizontal'}
	<div
		class="flex [&>*]:me-0 [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md {className}"
	>
		{@render children?.()}
	</div>
{:else if direction === 'vertical'}
	<div
		class="flex flex-col [&>*]:me-0 [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md {className}"
	>
		{@render children?.()}
	</div>
{/if}
