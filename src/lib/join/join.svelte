<script lang="ts">
	let className: string = '';
	export { className as class };
	export let direction: string = '';
</script>

{#if direction === 'horizontal'}
	<div
		class="flex [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*]:me-0 [&>*]:rounded-none {className}"
	>
		<slot></slot>
	</div>
{:else if direction === 'vertical'}
	<div
		class="flex flex-col [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*]:me-0 [&>*]:rounded-none {className}"
	>
		<slot></slot>
	</div>
{/if}
