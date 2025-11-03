<script lang="ts">
	import type { SubmenuProps } from './types.js';

	let { text, children, ToggleIcon, disabled = false }: SubmenuProps = $props();

	let submenu_open: boolean = $state(false);
	let submenu_x: number = $state(0);
	let submenu_y: number = $state(0);
	let submenu_container: HTMLDivElement;
	let submenu_trigger: HTMLDivElement;
	let hover_timeout: number | null = null;
	let leave_timeout: number | null = null;

	function calculatePosition() {
		if (!submenu_trigger) return;
		
		const rect = submenu_trigger.getBoundingClientRect();
		const viewport_width = window.innerWidth;
		const viewport_height = window.innerHeight;
		
		// Default position: to the right of the trigger
		let x = rect.right;
		let y = rect.top;
		
		// Estimate submenu width (we'll use a reasonable default)
		const estimated_submenu_width = 200;
		
		// Check if submenu would go off the right edge
		if (x + estimated_submenu_width > viewport_width) {
			// Flip to the left
			x = rect.left - estimated_submenu_width;
		}
		
		// Ensure submenu doesn't go off the bottom
		if (y + 200 > viewport_height) {
			y = viewport_height - 200;
		}
		
		// Ensure submenu doesn't go off the top
		if (y < 0) {
			y = 0;
		}
		
		submenu_x = x;
		submenu_y = y;
	}

	function handleMouseEnter() {
		if (disabled) return;
		
		// Clear any pending leave timeout
		if (leave_timeout) {
			clearTimeout(leave_timeout);
			leave_timeout = null;
		}
		
		// Set a small delay before opening to prevent accidental triggers
		hover_timeout = setTimeout(() => {
			calculatePosition();
			submenu_open = true;
		}, 150);
	}

	function handleMouseLeave() {
		if (disabled) return;
		
		// Clear any pending hover timeout
		if (hover_timeout) {
			clearTimeout(hover_timeout);
			hover_timeout = null;
		}
		
		// Add a small delay before closing to allow mouse movement to submenu
		leave_timeout = setTimeout(() => {
			submenu_open = false;
		}, 100);
	}

	function handleSubmenuMouseEnter() {
		// Cancel any pending close when mouse enters submenu
		if (leave_timeout) {
			clearTimeout(leave_timeout);
			leave_timeout = null;
		}
	}

	function handleSubmenuMouseLeave() {
		// Close submenu when mouse leaves the submenu area
		leave_timeout = setTimeout(() => {
			submenu_open = false;
		}, 100);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (disabled) return;
		
		switch (event.key) {
			case 'ArrowRight':
				event.preventDefault();
				if (!submenu_open) {
					calculatePosition();
					submenu_open = true;
				}
				break;
			case 'ArrowLeft':
				event.preventDefault();
				if (submenu_open) {
					submenu_open = false;
				}
				break;
			case 'Escape':
				event.preventDefault();
				submenu_open = false;
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				if (!submenu_open) {
					calculatePosition();
					submenu_open = true;
				}
				break;
		}
	}

	function handleClick(event: MouseEvent) {
		if (disabled) return;
		event.preventDefault();
		
		if (submenu_open) {
			submenu_open = false;
		} else {
			calculatePosition();
			submenu_open = true;
		}
	}
</script>

<div class="submenu-container" bind:this={submenu_container}>
	<div 
		class="submenu-trigger" 
		class:disabled
		bind:this={submenu_trigger}
		role="menuitem" 
		tabindex="0"
		aria-haspopup="true"
		aria-expanded={submenu_open}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		onkeydown={handleKeyDown}
		onclick={handleClick}
	>
		<div class="icon">
			{#if ToggleIcon}
				<ToggleIcon />
			{/if}
		</div>
		<div class="text">
			{text}
		</div>
		<div class="arrow">
			►
		</div>
	</div>

	{#if submenu_open}
		<div 
			class="submenu-popup" 
			style="position: fixed; left: {submenu_x}px; top: {submenu_y}px; z-index: 1000;"
			role="menu"
			tabindex="-1"
			onmouseenter={handleSubmenuMouseEnter}
			onmouseleave={handleSubmenuMouseLeave}
		>
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.submenu-container {
		position: relative;
	}

	.submenu-trigger {
		display: flex;
		align-items: center;
        justify-content: space-between;
		gap: 5px;
		cursor: pointer;
		border-radius: 2px;
	}

	.submenu-trigger:hover:not(.disabled) {
		background-color: rgb(202, 202, 202);
	}

	.submenu-trigger:focus {
		outline: 2px solid #0066cc;
		outline-offset: 1px;
	}

	.submenu-trigger.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.icon {
		display: flex;
		align-items: center;
	}

	.arrow {
		font-size: 10px;
		color: #666;
		margin-left: 8px;
	}

	.submenu-popup {
		background: white;
		border: 1px solid black;
		padding: 4px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
		min-width: 150px;
	}
</style>
