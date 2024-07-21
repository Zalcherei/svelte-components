<script lang="ts">
	let className: string = '';
	export { className as class };
	export let mask: string = '';
	export let alt: string = '';
	export let src: string = '';
</script>

<img
	class="{mask === 'heart'
		? 'mask-heart bg-[center/contain] bg-no-repeat'
		: mask === 'triangle'
			? 'mask-triangle  bg-[center/contain] bg-no-repeat'
			: ''} rounded-md {className}"
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
