import { marked } from 'marked';
import yaml from 'js-yaml';

// Configure marked for security
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false
});

export function parseMarkdown(input) {
  const result = {
    html: '',
    metaTags: {},
    errors: [],
    warnings: [],
    isValid: true,
    lineErrors: new Map() // lineNumber -> error message
  };

  if (!input || input.trim() === '') {
    result.html = '<p class="text-muted">Enter Markdown content to preview...</p>';
    return result;
  }

  try {
    // Extract YAML front matter with line tracking
    const lines = input.split('\n');
    const yamlStart = lines.findIndex(line => line.trim() === '---');
    
    if (yamlStart !== -1) {
      const yamlEnd = lines.findIndex((line, index) => index > yamlStart && line.trim() === '---');
      
      if (yamlEnd !== -1) {
        const yamlLines = lines.slice(yamlStart + 1, yamlEnd);
        const yamlContent = yamlLines.join('\n');
        const markdownLines = lines.slice(yamlEnd + 1);
        const markdownContent = markdownLines.join('\n');

        // Parse YAML with line number tracking
        try {
          result.metaTags = yaml.load(yamlContent) || {};

          // Validate and format meta tags
          if (!result.metaTags.title || result.metaTags.title === '' || result.metaTags.title === null) {
            result.isValid = false;
            result.errors.push('Title is required and cannot be empty or null');
            result.lineErrors.set(yamlStart + 2, 'Title is missing, empty, or null');
          }
          if (result.metaTags.date) {
            const date = new Date(result.metaTags.date);
            result.metaTags.date = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
          }
          if (result.metaTags.date && isNaN(Date.parse(result.metaTags.date))) {
            result.warnings.push('"date" field should be valid ISO date');
          }
          if (result.metaTags.tags && !Array.isArray(result.metaTags.tags)) {
            result.warnings.push('"tags" should be an array');
          }
          
        } catch (yamlError) {
          const errorLine = parseYamlErrorLine(yamlError, yamlLines);
          result.errors.push(`YAML Error (Line ${yamlStart + 1 + errorLine}): ${yamlError.message}`);
          result.lineErrors.set(yamlStart + 1 + errorLine, yamlError.message);
          result.isValid = false;
        }

        // Parse Markdown content
        result.html = marked.parse(markdownContent);
        
      } else {
        // Malformed YAML - missing closing ---
        result.errors.push('YAML Error (Line 2+): Missing closing "---"');
        result.lineErrors.set(yamlStart + 2, 'Missing closing "---"');
        result.isValid = false;
        result.html = marked.parse(input);
      }
    } else {
      // No YAML front matter
      result.html = marked.parse(input);
    }

    // Enhance HTML with meta tags only if valid
    if (result.isValid && Object.keys(result.metaTags).length > 0) {
      result.html = enhanceHtmlWithMeta(result.html, result.metaTags);
    }

  } catch (error) {
    result.errors.push(`Parse Error: ${error.message}`);
    result.isValid = false;
    result.html = `<div class="alert alert-danger">Parse Error: ${error.message}</div>`;
  }

  return result;
}

function parseYamlErrorLine(error, yamlLines) {
  // Extract line number from js-yaml error
  const lineMatch = error.message.match(/line (\d+)/i);
  return lineMatch ? parseInt(lineMatch[1]) - 1 : 0;
}

function enhanceHtmlWithMeta(html, metaTags) {
  const title = metaTags.title ? `<h1 class="meta-title">${metaTags.title}</h1>` : '';
  const author = metaTags.author ? `<p class="meta-author">By ${metaTags.author}</p>` : '';
  
  return `
    <div class="meta-enhanced">
      ${title}${author}
      <hr class="meta-divider">
      ${html}
    </div>
  `;
}