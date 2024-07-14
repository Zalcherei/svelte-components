<script lang="ts">
	let className: string = '';
	export { className as class };
	let swap: boolean = false;
	const handleAction = () => {
		swap = !swap;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions (because of reasons) -->
<div class={className} role="button" tabindex="0" on:click={handleAction}>
	{#if swap}
		<slot name="from"></slot>
	{:else}
		<slot name="to"></slot>
	{/if}
</div>
