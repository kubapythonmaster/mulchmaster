import { media } from "../media.js";

export function Photo({ id, alt, sizes, priority = false, className }) {
  const photo = media[id];

  return (
    <img
      className={className}
      src={photo.md || photo.src}
      srcSet={`${photo.sm} 480w, ${photo.md} 960w, ${photo.src} ${photo.w}w`}
      sizes={sizes}
      width={photo.w}
      height={photo.h}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
