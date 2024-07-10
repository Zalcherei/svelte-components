<script>
	let clazz = '';
	export { clazz as class };
</script>

<div class="[&>:nth-child(2)]:-translate-y-1/2 [&>:nth-child(3)]:-translate-y-full {clazz}">
	<slot></slot>
</div>
