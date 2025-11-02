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

		{#snippet Content()}
			<ContextMenu.Item onclick={open} Icon={Back}>
				item 1
			</ContextMenu.Item>
			<div class="item">item 2</div>
			<div class="item">item 3</div>
		{/snippet}
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
