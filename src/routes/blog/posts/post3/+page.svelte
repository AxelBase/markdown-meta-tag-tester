<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Setting Up Your First Meta Tag Check | Markdown Meta Tag Tester</title>
  <meta name="description" content="A beginner’s guide to setting up your first meta tag check with the Markdown Meta Tag Tester." />
  <meta property="og:title" content="Setting Up Your First Meta Tag Check | Markdown Meta Tag Tester" />
  <meta property="og:description" content="A beginner’s guide to setting up your first meta tag check with the Markdown Meta Tag Tester." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Setting Up Your First Meta Tag Check</p>
  </div>

  <article class="prose">
    <h1>Setting Up Your First Meta Tag Check</h1>

    <p class="post-meta">Published: October 15, 2025 | Last Updated: October 15, 2025</p>

    <p>Get started with the Markdown Meta Tag Tester by setting up your first meta tag validation. This guide walks you through the process.</p>

    <h2>Getting Started</h2>
    <p>Upload a Markdown file or paste content to begin checking meta tags instantly.</p>

    <h3>Steps to Follow</h3>
    <ul>
      <li>Prepare your Markdown with YAML front matter</li>
      <li>Use the upload or input field</li>
      <li>Review the validation report</li>
    </ul>

    <h3>Tips</h3>
    <p>Start with a small file to familiarize yourself with the interface.</p>

    <h2>FAQ</h2>
    <details>
      <summary>What file types are supported?</summary>
      <p>Only Markdown (.md) files are supported.</p>
    </details>
    <details>
      <summary>Do I need to install anything?</summary>
      <p>No, it runs in-browser with no setup required.</p>
    </details>
    <details>
      <summary>Can I save my work?</summary>
      <p>Export results, but input isn’t saved—privacy-first design.</p>
    </details>

    <p class="italic-note">More setup guides and tutorials to follow.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2, .prose h3 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
