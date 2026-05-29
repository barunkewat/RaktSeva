import { useState } from "react";
import { imageFallback } from "./marketingImages";

export default function MarketingImage({
  src,
  alt,
  className = "",
  fallback = imageFallback,
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
      }}
      className={className}
    />
  );
}
