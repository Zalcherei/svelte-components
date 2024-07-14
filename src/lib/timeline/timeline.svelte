<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<ul class="mt-5 flex {className}">
	<slot></slot>
</ul>
