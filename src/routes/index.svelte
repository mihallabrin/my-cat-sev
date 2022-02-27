<script lang="ts">
	import Button, { Label } from '@smui/button';

	import { data } from '../stores/store';

	let my_data: string;

	data.subscribe((value) => (my_data = value));

	function handleClick(event: CustomEvent) {
		data.update((n) => n + 'test');
	}
</script>

<h1>My Cat Sev</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button on:click={handleClick} variant="raised">
	<Label>Click me</Label>
</Button>

<div>
	This is my data: {my_data}
</div>
