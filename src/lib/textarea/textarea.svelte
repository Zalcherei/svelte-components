<script lang="ts">
	let className: string = '';
	export { className as class };
	export let placeholder: string = '';
	export let resize: string = '';
</script>

<textarea
	class="w-full rounded-md border border-gray-200 p-2 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 {resize ===
	'resize'
		? 'resize'
		: resize === 'x'
			? 'resize-x'
			: resize === 'y'
				? 'resize-y'
				: resize === 'resize-none'
					? 'resize-none'
					: ''} {className}"
	{placeholder}
>
</textarea>
