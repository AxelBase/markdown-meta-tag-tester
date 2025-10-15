<script lang="ts">
  import MarkdownInput from '$lib/components/MarkdownInput.svelte';
  import PreviewPanel from '$lib/components/PreviewPanel.svelte';
  import MetaTagSummary from '$lib/components/MetaTagSummary.svelte';
  import ErrorDisplay from '$lib/components/ErrorDisplay.svelte';
  import { parseMarkdown } from '$lib/utils/markdownParser.js';
  import { copyToClipboard, exportAsHtml } from '$lib/utils/fileExport.js';
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  
  let markdownInput = '';
  let parsed = { 
    html: '', 
    metaTags: {}, 
    errors: [], 
    warnings: [], 
    isValid: true, 
    lineErrors: new Map() 
  };
  let textareaRef;
  let fileName = '';
  let copyStatus = '';
  let exportStatus = '';

  $: parsed = parseMarkdown(markdownInput);

  async function handleCopy() {
    const result = await copyToClipboard(parsed.html);
    copyStatus = result.success ? 'success' : 'error';
    setTimeout(() => copyStatus = '', 2000);
  }

  function handleExport() {
    const result = exportAsHtml(parsed.html, parsed.metaTags);
    exportStatus = result.success ? 'success' : 'error';
    setTimeout(() => exportStatus = '', 2000);
  }

  function handleReset() {
    markdownInput = '';
    parsed = { html: '', metaTags: {}, errors: [], warnings: [], isValid: true, lineErrors: new Map() };
    fileName = '';
    copyStatus = '';
    exportStatus = '';
    textareaRef?.focus();
  }

  async function loadSample() {
    try {
      const response = await fetch('./sample.md');
      markdownInput = await response.text();
      fileName = 'sample.md';
    } catch (error) {
      parsed.errors = ['Failed to load sample'];
      parsed.isValid = false;
    }
  }

  function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.md')) {
      fileName = file.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        markdownInput = e.target.result as string;
      };
      reader.readAsText(file);
    }
  }

  onMount(() => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'Enter':
            e.preventDefault();
            loadSample();
            break;
          case 'r':
          case 'R':
            if (e.shiftKey) handleReset();
            break;
          case 's':
          case 'S':
            if (e.shiftKey) handleExport();
            break;
          case 'c':
          case 'C':
            if (!e.shiftKey) handleCopy();
            break;
        }
      }
    });
  });
</script>

