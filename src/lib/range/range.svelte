<script lang="ts">
	let { class: className = '' } = $props();
</script>

<input class="h-2 cursor-pointer appearance-none rounded-md bg-gray-300 {className}" type="range" />
