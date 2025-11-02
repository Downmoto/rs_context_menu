import type { Snippet, Component } from 'svelte';

export interface ContextMenuProps {
	open?: (e: MouseEvent) => void;
	Content: Snippet;
	Zone: Snippet;
}

export interface ContextMenuItemProps {
	children: Snippet
	Icon?: Component
	Kbd?: Snippet
	onclick: (e: MouseEvent) => void
}