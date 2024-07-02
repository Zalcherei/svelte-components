<script>
	import Avatar from '$lib/avatar/avatar.svelte';

	export let alignment = '';
</script>

{#if alignment === 'start'}
	<div class="flex w-full justify-start gap-2">
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
		<div class="flex w-64 items-center rounded-md bg-white p-4 dark:bg-neutral-800">
			<slot></slot>
		</div>
	</div>
{:else if alignment === 'end'}
	<div class="flex w-full justify-end gap-2">
		<div class="flex w-64 items-center rounded-md bg-white p-4 dark:bg-neutral-800">
			<slot></slot>
		</div>
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
	</div>
{/if}
