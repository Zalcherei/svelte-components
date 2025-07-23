<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { navigation } from '$lib/navigation';
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';

	const { children } = $props();
	let drawer = $state(true);
</script>

<div class="flex min-h-screen flex-col">
	<section class="flex flex-1">
		<Drawer bind:open={drawer} class="p-2">
			<div class="flex min-h-14 items-center justify-center">
				<a class="font-medium" aria-label="svelte-components" href="{base}/"> Svelte-Components </a>
			</div>
			{#each navigation as item}
				<h4 class="px-2 py-2 font-medium">{item.name}</h4>
				{#if item.children}
					{#each item.children as child}
						<Button aria-label={child.name} class="justify-start" href="{base}/{child.href}"
							>{child.name}</Button
						>
					{/each}
				{/if}
			{/each}
		</Drawer>
		<div class="h-screen flex-1 overflow-y-auto">
			<Navbar>
				<Button aria-label="drawer" onclick={() => (drawer = !drawer)}>
					<MenuIcon />
				</Button>
				<div class="flex-1"></div>
				<Button aria-label="components" href={base}>Components</Button>
				<Button aria-label="github" href="https://github.com/Zalcherei/svelte-components">
					<GithubIcon />
				</Button>
			</Navbar>
			<div class="flex-1 p-4">
				{@render children?.()}
			</div>
		</div>
	</section>
</div>
