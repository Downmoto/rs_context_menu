<script lang="ts">
	import type { ContextMenuProps } from "./types.js";

	let { open, Content, Zone } : ContextMenuProps = $props()

	let menu_open: boolean = $state(false)

	function on_open(e: MouseEvent) {
		open?.(e)
		console.log(e);
		menu_open = !menu_open  // testing
	}
</script>

<div class="root" role="application" oncontextmenu={(e) => e.preventDefault()}>
	<div class="zone" role="application" oncontextmenu={on_open}>
		{@render Zone()}
	</div>

	{#if menu_open}
		<div class="content">
			{@render Content()}
		</div>
	{/if}
</div>


