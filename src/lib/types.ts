import type { Snippet } from "svelte";

export interface ContextMenuProps {
    open?: (e: MouseEvent) => void
    Content: Snippet
    Zone: Snippet
}