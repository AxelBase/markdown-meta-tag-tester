<script lang="ts">
  import { onMount } from 'svelte';
  
  export let value: string = '';
  export let lineErrors: [number, string][] = [];
  export let fileName: string = '';
  export let textareaRef: HTMLTextAreaElement;

  let wordCount = 0;
  let charCount = 0;
  let lineCount = 1;

  function updateStats() {
    const text = value || '';
    wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    charCount = text.length;
    lineCount = text.split('\n').length;
  }

  function handleInput() {
    updateStats();
  }
  
  onMount(updateStats);
  $: value, updateStats();
</script>

<div class="card markdown-input-container">
  <div class="input-header">
    <div class="header-title">
      <label for="markdownInput">
        Markdown Input {fileName ? `(${fileName})` : ''}
      </label>
      <small>
        Drag & drop or paste a .md file.
      </small>
    </div>
    <div class="stats">
      <span>{lineCount} lines</span> • 
      <span>{wordCount} words</span> • 
      <span>{charCount} chars</span>
    </div>
  </div>

  <div class="editor-wrapper">
    <div class="line-numbers">
      {#each Array(lineCount) as _, i}
        <span class:error={lineErrors.some(([ln]) => ln === i + 1)}>{i + 1}</span>
      {/each}
    </div>
    <textarea
      id="markdownInput"
      bind:this={textareaRef}
      bind:value
      class="markdown-textarea"
      rows="20"
      placeholder="---
title: My Awesome Post
author: John Doe
---
# Welcome to AxelBase...
"
      on:input={handleInput}
      spellcheck="false"
    ></textarea>
  </div>
</div>

<style>
  .markdown-input-container {
    background-color: var(--secondary-bg);
  }
  .input-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
  }
  .header-title label {
    font-weight: 600;
    color: var(--text-primary);
  }
  .header-title small {
    display: block;
    color: var(--text-secondary);
    font-size: 0.8rem;
  }
  .stats {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }

  .editor-wrapper {
    display: flex;
    position: relative;
  }

  .line-numbers {
    padding: 0.75rem 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--text-secondary);
    user-select: none;
    text-align: right;
    background-color: var(--secondary-bg);
    border-right: 1px solid var(--border-color);
  }
  .line-numbers span {
    display: block;
    transition: color 0.2s;
  }
  .line-numbers span.error {
    color: var(--error-color);
    font-weight: bold;
  }

  .markdown-textarea {
    flex: 1;
    border: none;
    background-color: var(--primary-bg);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    line-height: 1.5;
    resize: vertical;
    min-height: 450px;
    padding: 0.75rem;
    outline: none;
    caret-color: var(--accent-primary);
  }
</style>