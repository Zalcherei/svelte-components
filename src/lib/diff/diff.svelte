<script>
	export let alt = '';
	export let src = '';
</script>

<div class="relative">
	<img class="rounded-md" {alt} {src} />
	<div class="absolute top-0 h-[300px] w-[400px] overflow-hidden">
		<img class="h-[300px] w-[400px] rounded-md blur" {alt} {src} />
	</div>
</div>
