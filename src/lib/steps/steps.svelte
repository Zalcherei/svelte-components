<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<ul class="flex {className}">
	<slot></slot>
</ul>
