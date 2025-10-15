<script lang="ts">
  import { slide } from 'svelte/transition';

  export let errors: string[] = [];
  export let lineErrors: [number, string][] = [];
  export let textareaRef: HTMLTextAreaElement | null = null;
  
  let dismissed = false;

  function jumpToLine(lineNumber: number) {
    if (textareaRef) {
      const lines = textareaRef.value.split('\n');
      const lineStart = lines.slice(0, lineNumber - 1).join('\n').length + (lineNumber > 1 ? 1 : 0) * (lineNumber - 1);
      textareaRef.focus();
      textareaRef.setSelectionRange(lineStart, lineStart + lines[lineNumber-1].length);
      const event = new Event('input', { bubbles: true });
      textareaRef.dispatchEvent(event);
    }
  }

  function dismissErrors() {
    dismissed = true;
  }

  $: hasErrors = errors.length > 0 && !dismissed;
</script>

{#if hasErrors}
  <div class="card error-display" transition:slide>
    <div class="card-header">
      <h6>
        <i class="bi bi-exclamation-triangle-fill"></i>
        {errors.length} Validation Error{#if errors.length !== 1}s{/if}
      </h6>
      <button class="dismiss-btn" on:click={dismissErrors} aria-label="Dismiss errors">
        <i class="bi bi-x"></i>
      </button>
    </div>
    
    <div class="card-body">
      {#each lineErrors as [lineNum, message]}
        <div class="error-item">
          <span 
            class="line-badge"
            on:click={() => jumpToLine(lineNum)}
            on:keydown={(e) => e.key === 'Enter' && jumpToLine(lineNum)}
            role="button"
            tabindex="0"
            title={`Jump to line ${lineNum}`}
          >
            Line {lineNum}
          </span>
          <p class="error-message">{message}</p>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .error-display {
    border-color: var(--error-color);
    box-shadow: 0 0 15px var(--error-color);
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 71, 71, 0.1);
    border-bottom: 1px solid var(--error-color);
  }
  .card-header h6 {
    margin: 0;
    color: var(--error-color);
  }
  .dismiss-btn {
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 1.2rem;
  }
  .dismiss-btn:hover {
    color: var(--text-primary);
  }
  .card-body {
    padding: 0.5rem 1rem;
    max-height: 200px;
    overflow-y: auto;
  }
  .error-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0.5rem;
    border-bottom: 1px solid var(--secondary-bg);
  }
  .error-item:last-child {
    border-bottom: none;
  }
  .line-badge {
    background-color: var(--error-color);
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8rem;
    cursor: pointer;
    transition: var(--transition-fast);
  }
  .line-badge:hover {
    transform: scale(1.1);
  }
  .error-message {
    margin: 0;
    font-size: 0.9rem;
  }
</style>