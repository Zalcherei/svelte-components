<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Select from '$lib/select/select.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import SelectTrigger from '$lib/select/select-trigger.svelte';
	import SelectContent from '$lib/select/select-content.svelte';
	import SelectOption from '$lib/select/select-option.svelte';

	let code = `<Select type="single">
	<SelectTrigger />
  <SelectContent>
  	<SelectOption value="first">First</SelectOption>
  	<SelectOption value="second">Second</SelectOption>
  	<SelectOption value="third">Third</SelectOption>
  	<SelectOption value="fourth">Fourth</SelectOption>
  </SelectContent>
</Select>`;

	let selectedValue: string | null = null;
</script>

<svelte:head>
	<title>Svelte Components - Select</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Select
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/select"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Select bind:value={selectedValue}>
			<SelectTrigger />
			<SelectContent>
				<SelectOption value="github">GitHub</SelectOption>
				<SelectOption value="instagram">Instagram</SelectOption>
				<SelectOption value="facebook">Facebook</SelectOption>
				<SelectOption value="linkedin">LinkedIn</SelectOption>
				<SelectOption value="twitter">Twitter</SelectOption>
				<SelectOption value="reddit">Reddit</SelectOption>
				<SelectOption data-value="clear">Clear selection</SelectOption>
			</SelectContent>
		</Select>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
