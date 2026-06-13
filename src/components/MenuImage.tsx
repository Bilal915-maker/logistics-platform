"use client";

import { useState } from "react";

interface MenuImageProps {
  slug: string;
  emoji: string;
  alt: string;
  className?: string;
}

export default function MenuImage({ slug, emoji, alt, className = "" }: MenuImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-brand-gold/30 via-brand-red/10 to-brand-dark/10 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl">{emoji}</span>
      </div>
      {!error && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/images/menu/${slug}.jpg`}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
