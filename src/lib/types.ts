import type { Snippet, Component } from 'svelte';

export interface ContextMenuProps {
	open?: (e: MouseEvent) => void;
	children?: Snippet;
	Zone: Snippet;
}

export interface ContextMenuItemProps {
	text: string;
	ToggleIcon?: Component;
	Kbd?: Snippet;
	onclick: (e: MouseEvent) => void;
}

export interface SubmenuProps {
	text: string;
	children?: Snippet;
	ToggleIcon?: Component;
	disabled?: boolean;
}
