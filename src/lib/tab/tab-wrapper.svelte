<script>
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';

	const activeTab = writable(1);
	setContext('activeTab', activeTab);
</script>

<div class="w-full">
	<slot></slot>
</div>
