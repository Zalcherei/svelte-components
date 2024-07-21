<script lang="ts">
	import Code from '$lib/highlight/highlight-code.svelte';
	import Display from '$lib/highlight/highlight-display.svelte';
	import Header from '$lib/highlight/highlight-header.svelte';
	import Options from '$lib/highlight/highlight-options.svelte';

	let className: string = '';
	export { className as class };
</script>

<div class="mb-4 grid w-full grid-cols-[1fr_256px] rounded-md border border-gray-200 {className}">
	<slot {Code} {Display} {Header} {Options}></slot>
</div>
