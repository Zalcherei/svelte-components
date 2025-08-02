<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { navigation } from '$lib/navigation';
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';
	import DrawerHeader from '$lib/drawer/drawer-header.svelte';

	const { children } = $props();
	let open = $state(true);
</script>

<div class="flex">
	<Drawer bind:open>
		<DrawerHeader>
			<a href={base} aria-label="svelte-components">Svelte-Components</a>
		</DrawerHeader>
		<div class="flex h-[calc(100vh-64px)] flex-col gap-1 overflow-y-auto">
			{#each navigation as item, index (index)}
				<h4 class="px-2 py-2 font-medium">{item.name}</h4>
				{#if item.children}
					{#each item.children as child, index (index)}
						<Button
							variant="ghost"
							aria-label={child.name}
							class="justify-start"
							href="{base}/{child.href}"
						>
							{child.name}
						</Button>
					{/each}
				{/if}
			{/each}
		</div>
	</Drawer>
	<div class="flex-1">
		<div class="flex h-16 items-center border-b bg-sidebar px-4 py-2 text-sidebar-foreground">
			<Button variant="ghost" aria-label="drawer" onclick={() => (open = !open)}>
				<MenuIcon />
			</Button>
			<div class="flex-1"></div>
			<Button
				variant="ghost"
				aria-label="github"
				href="https://github.com/Zalcherei/svelte-components"
			>
				<GithubIcon />
			</Button>
		</div>
		<div class="p-4">
			{@render children?.()}
		</div>
	</div>
</div>
