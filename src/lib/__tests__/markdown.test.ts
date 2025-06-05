import { describe, it, expect } from 'vitest';
import { renderMarkdown } from '../markdown';

describe('renderMarkdown', () => {
  it('converts headings', () => {
    const md = '# Hello';
    expect(renderMarkdown(md)).toBe('<h1>Hello</h1>');
  });

  it('converts unordered lists', () => {
    const md = '- a\n- b';
    expect(renderMarkdown(md)).toBe('<ul><li>a</li><li>b</li></ul>');
  });

  it('converts ordered lists', () => {
    const md = '1. a\n2. b';
    expect(renderMarkdown(md)).toBe('<ol><li>a</li><li>b</li></ol>');
  });

  it('escapes code blocks', () => {
    const md = '```\n<>&\n```';
    expect(renderMarkdown(md)).toBe('<pre><code><br />&lt;&gt;&amp;<br /></code></pre>');
  });

  it('escapes html in paragraphs', () => {
    const md = '<script>alert(1)</script>';
    expect(renderMarkdown(md)).toBe('<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>');
  });
});
