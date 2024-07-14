<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="[&>:nth-child(2)]:-translate-y-1/2 [&>:nth-child(3)]:-translate-y-full {className}">
	<slot></slot>
</div>
