<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding Validation Errors | Markdown Meta Tag Tester</title>
  <meta name="description" content="Learn to interpret and resolve common validation errors with the Markdown Meta Tag Tester." />
  <meta property="og:title" content="Understanding Validation Errors | Markdown Meta Tag Tester" />
  <meta property="og:description" content="Learn to interpret and resolve common validation errors with the Markdown Meta Tag Tester." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding Validation Errors</p>
  </div>

  <article class="prose">
    <h1>Understanding Validation Errors</h1>

    <p class="post-meta">Published: October 15, 2025 | Last Updated: October 15, 2025</p>

    <p>The Markdown Meta Tag Tester flags errors to help you perfect your meta tags. Here’s how to understand and fix them.</p>

    <h2>Common Errors</h2>
    <p>Errors include missing titles, invalid YAML, or duplicate tags.</p>

    <h3>Fixing Issues</h3>
    <ul>
      <li>Check for syntax errors in YAML</li>
      <li>Ensure all required fields are present</li>
      <li>Review error line numbers</li>
    </ul>

    <h3>Tools Provided</h3>
    <p>Use the line-jump feature to edit errors directly in your Markdown.</p>

    <h2>FAQ</h2>
    <details>
      <summary>What does a “missing title” error mean?</summary>
      <p>The title field in YAML is empty or absent.</p>
    </details>
    <details>
      <summary>Can I dismiss errors?</summary>
      <p>Yes, use the dismiss button to hide resolved issues.</p>
    </details>
    <details>
      <summary>Are warnings the same as errors?</summary>
      <p>No, warnings are suggestions, not critical failures.</p>
    </details>

    <p class="italic-note">Upcoming: Advanced error troubleshooting guide.</p>
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
