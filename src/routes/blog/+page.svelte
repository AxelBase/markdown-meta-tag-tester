<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is the Markdown Meta Tag Tester?', description: 'An overview of this tool designed to validate meta tags in Markdown documents.' },
    { href: '/blog/posts/post2', title: 'How Meta Tag Validation Works', description: 'A detailed look at the process of checking meta tags for accuracy and completeness.' },
    { href: '/blog/posts/post3', title: 'Setting Up Your First Meta Tag Check', description: 'A beginner’s guide to using the tester for your Markdown projects.' },
    { href: '/blog/posts/post4', title: 'Understanding Validation Errors', description: 'Learn how to interpret and resolve common meta tag validation issues.' },
    { href: '/blog/posts/post5', title: 'Exporting Meta Tag Reports', description: 'Explore how to export your validation results for further analysis.' },
    { href: '/blog/posts/post6', title: 'Customizing Meta Tag Rules', description: 'How to tailor validation rules to suit your specific Markdown needs.' },
    { href: '/blog/posts/post7', title: 'Integrating with Markdown Workflows', description: 'Tips on incorporating the tester into your broader Markdown editing process.' },
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Insights</title>
  <meta name="description" content="Explore insights, tutorials, and updates for the AxelBase Markdown Meta Tag Tester." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: AxelBase Insights</h1>
    <p class="subtitle">
      Explore tutorials, updates, and best practices for the Markdown Meta Tag Tester. Learn about new features, usage tips, and more from our <a href="https://github.com/axelbase/markdown-meta-tag-tester" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>