<script lang="ts">
	import * as ContextMenu from '$lib/index.js';
	import Back from './back.svelte';

	function open(e: MouseEvent) {
		console.log(e);
	}
</script>

<div class="centered">
	<!-- ---------------------- -->

	<ContextMenu.Root {open}>
		{#snippet Zone()}
			<div class="menu">
				<h1>Zone</h1>
			</div>
		{/snippet}

		<ContextMenu.Item onclick={open} ToggleIcon={Back}>item 1</ContextMenu.Item>
		<ContextMenu.Item onclick={open}>item 2</ContextMenu.Item>

		<ContextMenu.Group name='Actions' />
		<ContextMenu.Item onclick={open}>item 3</ContextMenu.Item>
		<ContextMenu.Item onclick={open}>item 3</ContextMenu.Item>
		<ContextMenu.Item onclick={open}>item 3</ContextMenu.Item>
		<ContextMenu.Item onclick={open}>item 3</ContextMenu.Item>
		<!-- <div class="submenu">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			<div class="submenu">
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
			</div>
		</div> -->
	</ContextMenu.Root>

	<!-- ---------------------- -->
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.centered {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
</style>
