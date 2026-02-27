import { useState } from 'react';
import { publicUrl } from '../utils/assets';

const BASE = import.meta.env.BASE_URL || '/';

/**
 * Logo image that works in both dev (public at /) and production (public at BASE).
 * Tries publicUrl first; on error tries base-relative path so logos show in all environments.
 */
export default function LogoImg({ src, alt, className, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(() => publicUrl(src));
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (currentSrc === publicUrl(src)) {
      setCurrentSrc(`${BASE}${src}`);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return <span className={className} aria-label={alt} style={{ display: 'inline-block', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{alt}</span>;
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="eager"
      {...props}
    />
  );
}
