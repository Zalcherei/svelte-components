<script>
	import { base } from '$app/paths';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Dropdown title="Dropdown">
    <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">
      Item 1
    </a>
    <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">
      Item 2
    </a>
    <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">
      Item 3
    </a>
    <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">
      Item 4
    </a>
  </Dropdown>`;
</script>

<svelte:head>
	<title>Svelte Components - Dropdown</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Dropdown title="Dropdown">
			<a
				class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
				href={base}
			>
				Item 1
			</a>
			<a
				class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
				href={base}
			>
				Item 2
			</a>
			<a
				class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
				href={base}
			>
				Item 3
			</a>
			<a
				class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
				href={base}
			>
				Item 4
			</a>
		</Dropdown>
	</div>
	<Highlight {code} />
</div>
