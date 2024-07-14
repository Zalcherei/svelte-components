<script lang="ts">
	let className: string = '';
	export let title: string = '';
	export let stat: string = '';
	export let subtitle: string = '';
	export { className as class };
</script>

<div class="rounded-md bg-white p-4 dark:bg-neutral-800 {className}">
	<div class="text-gray-500">{title}</div>
	<div class="text-2xl font-bold">{stat}</div>
	<div class="text-sm text-gray-500">{subtitle}</div>
</div>
