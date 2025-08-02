<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import TabContent from '$lib/tabs/tabs-content.svelte';
	import Tabs from '$lib/tabs/tabs.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import TabTrigger from '$lib/tabs/tabs-trigger.svelte';
	import TabList from '$lib/tabs/tabs-list.svelte';

	let code = `<Tabs value="tab-1">
  <TabList>
  	<TabTrigger value="tab-1">Tab 1</TabTrigger>
  	<TabTrigger value="tab-2">Tab 2</TabTrigger>
  	<TabTrigger value="tab-3">Tab 3</TabTrigger>
  </TabList>
  <TabContent value="tab-1">
  	Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!
  </TabContent>
  <TabContent value="tab-2">
  	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at atque, nam tempora
  	voluptatibus praesentium unde esse delectus doloribus suscipit!
  </TabContent>
  <TabContent value="tab-3">
  	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos velit harum nemo deserunt
  	at? Pariatur, harum. Cum ipsum, magni qui minima a possimus sequi quibusdam mollitia
  	alias, distinctio nulla consectetur.
  </TabContent>
</Tabs>`;
</script>

<svelte:head>
	<title>Svelte Components - Tabs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Tab
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tab"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Tabs value="tab-1">
			<TabList>
				<TabTrigger value="tab-1">Tab 1</TabTrigger>
				<TabTrigger value="tab-2">Tab 2</TabTrigger>
				<TabTrigger value="tab-3">Tab 3</TabTrigger>
			</TabList>
			<TabContent value="tab-1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!
			</TabContent>
			<TabContent value="tab-2">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at atque, nam tempora
				voluptatibus praesentium unde esse delectus doloribus suscipit!
			</TabContent>
			<TabContent value="tab-3">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos velit harum nemo deserunt at?
				Pariatur, harum. Cum ipsum, magni qui minima a possimus sequi quibusdam mollitia alias,
				distinctio nulla consectetur.
			</TabContent>
		</Tabs>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
