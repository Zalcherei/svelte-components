<script lang="ts">
	let { class: className = '' } = $props();
</script>

<span class="absolute -top-1 -right-1 flex h-3 w-3 {className}">
	<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
	></span>
	<span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
</span>
