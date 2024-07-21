<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Indicator from '$lib/indicator/indicator.svelte';
	import Join from '$lib/join/join.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Join direction="horizontal">
  	<Button label="Button" />
  	<Button label="Button" />
  	<Button class="relative" label="Button">
      <Indicator />
  	</Button>
  </Join>
  <Join direction="vertical">
  	<Button class="relative" label="Button">
      <Indicator />
  	</Button>
  	<Button label="Button" />
  	<Button label="Button" />
  </Join>`;
</script>

<svelte:head>
	<title>Svelte Components - Join</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Join (group items)
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/join"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Join direction="horizontal">
			<Button label="Button" />
			<Button label="Button" />
			<Button class="relative" label="Button">
				<Indicator />
			</Button>
		</Join>
		<Join direction="vertical">
			<Button class="relative" label="Button">
				<Indicator />
			</Button>
			<Button label="Button" />
			<Button label="Button" />
		</Join>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
