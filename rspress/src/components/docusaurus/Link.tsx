import { Link as RspressLink } from '@rspress/core/theme';
import type { ComponentProps } from 'react';

type LinkProps = Omit<ComponentProps<typeof RspressLink>, 'href'> & { to?: string; href?: string };

/** `@docusaurus/Link` for pages migrated as-is: `to` maps to rspress' `href`. */
export default function Link({ to, href, ...rest }: LinkProps) {
  return <RspressLink href={to ?? href ?? ''} {...rest} />;
}
