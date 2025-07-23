<script lang="ts">
	import Button from '$lib/button/button.svelte';

	let {
		currentPage = 1,
		totalPages = 1,
		onPageChange
	}: {
		currentPage: number;
		totalPages: number;
		onPageChange: (page: number) => void;
	} = $props();

	function nextPage() {
		onPageChange(Math.min(currentPage + 1, totalPages));
	}

	function selectPage(page: number) {
		onPageChange(page);
	}

	function previousPage() {
		onPageChange(Math.max(currentPage - 1, 1));
	}
</script>

<div class="flex items-center justify-center gap-2 p-4">
	<Button class="disabled:opacity-50" onclick={previousPage} disabled={currentPage === 1}>
		Previous
	</Button>

	{#each Array(totalPages) as _, i}
		<Button
			class={i + 1 === currentPage ? 'text-white dark:!bg-neutral-700' : ''}
			onclick={() => selectPage(i + 1)}
		>
			{i + 1}
		</Button>
	{/each}

	<Button class="disabled:opacity-50" onclick={nextPage} disabled={currentPage === totalPages}>
		Next
	</Button>
</div>
