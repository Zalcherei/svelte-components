<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import TabContent from '$lib/tab/tab-content.svelte';
	import TabWrapper from '$lib/tab/tab-wrapper.svelte';
	import Tab from '$lib/tab/tab.svelte';
	import Tabs from '$lib/tab/tabs.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<TabWrapper>
   	<Tabs>
  		<Tab label="Tab 1" id={1}></Tab>
  		<Tab label="Tab 2" id={2}></Tab>
  		<Tab label="Tab 3" id={3}></Tab>
   	</Tabs>
   	<TabContent id={1}>
  		Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!
   	</TabContent>
   	<TabContent id={2}>
  		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at atque, nam tempora
  		voluptatibus praesentium unde esse delectus doloribus suscipit!
   	</TabContent>
   	<TabContent id={3}>
  		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos velit harum nemo deserunt at?
  		Pariatur, harum. Cum ipsum, magni qui minima a possimus sequi quibusdam mollitia alias,
  		distinctio nulla consectetur.
   	</TabContent>
  </TabWrapper>`;
</script>

<svelte:head>
	<title>Svelte Components - Tabs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Tab
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tab"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<TabWrapper>
			<Tabs>
				<Tab label="Tab 1" id={1}></Tab>
				<Tab label="Tab 2" id={2}></Tab>
				<Tab label="Tab 3" id={3}></Tab>
			</Tabs>
			<TabContent id={1}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!
			</TabContent>
			<TabContent id={2}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at atque, nam tempora
				voluptatibus praesentium unde esse delectus doloribus suscipit!
			</TabContent>
			<TabContent id={3}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos velit harum nemo deserunt at?
				Pariatur, harum. Cum ipsum, magni qui minima a possimus sequi quibusdam mollitia alias,
				distinctio nulla consectetur.
			</TabContent>
		</TabWrapper>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
