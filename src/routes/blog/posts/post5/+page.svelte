<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Exporting Meta Tag Reports | Markdown Meta Tag Tester</title>
  <meta name="description" content="Learn how to export meta tag validation reports using the Markdown Meta Tag Tester for further analysis." />
  <meta property="og:title" content="Exporting Meta Tag Reports | Markdown Meta Tag Tester" />
  <meta property="og:description" content="Learn how to export meta tag validation reports using the Markdown Meta Tag Tester for further analysis." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Exporting Meta Tag Reports</p>
  </div>

  <article class="prose">
    <h1>Exporting Meta Tag Reports</h1>

    <p class="post-meta">Published: October 15, 2025 | Last Updated: October 15, 2025</p>

    <p>The Markdown Meta Tag Tester allows you to export validation reports for deeper analysis or sharing. Here’s how to do it.</p>

    <h2>Export Options</h2>
    <p>Choose between copying HTML or downloading a formatted file with meta tag details.</p>

    <h3>Steps to Export</h3>
    <ul>
      <li>Validate your Markdown</li>
      <li>Click the export button</li>
      <li>Save or copy the output</li>
    </ul>

    <h3>Use Cases</h3>
    <p>Ideal for documentation reviews or team collaboration.</p>

    <h2>FAQ</h2>
    <details>
      <summary>What formats are available?</summary>
      <p>Currently, HTML export is supported.</p>
    </details>
    <details>
      <summary>Can I customize the export?</summary>
      <p>Yes, adjust settings before exporting.</p>
    </details>
    <details>
      <summary>Is the export secure?</summary>
      <p>Yes, all data stays local during export.</p>
    </details>

    <p class="italic-note">Future updates may include JSON export options.</p>
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
