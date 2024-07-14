<script lang="ts">
	let className: string = '';
	export let variant: string = '';
	export { className as class };
</script>

<div
	class="flex w-full flex-col rounded-md bg-white dark:bg-neutral-800 {variant === 'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''} {className}"
>
	<slot></slot>
</div>
