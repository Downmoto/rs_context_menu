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

		<ContextMenu.Item onclick={open} ToggleIcon={Back} text='item 1' />
		<ContextMenu.Item onclick={open} text='item 2' />

		<ContextMenu.Sub text="File">
			<ContextMenu.Item onclick={open} text='New' />
			<ContextMenu.Item onclick={open} text='Open' />
			<ContextMenu.Item onclick={open} text='Save' />
			<ContextMenu.Group />
			<ContextMenu.Item onclick={open} text='Exit' />
		</ContextMenu.Sub>

		<ContextMenu.Sub text="Edit" ToggleIcon={Back}>
			<ContextMenu.Item onclick={open} text='Cut' />
			<ContextMenu.Item onclick={open} text='Copy' />
			<ContextMenu.Item onclick={open} text='Paste' />
			<ContextMenu.Group name='Advanced' />
			<ContextMenu.Sub text="Find">
				<ContextMenu.Item onclick={open} text='Find' />
				<ContextMenu.Item onclick={open} text='Replace' />
				<ContextMenu.Item onclick={open} text='Find in Files' />
			</ContextMenu.Sub>
		</ContextMenu.Sub>

		<ContextMenu.Group name='Actions' />
		<ContextMenu.Item onclick={open} text='item 3'/>
		<ContextMenu.Item onclick={open} text='item 4'/>
		<ContextMenu.Item onclick={open} text='item 5'/>
		<ContextMenu.Item onclick={open} text='item 6'/>
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
