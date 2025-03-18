<script lang="ts">
	let { class: className = '', checked = false, name = '' } = $props();
</script>

<input class="me-1 h-5 w-5 cursor-pointer {className}" type="radio" {name} {checked} />
