<script>
	import { base } from '$app/paths';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Link from '$lib/link/link.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import ThemeController from '$lib/theme-controller/theme-controller.svelte';
	import '../app.css';

	const list = [
		{
			name: 'Components',
			children: [
				{
					name: 'Actions',
					children: [
						{ name: 'Button', href: 'button' },
						{ name: 'Dropdown', href: 'dropdown' },
						{ name: 'Modal', href: 'modal' },
						{ name: 'Swap', href: 'swap' },
						{ name: 'Theme Controller', href: 'theme-controller' }
					]
				},
				{
					name: 'Data display',
					children: [
						{ name: 'Accordion', href: 'accordion' },
						{ name: 'Avatar', href: 'avatar' },
						{ name: 'Badge', href: 'badge' },
						{ name: 'Card', href: 'card' },
						{ name: 'Carousel', href: 'carousel' },
						{ name: 'Chat bubble', href: 'chat-bubble' },
						{ name: 'Collapse', href: 'collapse' },
						{ name: 'Countdown', href: 'countdown' },
						{ name: 'Diff', href: 'diff' },
						{ name: 'Kbd', href: 'kbd' },
						{ name: 'Stat', href: 'stat' },
						{ name: 'Table', href: 'table' },
						{ name: 'Timeline', href: 'timeline' }
					]
				},
				{
					name: 'Navigation',
					children: [
						{ name: 'Breadcrumbs', href: 'breadcrumbs' },
						{ name: 'Bottom navigation', href: 'bottom-navigation' },
						{ name: 'Link', href: 'link' },
						{ name: 'Menu', href: 'menu' },
						{ name: 'Navbar', href: 'navbar' },
						{ name: 'Pagination', href: 'pagination' },
						{ name: 'Steps', href: 'steps' },
						{ name: 'Tab', href: 'tab' }
					]
				},
				{
					name: 'Feedback',
					children: [
						{ name: 'Alert', href: 'alert' },
						{ name: 'Loading', href: 'loading' },
						{ name: 'Progress', href: 'progress' },
						{ name: 'Radial progress', href: 'radial-progress' },
						{ name: 'Skeleton', href: 'skeleton' },
						{ name: 'Toast', href: 'toast' },
						{ name: 'Tooltip', href: 'tooltip' }
					]
				},
				{
					name: 'Data input',
					children: [
						{ name: 'Checkbox', href: 'checkbox' },
						{ name: 'File input', href: 'file-input' },
						{ name: 'Radio', href: 'radio' },
						{ name: 'Range', href: 'range' },
						{ name: 'Rating', href: 'rating' },
						{ name: 'Select', href: 'select' },
						{ name: 'Text input', href: 'text-input' },
						{ name: 'Textarea', href: 'textarea' },
						{ name: 'Toggle', href: 'toggle' }
					]
				},
				{
					name: 'Layout',
					children: [
						{ name: 'Artboard', href: 'artboard' },
						{ name: 'Divider', href: 'divider' },
						{ name: 'Drawer', href: 'drawer' },
						{ name: 'Footer', href: 'footer' },
						{ name: 'Hero', href: 'hero' },
						{ name: 'Indicator', href: 'indicator' },
						{ name: 'Join (group items)', href: 'join' },
						{ name: 'Mask', href: 'mask' },
						{ name: 'Stack', href: 'stack' }
					]
				}
				// {
				// 	name: 'Mockup',
				// 	children: [
				// 		{ name: 'Browser', href: 'browser', new: false },
				// 		{ name: 'Code', href: 'code', new: false },
				// 		{ name: 'Phone', href: 'phone', new: false },
				// 		{ name: 'Window', href: 'window', new: false }
				// 	]
				// }
			]
		}
	];
</script>

<div class="h-screen w-screen">
	<Navbar>
		<Link href="{base}/">Svelte-Components</Link>
		<div class="flex-1"></div>
		<ThemeController />
	</Navbar>
	<div class="flex h-[calc(100vh-64px)]">
		<Drawer class="!h-[calc(100vh-64px)] min-w-64">
			<ul>
				{#each list as item}
					<li>
						<span class="font-medium">{item.name}</span>
						{#if item.children}
							<ul>
								{#each item.children as child}
									<li>
										<div class="flex h-10 w-full items-center px-4 font-medium">
											{child.name}
										</div>
										{#if child.children}
											<ul class="pl-4">
												{#each child.children as grandchild}
													<li>
														<a
															class="flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
															href="{base}/{grandchild.href}"
														>
															{grandchild.name}
														</a>
													</li>
												{/each}
											</ul>
										{/if}
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		</Drawer>
		<div class="h-[calc(100vh-64px)] w-full p-4">
			<slot></slot>
		</div>
	</div>
</div>
