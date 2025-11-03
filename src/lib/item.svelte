<script lang="ts">
	import type { ContextMenuItemProps } from './types.js';

	let { text, ToggleIcon, Kbd, onclick }: ContextMenuItemProps = $props();

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			onclick?.(event as any);
		}
	}
</script>

<div class="item" role="menuitem" tabindex="0" {onclick} onkeydown={handleKeyDown}>
	<div class="icon">
		{#if ToggleIcon}
			<ToggleIcon />
		{/if}
	</div>
	<div class="text">
		{text}
	</div>
	<div class="kbd">
		{@render Kbd?.()}
	</div>
</div>

<style>
	.item {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}

    .item:hover {
        background-color: rgb(202, 202, 202);
    }
</style>
