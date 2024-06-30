<script>
	import '../app.css';

	const list = [
		{
			name: 'Components',
			children: [
				{
					name: 'Actions',
					children: [
						{ name: 'Button', href: '/button', new: true },
						{ name: 'Dropdown', href: '/dropdown', new: true },
						{ name: 'Modal', href: '/modal', new: true },
						{ name: 'Swap', href: '/swap', new: true },
						{ name: 'Theme Controller', href: '/theme-controller', new: true }
					]
				},
				{
					name: 'Data display',
					children: [
						{ name: 'Accordion', href: '/accordion', new: true },
						{ name: 'Avatar', href: '/avatar', new: true },
						{ name: 'Badge', href: '/badge', new: true },
						{ name: 'Card', href: '/card', new: true },
						{ name: 'Carousel', href: '/carousel', new: true },
						{ name: 'Chat bubble', href: '/chat-bubble', new: true },
						{ name: 'Collapse', href: '/collapse', new: true },
						{ name: 'Countdown', href: '/countdown', new: true },
						{ name: 'Diff', href: '/diff', new: true },
						{ name: 'Kbd', href: '/kbd', new: true },
						{ name: 'Stat', href: '/stat', new: true },
						{ name: 'Table', href: '/table', new: true },
						{ name: 'Timeline', href: '/timeline', new: true }
					]
				},
				{
					name: 'Navigation',
					children: [
						{ name: 'Breadcrumbs', href: '/breadcrumbs', new: true },
						{ name: 'Bottom navigation', href: '/bottom-navigation', new: true },
						{ name: 'Link', href: '/link', new: true },
						{ name: 'Menu', href: '/menu', new: true },
						{ name: 'Navbar', href: '/navbar', new: true },
						{ name: 'Pagination', href: '/pagination', new: true },
						{ name: 'Steps', href: '/steps', new: true },
						{ name: 'Tab', href: '/tab', new: true }
					]
				},
				{
					name: 'Feedback',
					children: [
						{ name: 'Alert', href: '/alert', new: true },
						{ name: 'Loading', href: '/loading', new: true },
						{ name: 'Progress', href: '/progress', new: true },
						{ name: 'Radial progress', href: '/radial-progress', new: true },
						{ name: 'Skeleton', href: '/skeleton', new: true },
						{ name: 'Toast', href: '/toast', new: true },
						{ name: 'Tooltip', href: '/tooltip', new: true }
					]
				},
				{
					name: 'Data input',
					children: [
						{ name: 'Checkbox', href: '/checkbox', new: true },
						{ name: 'File input', href: '/file-input', new: true },
						{ name: 'Radio', href: '/radio', new: true },
						{ name: 'Range', href: '/range', new: true },
						{ name: 'Rating', href: '/rating', new: true },
						{ name: 'Select', href: '/select', new: true },
						{ name: 'Text input', href: '/text-input', new: true },
						{ name: 'Textarea', href: '/textarea', new: true },
						{ name: 'Toggle', href: '/toggle', new: true }
					]
				},
				{
					name: 'Layout',
					children: [
						{ name: 'Artboard', href: '/artboard', new: true },
						{ name: 'Divider', href: '/divider', new: true },
						{ name: 'Drawer', href: '/drawer', new: true },
						{ name: 'Footer', href: '/footer', new: true },
						{ name: 'Hero', href: '/hero', new: true },
						{ name: 'Indicator', href: '/indicator', new: true },
						{ name: 'Join (group items)', href: '/join', new: true },
						{ name: 'Mask', href: '/mask', new: true },
						{ name: 'Stack', href: '/stack', new: true }
					]
				},
				{
					name: 'Mockup',
					children: [
						{ name: 'Browser', href: '/browser', new: false },
						{ name: 'Code', href: '/code', new: false },
						{ name: 'Phone', href: '/phone', new: false },
						{ name: 'Window', href: '/window', new: false }
					]
				}
			]
		}
	];
</script>

<div class="flex h-screen w-screen">
	<div class="h-screen w-64 min-w-64 overflow-y-auto bg-white p-2 shadow dark:bg-neutral-800">
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
														href={grandchild.href}
													>
														{grandchild.name}
														{#if grandchild.new}
															<span
																class="flex items-center justify-center rounded-full bg-white px-2 text-sm dark:bg-neutral-800"
															>
																New
															</span>
														{/if}
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
	</div>
	<div class="h-screen w-full p-4">
		<slot></slot>
	</div>
</div>
