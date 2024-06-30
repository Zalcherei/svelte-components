<script>
	let activeTab = 1;

	const handleAction = (tab) => {
		activeTab = tab;
	};
</script>

<svelte:head>
	<title>Svelte Components - Tabs</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex w-full flex-col">
		<div class="flex max-w-max overflow-hidden rounded-t-md bg-white dark:bg-neutral-800">
			<button
				class="inline-flex h-10 min-w-10 items-center justify-center bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
				on:click={() => handleAction(1)}
			>
				Tab 1
			</button>
			<button
				class="inline-flex h-10 min-w-10 items-center justify-center bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
				on:click={() => handleAction(2)}
			>
				Tab 2
			</button>
			<button
				class="inline-flex h-10 min-w-10 items-center justify-center bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
				on:click={() => handleAction(3)}
			>
				Tab 3
			</button>
		</div>
		{#if activeTab === 1}
			<div class="rounded-b-md rounded-tr-md bg-white p-4 dark:bg-neutral-800">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, sapiente.
			</div>
		{/if}
		{#if activeTab === 2}
			<div class="rounded-tr-md bg-white bg-white p-4 dark:bg-neutral-800">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, iure deleniti. Sequi
				debitis nostrum fuga dolore. Sint laborum deleniti aliquid?
			</div>
		{/if}
		{#if activeTab === 3}
			<div class="rounded-tr-md bg-white bg-white p-4 dark:bg-neutral-800">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae et necessitatibus, impedit
				optio consequuntur sit dignissimos! Cumque, quis? Adipisci numquam aperiam nisi impedit
				voluptas quis dicta sequi repudiandae molestias dolor!
			</div>
		{/if}
	</div>
</div>
