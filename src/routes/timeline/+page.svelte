<script>
	import Check from 'lucide-svelte/icons/check';
</script>

<svelte:head>
	<title>Svelte Components - Timeline</title>
</svelte:head>

<div class="flex justify-center">
	<ul class="mt-5 flex">
		<li class="relative flex min-w-32 flex-col items-center">
			<span class="absolute -top-6">2021</span>
			<span
				class="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700"
			>
				<Check class="h-4 w-4" />
			</span>
			<span>Started</span>
			<div
				class="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] bg-white dark:bg-neutral-700"
			></div>
		</li>
		<li class="relative flex min-w-32 flex-col items-center">
			<span class="absolute -top-6">2022</span>
			<span
				class="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700"
			>
				<Check class="h-4 w-4" />
			</span>
			<span>Continued</span>
			<div
				class="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] bg-white dark:bg-neutral-700"
			></div>
		</li>
		<li class="relative flex min-w-32 flex-col items-center">
			<span class="absolute -top-6">2023</span>
			<span
				class="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700"
			>
				<Check class="h-4 w-4" />
			</span>
			<span>Break</span>
			<div
				class="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] bg-white dark:bg-neutral-700"
			></div>
		</li>
		<li class="relative flex min-w-32 flex-col items-center">
			<span class="absolute -top-6">2024</span>
			<span
				class="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700"
			>
				<Check class="h-4 w-4" />
			</span>
			<span>Started again</span>
		</li>
	</ul>
</div>
