<script lang="ts">
	import type { MaskProps } from '$lib/mask/types';
	import { cn } from '$lib/utils';

	let { class: className, mask, alt, src }: MaskProps = $props();
</script>

<img
	class={cn(
		'rounded-md',
		mask === 'heart'
			? 'mask-heart bg-[center/contain] bg-no-repeat'
			: mask === 'triangle'
				? 'mask-triangle  bg-[center/contain] bg-no-repeat'
				: '',
		className
	)}
	{alt}
	{src}
/>

<style>
	.mask-heart {
		clip-path: path(
			'M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 Z'
		);
	}
	.mask-triangle {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
