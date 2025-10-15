import { marked } from 'marked';
import pkg from 'file-saver';
const { saveAs } = pkg;

// FR6: Copy to Clipboard
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true, message: 'Copied!' };
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return { success: true, message: 'Copied!' };
  }
}

// FR7: Export HTML
export function exportAsHtml(html, metaTags) {
  try {
    const title = metaTags.title || 'untitled';
    const author = metaTags.author || '';
    const date = metaTags.date || new Date().toISOString().split('T')[0];
    
    const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body class="container py-4">
  ${html}
  <hr>
  <footer class="text-muted">
    <small>By ${author} | ${date}</small>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

    const blob = new Blob([fullHtml], { type: 'text/html' });
    saveAs(blob, `${title.replace(/[^a-z0-9]/gi, '-')}.html`);
    return { success: true };
  } catch (error) {
    console.error('Export failed:', error);
    return { success: false };
  }
}