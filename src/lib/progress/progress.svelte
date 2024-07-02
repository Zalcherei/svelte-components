<script>
	export let value = '';
</script>

<progress class="apperance-none h-3 overflow-hidden rounded-md" {value} max="100"></progress>

<style>
	::-webkit-progress-bar {
		background-color: rgb(209 213 219);
	}
	::-webkit-progress-value {
		background-color: rgb(156 163 175);
	}
</style>
