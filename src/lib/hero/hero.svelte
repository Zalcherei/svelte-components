<script lang="ts">
	let className: string = '';
	export { className as class };
	export let title: string = '';
	export let description: string = '';
</script>

<div
	class="flex h-96 w-full flex-col items-center justify-center bg-white dark:bg-neutral-800 {className}"
>
	<h1 class="text-5xl font-bold">{title}</h1>
	<p class="w-3/4 p-4 text-center">
		{description}
	</p>
	<slot></slot>
</div>