<svelte:head>
  <title>Markdown Meta Tag Tester | AxelBase</title>
  <meta name="description" content="Validate and optimize meta tags in your Markdown files with the Markdown Meta Tag Tester, a privacy-first tool by AxelBase for developers and content creators." />

  <meta property="og:title" content="Markdown Meta Tag Tester | AxelBase" />
  <meta property="og:description" content="Validate and optimize meta tags in your Markdown files with the Markdown Meta Tag Tester, a privacy-first tool by AxelBase for developers and content creators." />
  <meta property="og:url" content={base + '/'} />
  <meta property="og:type" content="website" />
  <!-- <meta property="og:image" content={base + '/og/home.png'} /> -->

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Markdown Meta Tag Tester | AxelBase" />
  <meta name="twitter:description" content="Validate and optimize meta tags in your Markdown files with the Markdown Meta Tag Tester, a privacy-first tool by AxelBase for developers and content creators." />
  <!-- <meta name="twitter:image" content={base + '/og/home.png'} /> -->

  <meta name="keywords" content="Markdown Meta Tag Tester, AxelBase, meta tag validation, Markdown tool, privacy-first, SEO optimization, developer tools, content creation" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="container fade-in">
  <header class="page-header">
    <div class="header-content">
      <h1>
        <i class="bi bi-file-earmark-text"></i>
        Markdown Meta Tag Tester
      </h1>
      <div class="header-actions">
        <input type="file" id="fileInput" accept=".md" on:change={handleFileSelect} style="display: none;" />
        <label for="fileInput" class="btn btn-secondary">
          <i class="bi bi-upload"></i> Upload .md
        </label>
        <button class="btn btn-secondary" on:click={loadSample} title="Ctrl+Enter">
          <i class="bi bi-play-circle"></i> Sample
        </button>
        <button class="btn btn-secondary" on:click={handleReset} title="Ctrl+Shift+R">
          <i class="bi bi-arrow-clockwise"></i> Reset
        </button>
      </div>
    </div>
    <div class="shortcuts-info">
      <i class="bi bi-info-circle"></i>
      <strong>Shortcuts:</strong> Ctrl+C (Copy) • Ctrl+Shift+S (Export) • Ctrl+Enter (Sample) • Ctrl+Shift+R (Reset)
    </div>
  </header>

  <div class="main-grid">
    <div class="input-column">
      <MarkdownInput 
        bind:value={markdownInput} 
        lineErrors={Array.from(parsed.lineErrors.entries())}
        {fileName}
        bind:textareaRef={textareaRef}
      />
      
      <div class="action-buttons">
        <button 
          class="btn btn-primary" 
          on:click={handleCopy}
          class:success={copyStatus === 'success'}
          disabled={!parsed.html}
          title="Ctrl+C"
        >
          <i class="bi bi-copy"></i>
          Copy HTML
          {#if copyStatus === 'success'}✅{/if}
        </button>
        <button 
          class="btn btn-primary" 
          on:click={handleExport}
          class:error={exportStatus === 'error'}
          disabled={!parsed.html}
          title="Ctrl+Shift+S"
        >
          <i class="bi bi-download"></i>
          Export HTML
        </button>
      </div>

      <ErrorDisplay 
        errors={parsed.errors} 
        lineErrors={Array.from(parsed.lineErrors.entries())}
        bind:textareaRef={textareaRef}
      />
    </div>

    <div class="preview-column">
      <PreviewPanel html={parsed.html} />
      <MetaTagSummary 
        metaTags={parsed.metaTags} 
        warnings={parsed.warnings} 
      />
    </div>
  </div>

  <div class="status-bar">
    <span>
      <i class="bi bi-check-circle" style="color: {parsed.isValid ? 'var(--success-color)' : 'var(--error-color)'};"></i>
      Status: {parsed.isValid ? 'Valid' : 'Errors Found'}
    </span>
    {#if parsed.metaTags.title}
      <span>• <i class="bi bi-tag"></i> {parsed.metaTags.title}</span>
    {/if}
    <span>{markdownInput.split('\n').length} lines</span>
  </div>

<section id="about" class="content-section">
  <h2>About AxelBase</h2>
  <p><strong>AxelBase</strong> is a pioneering platform for <em>Markdown metadata management</em>, built around the <strong>Markdown Meta Tag Tester</strong>. Designed for <strong>developers</strong>, <em>writers</em>, and <strong>content creators</strong>, this <strong>privacy-first tool</strong> offers real-time validation and optimization of meta tags within Markdown files.</p>
  <p>It ensures your metadata—such as <em>titles</em>, <strong>descriptions</strong>, and custom tags—is <strong>accurate</strong>, <em>SEO-friendly</em>, and compliant with industry standards. Operating entirely <strong>client-side</strong>, AxelBase guarantees <strong>zero data transmission</strong>, aligning with <em>privacy-first principles</em> that protect user confidentiality.</p>
  <p><strong>Key features include:</strong></p>
  <ul>
    <li><strong>Live HTML preview</strong></li>
    <li><strong>Detailed error reporting</strong> with <em>line-specific feedback</em></li>
    <li><strong>Export options</strong> for HTML reports</li>
  </ul>
  <p>Whether you're working on <strong>documentation</strong>, <em>blogs</em>, or <strong>educational content</strong>, AxelBase helps you maintain <strong>high-quality metadata</strong> with ease. It integrates seamlessly into <strong>Markdown workflows</strong>, offering a <strong>user-friendly interface</strong> and <strong>customizable validation rules</strong> to suit diverse project needs.</p>
  <p>Backed by an <em>open-source ethos</em>, AxelBase welcomes community contributions via its <strong>GitHub repository</strong>, fostering a <strong>collaborative environment</strong> to advance Markdown tooling.</p>
  <p>With a focus on <strong>accessibility</strong> and <em>efficiency</em>, AxelBase offers <strong>free access</strong> with limited quotas, plus <strong>premium subscriptions</strong> for advanced users. Stay tuned for <strong>future updates</strong>—including enhanced rule sets and integrations—positioning AxelBase as a <strong>cornerstone</strong> for metadata management in 2025 and beyond.</p>
</section>

<hr>

<section id="how-to-use" class="content-section">
  <h2>How to Use</h2>
  <p>Get started with the <strong>Markdown Meta Tag Tester</strong> using these step-by-step instructions:</p>
  <ul>
    <li><strong>Paste</strong> your Markdown content (including <em>YAML front matter</em>) into the <strong>left input panel</strong>.</li>
    <li>Watch the <strong>live preview</strong> update instantly on the right, showing how your <em>meta tags</em> render as HTML.</li>
    <li><strong>Click “Upload .md”</strong> to validate a file. Errors or <em>warnings</em> appear below with <strong>line-specific guidance</strong>.</li>
  </ul>
  <p><strong>Quick actions:</strong></p>
  <ul>
    <li><strong>“Sample” button</strong> (Ctrl+Enter) — Load a pre-built example</li>
    <li><strong>“Copy HTML”</strong> (Ctrl+C) — Copy rendered output</li>
    <li><strong>“Export HTML”</strong> (Ctrl+Shift+S) — Save as file</li>
    <li><strong>Reset workspace</strong> (Ctrl+Shift+R) — Clear input</li>
  </ul>
  <p><em>Tips:</em> Start with <strong>small files</strong> to identify error patterns. Use the <strong>line-jump feature</strong> to fix issues directly. Experiment with <em>custom validation rules</em> in settings for tailored results.</p>
  <p><strong>Advanced users:</strong> Adjust <strong>timeout settings</strong> for large files and use <strong>keyboard shortcuts</strong> to streamline your workflow. The tool supports <strong>real-time validation</strong>, so you can <strong>edit and revalidate</strong> continuously.</p>
  <p><em>Example:</em> Add YAML like <code>--- title: My Post ---</code> and watch the preview update instantly. This hands-on approach ensures metadata perfection for <strong>SEO optimization</strong> and <em>content compliance</em>.</p>
  <p>Explore <strong>integration tips</strong> with Markdown editors and visit the <strong>FAQ</strong> for troubleshooting. The <strong>intuitive design</strong> supports <strong>beginners</strong> and offers depth for <strong>experts</strong>. Future updates will include <strong>batch processing</strong> for large projects. Start today and elevate your <strong>Markdown metadata game</strong>!</p>
</section>

<hr>

<section id="faq" class="content-section">
  <h2>FAQ</h2>
  <p><strong>Q: What is YAML front matter?</strong><br>
  <strong>A:</strong> <em>YAML front matter</em> is a block of key-value pairs at the start of a Markdown file, enclosed by <strong>triple-dashed lines (---)</strong>. It defines metadata like <em>titles</em> or <em>authors</em>, which the tester parses and validates. <br><em>Example:</em> <code>--- title: My Page ---</code></p>

  <p><strong>Q: Can I validate large Markdown files?</strong><br>
  <strong>A:</strong> Yes. For <strong>optimal performance</strong>, break large files into smaller sections or adjust <strong>timeout settings</strong> in advanced options.</p>

  <p><strong>Q: How does it ensure privacy?</strong><br>
  <strong>A:</strong> All validation occurs <strong>client-side</strong> in your browser. No data is sent to servers, ensuring <strong>complete control</strong> and <strong>confidentiality</strong>.</p>

  <p><strong>Q: What if I get a validation error?</strong><br>
  <strong>A:</strong> Errors appear with <strong>line numbers</strong> and descriptions. <strong>Click</strong> an error to jump to the issue and fix it using the provided feedback.</p>

  <p><strong>Q: Is there a cost to use this tool?</strong><br>
  <strong>A:</strong> It’s <strong>free</strong> with limited quotas. <strong>Premium subscriptions</strong> offer higher limits for advanced users.</p>

  <p><strong>Q: Can I customize validation rules?</strong><br>
  <strong>A:</strong> Yes. Use <strong>settings</strong> to define custom rules for <em>titles</em>, <em>descriptions</em>, or <strong>custom tags</strong> to suit your project needs.</p>
</section>

</div>

<style>
  .page-header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-color);
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .header-actions {
    display: flex;
    gap: 0.75rem;
  }
  .shortcuts-info {
    background-color: var(--secondary-bg);
    padding: 0.75rem;
    border-radius: 6px;
    border-left: 4px solid var(--accent-primary);
    text-align: left;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  .main-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .input-column, .preview-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .action-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .action-buttons .btn.success {
    background-color: var(--success-color);
  }

  .status-bar {
    margin-top: 2rem;
    padding: 0.75rem 1rem;
    background-color: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .status-bar span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .content-section {
      padding: 3rem 0;
  }

  hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--border-color), rgba(0, 0, 0, 0));
  }
  
  @media (max-width: 992px) {
    .main-grid {
      grid-template-columns: 1fr;
    }
  }
</style>