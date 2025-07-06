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
 * Normalize various escape sequences from LLM outputs or raw strings:
 * - Converts literal "\\n", "\\r", "\\t" into actual newlines, returns, and tabs.
 * - Unescapes markdown punctuation (e.g. "\\*", "\\[",").
 * - Removes leftover backslashes before non-escaped characters.
 * - Optionally handles unicode escape sequences (e.g. "\\u0627").
 */
const normalizeEscapes = (txt: string): string => {
  let s = txt;
  // 1) Turn double-backslashes into single
  s = s.replace(/\\\\/g, "\\");
  // 2) Unescape newline, return, tab
  s = s.replace(/\\n/g, "\n")
       .replace(/\\r/g, "\r")
       .replace(/\\t/g, "\t");
  // 3) Unescape markdown punctuation
  s = s.replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, "$1");
  // 4) Handle unicode escapes (\uXXXX)
  s = s.replace(/\\u([0-9A-Fa-f]{4})/g,
    (_, hex) => String.fromCharCode(parseInt(hex, 16))
  );
  // 5) Remove any remaining backslashes before any character
  s = s.replace(/\\(.?)/g, "$1");
  return s;
};

/**
 * Robust, framework-agnostic Markdown → HTML converter
 * Supports code blocks, inline code, headings, lists, blockquotes,
 * emphasis, strikethrough, links, images, horizontal rules, and paragraphs.
 */
export function renderMarkdown(md: string): string {
  if (!md) return "";

  // 1) Normalize escape sequences first
  let html = normalizeEscapes(md);

  // 2) Code blocks (``` … ```)
  html = html.replace(/```([\s\S]*?)```/g, (_, code) =>
    `<pre><code>${escapeHtml(code)}</code></pre>`
  );

  // 3) Inline code (`code`)
  html = html.replace(/`([^`]+?)`/g, (_, code) =>
    `<code>${escapeHtml(code)}</code>`
  );

  // 4) Headings (#–######)
  html = html
    .replace(/^###### (.+)$/gm, (_, txt) => `<h6>${escapeHtml(txt)}</h6>`)
    .replace(/^##### (.+)$/gm, (_, txt) => `<h5>${escapeHtml(txt)}</h5>`)
    .replace(/^#### (.+)$/gm,  (_, txt) => `<h4>${escapeHtml(txt)}</h4>`)
    .replace(/^### (.+)$/gm,   (_, txt) => `<h3>${escapeHtml(txt)}</h3>`)
    .replace(/^## (.+)$/gm,    (_, txt) => `<h2>${escapeHtml(txt)}</h2>`)
    .replace(/^# (.+)$/gm,     (_, txt) => `<h1>${escapeHtml(txt)}</h1>`);

  // 5) Horizontal rules (---, ***, ___)
  html = html.replace(/^\s*(\-){3,}\s*$/gm, '<hr />')
             .replace(/^\s*(\*){3,}\s*$/gm, '<hr />')
             .replace(/^\s*(_){3,}\s*$/gm, '<hr />');

  // 6) Blockquotes (> text)
  html = html.replace(/^> (.+)$/gm, (_, txt) => `<blockquote>${escapeHtml(txt)}</blockquote>`);

  // 7) Bold, italics, strikethrough
  html = html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')  // **bold**
    .replace(/\*(.+?)\*/g,       '<em>$1</em>')          // *italic*
    .replace(/~~(.+?)~~/g,         '<del>$1</del>');      // ~~strike~~

  // 8) Images & links
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
                      '<img alt="$1" src="$2" />');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g,
                      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // 9) Ordered lists (1. 2. …)
  html = html.replace(
    /(^|\n)(\d+\.\s[^\n]+(?:\n\d+\.\s[^\n]+)*)/g,
    (_, lead, block) => {
      const items = block.trim().split(/\n/).map(
        line => `<li>${escapeHtml(line.replace(/^\d+\.\s/, "").trim())}</li>`
      ).join('');
      return `${lead}<ol>${items}</ol>`;
    }
  );

  // 10) Unordered lists (- * +)
  html = html.replace(
    /(^|\n)([\-\*\+]\s[^\n]+(?:\n[\-\*\+]\s[^\n]+)*)/g,
    (_, lead, block) => {
      const items = block.trim().split(/\n/).map(
        line => `<li>${escapeHtml(line.replace(/^[\-\*\+]\s/, "").trim())}</li>`
      ).join('');
      return `${lead}<ul>${items}</ul>`;
    }
  );

  // 11) Paragraphs (split on double line-breaks)
  html = html.split(/\n{2,}/).map(chunk => {
    const t = chunk.trim();
    return /^<(?:(h\d|ul|ol|li|pre|blockquote|hr|img|code))/i.test(t)
      ? t
      : `<p>${escapeHtml(t).replace(/\n/g, '<br />')}</p>`;
  }).join('');

  // 12) Any remaining single line-breaks → <br />
  html = html.replace(/\n/g, '<br />');

  return html;
}
