<script>
	let activeTab = 1;

	const handleAction = (tab) => {
		activeTab = tab;
	};
</script>

<div class="flex w-full flex-col">
	<div class="flex max-w-max overflow-hidden rounded-t-md bg-white dark:bg-neutral-800">
		<slot></slot>
	</div>
</div>
