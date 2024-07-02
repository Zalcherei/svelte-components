<script>
	export let size = '';
	export let src = '';
	export let alt = '';
</script>

<img
	class="rounded-md {size === 'lg'
		? 'h-16 w-16'
		: size === 'md'
			? 'h-12 w-12'
			: size === 'sm'
				? 'h-8 w-8'
				: ''}"
	{alt}
	{src}
/>
