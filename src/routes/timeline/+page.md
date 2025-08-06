<script>
  import Timeline from '$lib/timeline/timeline.svelte';
  import TimelineItem from '$lib/timeline/timeline-item.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Timeline</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Timeline" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/timeline">
{#snippet display()}
<Timeline>
	<TimelineItem date="2021" title="Started" />
	<TimelineItem date="2022" title="Continued" />
	<TimelineItem date="2023" title="Break" />
	<TimelineItem date="2024" title="Started again" last={true} />
</Timeline>
{/snippet}

```html
<Timeline>
	<TimelineItem date="2021" title="Started" />
	<TimelineItem date="2022" title="Continued" />
	<TimelineItem date="2023" title="Break" />
	<TimelineItem date="2024" title="Started again" last={true} />
</Timeline>
```
</Mdsvex>
