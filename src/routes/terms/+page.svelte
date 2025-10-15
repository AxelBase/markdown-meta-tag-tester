<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Markdown Meta Tag Tester</title>
  <meta name="description" content="Review the Terms and Conditions for using the Markdown Meta Tag Tester, a privacy-first validation tool by AxelBase." />
  <meta property="og:title" content="Terms and Conditions | Markdown Meta Tag Tester" />
  <meta property="og:description" content="Review the Terms and Conditions for using the Markdown Meta Tag Tester, a privacy-first validation tool by AxelBase." />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: October 15, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Markdown Meta Tag Tester</strong> (the "Tool") provided by AxelBase ("we," "us," or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree, do not use the Tool. These Terms apply to all users, including visitors and registered users if applicable.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a free, client-side web utility for validating meta tags in Markdown files. It operates in your browser, providing features like input validation, live previews, error highlighting, and HTML exports. We may update or modify the Tool at any time without notice.</p>

    <h2>3. User Obligations</h2>
    <p>You agree to use the Tool for lawful purposes only. You must not:</p>
    <ul>
      <li>Use the Tool to upload harmful or malicious content.</li>
      <li>Reverse engineer or attempt to extract source code.</li>
      <li>Use the Tool in a way that infringes on intellectual property rights.</li>
    </ul>
    <p>You are responsible for your content and any consequences of its use.</p>

    <h2>4. Intellectual Property</h2>
    <p>The Tool, including its code, design, and documentation, is owned by AxelBase or its licensors. You are granted a limited, non-exclusive license to use the Tool for personal or non-commercial purposes. You may not copy, modify, or distribute the Tool without permission.</p>

    <h2>5. Disclaimer of Warranties</h2>
    <p>The Tool is provided "as is" without warranties of any kind, express or implied. We disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee the Tool will meet your requirements or be error-free.</p>

    <h2>6. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, AxelBase shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Tool, even if advised of such damages.</p>

    <h2>7. Indemnification</h2>
    <p>You agree to indemnify and hold AxelBase harmless from any claims, losses, or damages arising from your use of the Tool or violation of these Terms.</p>

    <h2>8. Termination</h2>
    <p>We may terminate or suspend access to the Tool at any time without notice for any reason, including violation of these Terms.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may update these Terms at any time. Continued use of the Tool constitutes acceptance of the updated Terms.</p>

    <h2>10. Contact Us</h2>
    <p>For questions about these Terms, contact us at.</p>

    <p class="italic-note">These Terms constitute the entire agreement between you and AxelBase regarding the Tool.</p>
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

  .prose h1, .prose h2{
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

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
