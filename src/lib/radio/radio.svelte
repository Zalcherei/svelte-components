<script lang="ts">
	let className: string = '';
	export { className as class };
	export let checked: boolean = false;
	export let name: string = '';
</script>

<input class="me-1 h-5 w-5 cursor-pointer {className}" type="radio" {name} {checked} />
