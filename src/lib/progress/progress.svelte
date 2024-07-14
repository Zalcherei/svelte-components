<script lang="ts">
	let className: string = '';
	export { className as class };
	export let value: string = '';
</script>

<progress class="apperance-none h-3 overflow-hidden rounded-md {className}" {value} max="100"
></progress>

<style>
	::-webkit-progress-bar {
		background-color: rgb(209 213 219);
	}
	::-webkit-progress-value {
		background-color: rgb(156 163 175);
	}
</style>
