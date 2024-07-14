<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div>
	<ul
		class="flex [&>*:last-child]:after:content-[''] [&>*]:me-2 [&>*]:after:content-['>'] {className}"
	>
		<slot></slot>
	</ul>
</div>
