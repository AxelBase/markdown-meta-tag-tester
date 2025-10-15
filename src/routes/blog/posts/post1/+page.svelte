<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>What is the Markdown Meta Tag Tester? | AxelBase Blog</title>
  <meta name="description" content="Discover what the Markdown Meta Tag Tester is—a privacy-focused tool for validating meta tags in your Markdown files efficiently." />
  <meta property="og:title" content="What is the Markdown Meta Tag Tester? | AxelBase Blog" />
  <meta property="og:description" content="Discover what the Markdown Meta Tag Tester is—a privacy-focused tool for validating meta tags in your Markdown files efficiently." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>What is the Markdown Meta Tag Tester?</p>
  </div>
  
  <article class="prose">
    <h1>What is the Markdown Meta Tag Tester?</h1>
    
    <p class="post-meta">Published: October 15, 2025</p>
    
    <p>The Markdown Meta Tag Tester is a powerful, privacy-first tool designed to validate and optimize meta tags within your Markdown files. Perfect for writers, developers, and content creators, it ensures your metadata is accurate and SEO-friendly.</p>
    
    <h2>Why Meta Tags Matter</h2>
    <p>Meta tags enhance discoverability, provide context for search engines, and improve user experience when properly implemented in Markdown.</p>
    
    <h3>Key Benefits</h3>
    <ul>
      <li>Ensures proper title and description tags</li>
      <li>Detects missing or invalid meta data</li>
      <li>Supports SEO and accessibility</li>
    </ul>
    
    <h3>How It Helps</h3>
    <p>This tool scans your Markdown, identifies meta tag issues, and offers actionable feedback—all without sending data to external servers.</p>
    
    <h2>FAQ</h2>
    <details>
      <summary>What types of meta tags does it check?</summary>
      <p>It validates titles, descriptions, and custom meta tags for accuracy and completeness.</p>
    </details>
    <details>
      <summary>Is it free to use?</summary>
      <p>Yes, with limited quotas; premium options are available for advanced use.</p>
    </details>
    <details>
      <summary>How often should I check meta tags?</summary>
      <p>Before publishing or updating content to maintain SEO performance.</p>
    </details>
    
    <p class="italic-note">Stay tuned for more updates on meta tag best practices.</p>
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