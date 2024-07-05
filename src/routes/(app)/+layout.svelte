<script>
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import Github from 'lucide-svelte/icons/github';
</script>

<Navbar>
	<a class="font-medium" href="{base}/">Svelte-Components</a>
	<div class="flex-1"></div>
	<Button variant="text" href="{base}/components">Components</Button>
	<Button variant="text" size="icon" href="https://github.com/Zalcherei/svelte-components">
		<Github class="h-5 w-5" />
	</Button>
</Navbar>
<slot></slot>
