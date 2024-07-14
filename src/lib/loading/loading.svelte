<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';

	let className: string = '';
	export { className as class };
</script>

<LoaderCircle class="animate-spin {className}" />
