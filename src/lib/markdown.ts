// src/lib/markdown.ts
/* eslint-disable no-useless-escape */

/**
 * Escape HTML-sensitive characters to prevent injection.
 */
const escapeHtml = (txt: string): string =>
    txt.replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;");
  
  /**
   * Normalize escaped sequences (e.g. LLM outputs with literal "\\n", "\\t", etc.)
   */
  const normalizeEscapes = (txt: string): string => {
    let s = txt;
    // Unescape double-backslashes first
    s = s.replace(/\\\\/g, "\\");
    // Convert escaped newlines, returns, tabs
    s = s.replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t");
    // Unescape common escaped markdown punctuation
    s = s.replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, "$1");
    return s;
  };
  
  /**
   * Robust, framework-agnostic Markdown → HTML converter
   * Covers headings, lists, code blocks, inline styles, links, images, blockquotes, etc.
   */
  export function renderMarkdown(md: string): string {
    if (!md) return "";
  
    // 1. Normalize any escape sequences from raw input or LLM
    let html = normalizeEscapes(md);
  
    // 2. Code blocks (``` … ```)
    html = html.replace(/```([\s\S]*?)```/g, (_, code) =>
      `<pre><code>${escapeHtml(code)}</code></pre>`
    );
  
    // 3. Inline code (`code`)
    html = html.replace(/`([^`]+?)`/g, (_, code) =>
      `<code>${escapeHtml(code)}</code>`
    );
  
    // 4. Headings (#–######)
    html = html
      .replace(/^###### (.+)$/gm, "<h6>$1</h6>")
      .replace(/^##### (.+)$/gm, "<h5>$1</h5>")
      .replace(/^#### (.+)$/gm,  "<h4>$1</h4>")
      .replace(/^### (.+)$/gm,   "<h3>$1</h3>")
      .replace(/^## (.+)$/gm,    "<h2>$1</h2>")
      .replace(/^# (.+)$/gm,     "<h1>$1</h1>");
  
    // 5. Horizontal rules (---, ***, ___)
    html = html.replace(/^\s*(\-){3,}\s*$/gm, '<hr />')
               .replace(/^\s*(\*){3,}\s*$/gm, '<hr />')
               .replace(/^\s*(_){3,}\s*$/gm, '<hr />');
  
    // 6. Blockquotes (> text)
    html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  
    // 7. Bold, italics, strikethrough
    html = html
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')  // **bold**
      .replace(/\*(.+?)\*/g,       '<em>$1</em>')          // *italic*
      .replace(/~~(.+?)~~/g,         '<del>$1</del>');      // ~~strike~~
  
    // 8. Images & links
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
                        '<img alt="$1" src="$2" />');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
    // 9. Ordered lists (1. 2. …)
    html = html.replace(
      /(^|\n)(\d+\.\s[^\n]+(?:\n\d+\.\s[^\n]+)*)/g,
      (_, lead, block) => {
        const items = block.trim().split(/\n/).map(
          line => `<li>${line.replace(/^\d+\.\s/, "").trim()}</li>`
        ).join('');
        return `${lead}<ol>${items}</ol>`;
      }
    );
  
    // 10. Unordered lists (- * +)
    html = html.replace(
      /(^|\n)([\-\*\+]\s[^\n]+(?:\n[\-\*\+]\s[^\n]+)*)/g,
      (_, lead, block) => {
        const items = block.trim().split(/\n/).map(
          line => `<li>${line.replace(/^[\-\*\+]\s/, "").trim()}</li>`
        ).join('');
        return `${lead}<ul>${items}</ul>`;
      }
    );
  
    // 11. Paragraphs (split on double line-breaks)
    html = html.split(/\n{2,}/).map(chunk => {
      const t = chunk.trim();
      return /^<(?:(h\d|ul|ol|li|pre|blockquote|hr|img|code))/i.test(t)
        ? t
        : `<p>${t}</p>`;
    }).join('');
  
    // 12. Remaining single line-breaks → <br />
    html = html.replace(/\n/g, '<br />');
  
    return html;
  }
  