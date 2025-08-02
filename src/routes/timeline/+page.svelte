<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TimelineItem from '$lib/timeline/timeline-item.svelte';
	import Timeline from '$lib/timeline/timeline.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Timeline>
  <TimelineItem date="2021" title="Started" />
  <TimelineItem date="2022" title="Continued" />
  <TimelineItem date="2023" title="Break" />
  <TimelineItem date="2024" title="Started again" last={true} />
</Timeline>`;
</script>

<svelte:head>
	<title>Svelte Components - Timeline</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Timeline
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/timeline"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Timeline>
			<TimelineItem date="2021" title="Started" />
			<TimelineItem date="2022" title="Continued" />
			<TimelineItem date="2023" title="Break" />
			<TimelineItem date="2024" title="Started again" last={true} />
		</Timeline>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
