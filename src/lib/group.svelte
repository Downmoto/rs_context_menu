<script lang="ts">
	let { name }: { name?: string } = $props();
</script>

<div class="separator-container" role="separator" aria-orientation="horizontal">
	{#if name}
		<span class="separator-name">{name}</span>
	{/if}
	<div class="separator-line"></div>
</div>

<style>
	.separator-container {
		display: flex;
		align-items: center;
		margin: 4px 0;
		width: 100%;
		user-select: none;
    	cursor: default;
	}

	.separator-name {
		font-size: 12px;
		color: #666;
		margin-right: 8px;
		white-space: nowrap;
	}

	.separator-line {
		height: 1px;
		background-color: #ccc;
		flex: 1;
	}
</style>
