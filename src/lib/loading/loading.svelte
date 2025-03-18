<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';

	let { class: className = '' } = $props();
</script>

<LoaderCircle class="animate-spin {className}" />
