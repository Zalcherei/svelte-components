<script lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';

	let className: string = '';
	export { className as class };

	const activeTab = writable(1);
	setContext('activeTab', activeTab);
</script>

<div class="w-full {className}">
	<slot></slot>
</div>
