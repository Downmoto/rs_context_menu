<script lang="ts">
	import type { ContextMenuProps } from './types.js';

	let { open, children, Zone }: ContextMenuProps = $props();

	let menu_open: boolean = $state(false);
	let menu_x: number = $state(0);
	let menu_y: number = $state(0);

	function on_open(e: MouseEvent) {
		open?.(e);
		menu_x = e.clientX;
		menu_y = e.clientY;
		menu_open = true
	}

	function on_close(e: MouseEvent) {
		menu_open = false
	}
</script>

<svelte:window onclick={on_close} />

<div class="root" role="application" oncontextmenu={(e) => e.preventDefault()}>
	<div class="zone" role="application" oncontextmenu={on_open}>
		{@render Zone()}
	</div>

	{#if menu_open}
		<div class="menu" style="position: fixed; left: {menu_x}px; top: {menu_y}px;">
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.menu {
		background: white;
		border: 1px solid black;
		padding: 4px;
	}
</style>