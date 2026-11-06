// Code block button icons (copy, copied, wrap, wrapped) drawn with a CSS mask
// (theme/index.css) instead of inline SVG: each of the ~31,000 code blocks
// otherwise repeats four SVGs in the SSG HTML (~36 MB).
interface MaskIconProps {
  className?: string;
}

function maskIcon(name: string) {
  return function MaskIcon({ className }: MaskIconProps) {
    return <span className={`${className ?? ''} rp-mask-icon rp-mask-icon--${name}`} aria-hidden="true" />;
  };
}

export const IconCopy = maskIcon('copy');
export const IconSuccess = maskIcon('success');
export const IconWrap = maskIcon('wrap');
export const IconWrapped = maskIcon('wrapped');
