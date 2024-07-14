<script lang="ts">
	let className: string = '';
	export { className as class };
	export let href: string = '';
	export let target: string = '';
</script>

<a class="hover:text-gray-700 hover:underline {className}" {href} {target}>
	<slot></slot>
</a>
