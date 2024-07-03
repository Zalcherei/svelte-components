<script>
	import { base } from '$app/paths';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let drawer = true;

	const handleAction = () => {
		drawer = !drawer;
	};

	let code = `<Drawer>
    <ul>
      <li>
        <a
          class="flex h-10 w-full items-center
          justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
          href={base}>
            Item 1
          </a>
      </li>
      <li>
        <a
          class="flex h-10 w-full items-center
          justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
          href={base}>
            Item 2
          </a>
      </li>
    </ul>
  </Drawer>`;
</script>

<svelte:head>
	<title>Svelte Components - Drawer</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center gap-2">
		{#if drawer}
			<Drawer class="!h-80">
				<ul>
					<li>
						<a
							class="flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
							href={base}>Item 1</a
						>
					</li>
					<li>
						<a
							class="flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
							href={base}>Item 2</a
						>
					</li>
				</ul>
			</Drawer>
		{/if}
		<button
			class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			on:click={handleAction}
		>
			Open/Close
		</button>
	</div>
	<Highlight {code} />
</div>
