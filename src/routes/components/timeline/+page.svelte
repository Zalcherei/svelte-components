<script>
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

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Timeline>
			<TimelineItem date="2021" title="Started" />
			<TimelineItem date="2022" title="Continued" />
			<TimelineItem date="2023" title="Break" />
			<TimelineItem date="2024" title="Started again" last={true} />
		</Timeline>
	</div>
	<Highlight {code} />
</div>
