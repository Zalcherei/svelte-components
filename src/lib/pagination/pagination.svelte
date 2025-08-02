<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import type { PaginationProps } from '$lib/types';

	let { currentPage = 1, totalPages = 1, onPageChange }: PaginationProps = $props();

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

<div class="flex items-center justify-center gap-1">
	<Button class="disabled:opacity-50" onclick={previousPage} disabled={currentPage === 1}>
		Previous
	</Button>

	{#each Array(totalPages) as _, index (index)}
		<Button
			class={index + 1 === currentPage ? 'bg-primary/90' : ''}
			onclick={() => selectPage(index + 1)}
		>
			{index + 1}
		</Button>
	{/each}

	<Button class="disabled:opacity-50" onclick={nextPage} disabled={currentPage === totalPages}>
		Next
	</Button>
</div>
