<script lang="ts">
	import Button, { Label } from '@smui/button';

	function handleClick(event: CustomEvent) {
		console.log('hello world');
		debugger;
	}
</script>

<h1>My Cat Sev</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Button on:click={handleClick} variant="raised">
	<Label>Click me</Label>
</Button>
