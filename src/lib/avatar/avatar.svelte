<script lang="ts">
	let className: string = '';
	export { className as class };
	export let size: string = '';
	export let src: string = '';
	export let alt: string = '';
</script>

<img
	class="rounded-md {size === 'lg'
		? 'h-16 w-16'
		: size === 'md'
			? 'h-12 w-12'
			: size === 'sm'
				? 'h-8 w-8'
				: ''} {className}"
	{alt}
	{src}
/>
