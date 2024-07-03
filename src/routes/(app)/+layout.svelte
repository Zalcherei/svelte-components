<script>
	import { base } from '$app/paths';
	import Link from '$lib/link/link.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import ThemeController from '$lib/theme-controller/theme-controller.svelte';
</script>

<div class="h-screen w-screen">
	<Navbar>
		<Link href="{base}/">Svelte-Components</Link>
		<div class="flex-1"></div>
		<ThemeController />
	</Navbar>
	<div class="flex h-[calc(100vh-64px)]">
		<div class="h-[calc(100vh-64px)] w-full">
			<slot></slot>
		</div>
	</div>
</div>
