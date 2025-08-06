<script>
  import Tabs from '$lib/tabs/tabs.svelte';
	import TabList from '$lib/tabs/tabs-list.svelte';
  import TabTrigger from '$lib/tabs/tabs-trigger.svelte';
  import TabContent from '$lib/tabs/tabs-content.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Tabs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Tab" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tab">
{#snippet display()}
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
{/snippet}

```html
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
```
</Mdsvex>
