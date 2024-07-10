<script>
	let clazz = '';
	export let title = '';
	export let stat = '';
	export let subtitle = '';
	export { clazz as class };
</script>

<div class="rounded-md bg-white p-4 dark:bg-neutral-800 {clazz}">
	<div class="text-gray-500">{title}</div>
	<div class="text-2xl font-bold">{stat}</div>
	<div class="text-sm text-gray-500">{subtitle}</div>
</div>
