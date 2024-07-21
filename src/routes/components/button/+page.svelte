<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import HomeIcon from '$lib/icons/house.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Button variant="outlined" label="Button" />
  <Button variant="text" label="Button" />
  <Button label="Button" />
  <Button label="Button" prepend={true} icon={Home} class="gap-2" />
  <Button label="Button" append={true} icon={Home} class="gap-2" />
  <Button size="icon" icon={Home} />`;

	let buttonState = {
		text: false,
		outlined: false,
		prepend: false,
		append: false,
		icon: false
	};

	function toggleState(key: keyof typeof buttonState) {
		buttonState[key] = !buttonState[key];
	}
</script>

<svelte:head>
	<title>Svelte-Components - Button</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Button
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/button"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		{#if buttonState.text}
			<Button variant="text" label="Button" />
		{:else if buttonState.outlined}
			<Button variant="outlined" label="Button" />
		{:else if buttonState.prepend}
			<Button label="Button" prepend={true} icon={HomeIcon} class="gap-2" />
		{:else if buttonState.append}
			<Button label="Button" append={true} icon={HomeIcon} class="gap-2" />
		{:else if buttonState.icon}
			<Button size="icon" icon={HomeIcon} />
		{:else}
			<Button label="Button" />
		{/if}
	</Display>
	<Options>
		<Checkbox id="1" on:click={() => toggleState('text')}>Text</Checkbox>
		<Checkbox id="2" on:click={() => toggleState('outlined')}>Outlined</Checkbox>
		<Checkbox id="3" on:click={() => toggleState('icon')}>Icon</Checkbox>
		<Checkbox id="4" on:click={() => toggleState('prepend')}>Prepend Icon</Checkbox>
		<Checkbox id="5" on:click={() => toggleState('append')}>Append Icon</Checkbox>
	</Options>
	<Code {code} />
</Highlight>
