<script lang="ts">
  import { copyToClipboard } from '$lib/utils/fileExport.js';
  import { slide } from 'svelte/transition';
  
  export let metaTags: Record<string, any> = {};
  export let warnings: string[] = [];

  let collapsed = false;
  let jsonCopied = false;

  async function copyJson() {
    const json = JSON.stringify(metaTags, null, 2);
    await copyToClipboard(json);
    jsonCopied = true;
    setTimeout(() => jsonCopied = false, 2000);
  }

  $: hasWarnings = warnings.length > 0;
</script>

{#if Object.keys(metaTags).length > 0}
  <div class="card meta-summary">
    <div 
      class="card-header" 
      on:click={() => collapsed = !collapsed}
      on:keydown={(e) => e.key === 'Enter' && (collapsed = !collapsed)}
      role="button"
      tabindex="0"
    >
      <h5 class="header-title">
        <i class="bi bi-tags"></i>
        Meta Tags Summary ({Object.keys(metaTags).length})
        {#if hasWarnings}
          <span class="warning-badge">!</span>
        {/if}
      </h5>
      <i class="bi bi-chevron-{collapsed ? 'down' : 'up'} chevron"></i>
    </div>

    {#if !collapsed}
      <div class="card-body" transition:slide>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {#each Object.entries(metaTags) as [key, value]}
                <tr>
                  <td><code>{key}</code></td>
                  <td>
                    {#if typeof value === 'string' && value.startsWith('http')}
                      <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                    {:else}
                      {Array.isArray(value) ? value.join(', ') : value}
                    {/if}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        
        <button class="btn btn-secondary" on:click={copyJson}>
          <i class="bi bi-copy"></i>
          {jsonCopied ? 'Copied!' : 'Copy JSON'}
        </button>

        {#if hasWarnings}
          <div class="warnings-box">
            <h6><i class="bi bi-exclamation-triangle"></i> Warnings:</h6>
            <ul>
              {#each warnings as warning}
                <li>{warning}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/if}

<style>
  .card-header {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .warning-badge {
    background-color: #ffc107;
    color: black;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.8rem;
  }
  .chevron {
    transition: transform 0.2s ease;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .table-wrapper {
    max-height: 300px;
    overflow-y: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid var(--secondary-bg);
  }
  th {
    color: var(--text-secondary);
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  tr:last-child td {
    border-bottom: none;
  }
  tr:hover {
    background-color: var(--secondary-bg);
  }

  .warnings-box {
    padding: 1rem;
    background-color: rgba(255, 193, 7, 0.1);
    border-left: 4px solid #ffc107;
    border-radius: 4px;
  }
  .warnings-box h6 {
    color: #ffc107;
    margin-bottom: 0.5rem;
  }
  .warnings-box ul {
    padding-left: 1.2rem;
    margin-bottom: 0;
    font-size: 0.9rem;
  }
</style>