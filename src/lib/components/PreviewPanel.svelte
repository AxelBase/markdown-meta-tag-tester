<script lang="ts">
  export let html: string = '';
  
  $: hasContent = html && html.trim();
</script>

<div class="card preview-panel">
  <div class="card-header">
    <h5>
      <i class="bi bi-eye"></i> Live Preview
    </h5>
  </div>
  
  <div class="preview-content">
    {#if hasContent}
      {@html html}
    {:else}
      <div class="placeholder">
        <p>Your rendered HTML output will appear here.</p>
      </div>
    {/if}
  </div>
</div>

<style>
  .preview-panel {
    background-color: var(--secondary-bg);
  }
  .preview-content {
    min-height: 450px;
    padding: 1.5rem;
    overflow-y: auto;
  }
  
  .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 450px;
    color: var(--text-secondary);
    text-align: center;
    border: 2px dashed var(--card-bg);
    border-radius: 6px;
  }

  /* Global styles for the rendered HTML */
  :global(.preview-content h1, .preview-content h2, .preview-content h3) {
    color: var(--accent-secondary);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
    margin-top: 1.5rem;
  }
  :global(.preview-content p) {
    color: var(--text-primary);
    line-height: 1.7;
  }
  :global(.preview-content a) {
    color: var(--accent-primary);
  }
  :global(.preview-content code) {
    background-color: var(--primary-bg);
    border: 1px solid var(--border-color);
  }
  :global(.preview-content pre) {
    background-color: var(--primary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
  }
  :global(.preview-content pre code) {
    border: none;
    background: none;
    padding: 0;
  }
  :global(.preview-content blockquote) {
    border-left: 4px solid var(--accent-primary);
    padding-left: 1rem;
    margin-left: 0;
    color: var(--text-secondary);
    font-style: italic;
  }
  :global(.preview-content ul, .preview-content ol) {
    padding-left: 1.5rem;
  }
</style>