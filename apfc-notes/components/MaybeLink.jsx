import Link from 'next/link';

// Topics without notes are listed but not linked: the static export only
// builds pages that have content, so a link would lead to a 404.
export default function MaybeLink({ ready, href, ref, ...props }) {
  return ready ? <Link ref={ref} href={href} {...props} /> : <span ref={ref} aria-disabled="true" {...props} />;
}
