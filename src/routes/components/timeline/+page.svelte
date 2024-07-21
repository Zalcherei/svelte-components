<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TimelineItem from '$lib/timeline/timeline-item.svelte';
	import Timeline from '$lib/timeline/timeline.svelte';

	let code = `<Timeline>
    <TimelineItem date="2021" title="Started" />
    <TimelineItem date="2022" title="Continued" />
    <TimelineItem date="2023" title="Break" />
    <TimelineItem date="2024" title="Started again" last={true} />
  </Timeline>`;
</script>

<svelte:head>
	<title>Svelte Components - Timeline</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Timeline
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/timeline"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Timeline>
			<TimelineItem date="2021" title="Started" />
			<TimelineItem date="2022" title="Continued" />
			<TimelineItem date="2023" title="Break" />
			<TimelineItem date="2024" title="Started again" last={true} />
		</Timeline>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
