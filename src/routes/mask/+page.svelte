<svelte:head>
	<title>Svelte Components - Mask</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex flex-col">
		<img class="mask-heart rounded-md" alt="..." src="https://picsum.photos/id/800/800/300" />
		<img class="mask-triangle rounded-md" alt="..." src="https://picsum.photos/id/800/800/300" />
	</div>
</div>

<style>
	.mask-heart {
		background-repeat: no-repeat;
		background-size: center/cover;
		clip-path: path(
			'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 Z'
		);
	}
	.mask-triangle {
		background-repeat: no-repeat;
		background-size: center/cover;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
