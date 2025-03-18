<script lang="ts">
	let { class: className = '', size = '', src = '', alt = '' } = $props();
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
