<script lang="ts">
	import type { ContextMenuZoneProps } from "./types.js";

    let {open, children}: ContextMenuZoneProps = $props()

    function on_open(e: MouseEvent) {
        open?.(e)
    }
</script>

<div class="zone" role="application" oncontextmenu={on_open}>
    {@render children()}
</div>