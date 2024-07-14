<script>
	import { base } from '$app/paths';
	import { navigationUtils } from '$lib/navigationUtils';
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Menu from '$lib/menu/menu.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';

	let drawer = false;

	const handleAction = () => {
		drawer = !drawer;
	};
</script>

<div class="flex min-h-screen flex-col">
	<Navbar>
		<a class="me-2 font-medium" href="{base}/">Svelte-Components</a>
		<Button variant="text" size="icon" icon={MenuIcon} on:click={handleAction} />
		<div class="flex-1"></div>
		<Button label="Components" variant="text" href={base} />
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components"
			icon={GithubIcon}
		/>
	</Navbar>
	<section class="flex flex-1">
		{#if drawer}
			<Drawer>
				<Menu variant="col" class="h-[calc(100vh-64px)] overflow-y-auto p-2">
					{#each navigationUtils as item}
						<div class="px-2 py-2 font-medium">{item.name}</div>
						{#if item.children}
							{#each item.children as child}
								<Button
									label={child.name}
									variant="text"
									class="justify-between"
									href="{base}/{child.href}"
								></Button>
							{/each}
						{/if}
					{/each}
				</Menu>
			</Drawer>
		{/if}
		<main class="flex-1 overflow-y-auto">
			<slot></slot>
		</main>
	</section>
</div>
