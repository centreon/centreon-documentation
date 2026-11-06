import { CodeBlock as RspressCodeBlock } from '@rspress/core/theme';
import type { ReactNode } from 'react';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children?: ReactNode;
}

/**
 * `@theme/CodeBlock` for pages migrated as-is: rspress' frame and copy button,
 * without runtime highlighting (it would load Shiki in the browser).
 */
export default function CodeBlock({ language, title, children }: CodeBlockProps) {
  return (
    <RspressCodeBlock lang={language} title={title}>
      <pre>
        <code>{children}</code>
      </pre>
    </RspressCodeBlock>
  );
}
