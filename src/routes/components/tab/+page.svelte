<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import TabContent from '$lib/tab/tab-content.svelte';
	import TabWrapper from '$lib/tab/tab-wrapper.svelte';
	import Tab from '$lib/tab/tab.svelte';
	import Tabs from '$lib/tab/tabs.svelte';

	let code = `<TabWrapper>
    <Tabs>
      <Tab title="Tab 1" id={1}></Tab>
      <Tab title="Tab 2" id={2}></Tab>
      <Tab title="Tab 3" id={3}></Tab>
    </Tabs>

    <TabContent id={1}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, velit!
    </TabContent>
    <TabContent id={2}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet at atque, nam tempora
      voluptatibus praesentium unde esse delectus doloribus suscipit!
    </TabContent>
    <TabContent id={3}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Quos velit harum nemo deserunt at? Pariatur, harum.
      Cum ipsum, magni qui minima a possimus sequi quibusdam mollitia alias,
      distinctio nulla consectetur.
    </TabContent>
  </TabWrapper>`;
</script>

<svelte:head>
	<title>Svelte Components - Tabs</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<TabWrapper>
		<Tabs>
			<Tab title="Tab 1" id={1}></Tab>
			<Tab title="Tab 2" id={2}></Tab>
			<Tab title="Tab 3" id={3}></Tab>
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
	<Highlight {code} />
</div>
