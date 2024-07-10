<script>
	import { base } from '$app/paths';
	import Badge from '$lib/badge/badge.svelte';
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Menu from '$lib/menu/menu.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import Github from 'lucide-svelte/icons/github';

	const list = [
		{
			name: 'Actions',
			children: [
				{ name: 'Button', href: 'components/button' },
				{ name: 'Dropdown', href: 'components/dropdown' },
				{ name: 'Modal', href: 'components/modal' },
				{ name: 'Swap', href: 'components/swap' },
				{ name: 'Theme Controller', href: 'components/theme-controller' }
			]
		},
		{
			name: 'Data display',
			children: [
				{ name: 'Accordion', href: 'components/accordion' },
				{ name: 'Avatar', href: 'components/avatar' },
				{ name: 'Badge', href: 'components/badge' },
				{ name: 'Card', href: 'components/card' },
				{ name: 'Carousel', href: 'components/carousel' },
				{ name: 'Chat bubble', href: 'components/chat-bubble' },
				{ name: 'Collapse', href: 'components/collapse' },
				{ name: 'Countdown', href: 'components/countdown' },
				{ name: 'Diff', href: 'components/diff' },
				{ name: 'Kbd', href: 'components/kbd' },
				{ name: 'Stat', href: 'components/stat' },
				{ name: 'Table', href: 'components/table' },
				{ name: 'Timeline', href: 'components/timeline' }
			]
		},
		{
			name: 'Navigation',
			children: [
				{ name: 'Breadcrumbs', href: 'components/breadcrumbs' },
				{ name: 'Bottom navigation', href: 'components/bottom-navigation' },
				{ name: 'Link', href: 'components/link' },
				{ name: 'Menu', href: 'components/menu' },
				{ name: 'Navbar', href: 'components/navbar' },
				{ name: 'Pagination', href: 'components/pagination' },
				{ name: 'Steps', href: 'components/steps' },
				{ name: 'Tab', href: 'components/tab' }
			]
		},
		{
			name: 'Feedback',
			children: [
				{ name: 'Alert', href: 'components/alert' },
				{ name: 'Loading', href: 'components/loading' },
				{ name: 'Progress', href: 'components/progress' },
				{ name: 'Radial progress', href: 'components/radial-progress' },
				{ name: 'Skeleton', href: 'components/skeleton' },
				{ name: 'Toast', href: 'components/toast' },
				{ name: 'Tooltip', href: 'components/tooltip' }
			]
		},
		{
			name: 'Data input',
			children: [
				{ name: 'Checkbox', href: 'components/checkbox' },
				{ name: 'File input', href: 'components/file-input' },
				{ name: 'Radio', href: 'components/radio' },
				{ name: 'Range', href: 'components/range' },
				{ name: 'Rating', href: 'components/rating' },
				{ name: 'Select', href: 'components/select' },
				{ name: 'Text input', href: 'components/text-input' },
				{ name: 'Textarea', href: 'components/textarea' },
				{ name: 'Toggle', href: 'components/toggle' }
			]
		},
		{
			name: 'Layout',
			children: [
				{ name: 'Artboard', href: 'components/artboard' },
				{ name: 'Divider', href: 'components/divider' },
				{ name: 'Drawer', href: 'components/drawer' },
				{ name: 'Footer', href: 'components/footer' },
				{ name: 'Hero', href: 'components/hero' },
				{ name: 'Indicator', href: 'components/indicator' },
				{ name: 'Join (group items)', href: 'components/join' },
				{ name: 'Mask', href: 'components/mask' },
				{ name: 'Stack', href: 'components/stack' }
			]
		}
		// {
		// 	name: 'Mockup',
		// 	children: [
		// 		{ name: 'Browser', href: 'components/browser', new: false },
		// 		{ name: 'Code', href: 'components/code', new: false },
		// 		{ name: 'Phone', href: 'components/phone', new: false },
		// 		{ name: 'Window', href: 'components/window', new: false }
		// 	]
		// }
	];
</script>

<div class="flex h-screen w-screen flex-wrap">
	<Navbar>
		<a class="font-medium" href="{base}/">Svelte-Components</a>
		<div class="flex-1"></div>
		<Button label="Components" variant="text" href={base} />
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components"
			icon={Github}
		/>
	</Navbar>
	<div class="flex h-[calc(100vh-64px)] w-full">
		<Drawer>
			<Menu variant="col" class="overflow-y-auto p-2">
				{#each list as item}
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
		<div class="h-[calc(100vh-64px)] w-full overflow-y-auto p-4">
			<slot></slot>
		</div>
	</div>
</div>
