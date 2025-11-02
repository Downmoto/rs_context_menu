<script lang="ts">
    import type { ContextMenuItemProps } from "./types.js";

    let { children, Icon, Kbd, onclick }: ContextMenuItemProps = $props()

    function handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onclick?.(event as any);
        }
    }
</script>

<div class="item" role="menuitem" tabindex="0" {onclick} onkeydown={handleKeyDown}>
    <div class="icon">
        {#if Icon}
            <Icon />
        {/if}
    </div>
    <div class="text">
        {@render children()}
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
    }

    .icon {
        display: flex;
        align-items: center;
        line-height: 0;
    }
</style>
