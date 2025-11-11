import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Thumb = ({ src, alt, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative flex-shrink-0 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
      active ? "opacity-100" : "opacity-40 hover:opacity-70"
    }`}
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-28 h-20 md:w-36 md:h-24 object-cover" />
  </button>
);

export function HorizontalCarousel({ images = [], className = "" }) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const trackRef = useRef(null);

  const items = useMemo(
    () => images.map((img, i) => ({ src: typeof img === "string" ? img : img.src, alt: img.alt || `image-${i}` })),
    [images]
  );

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const activeThumb = el.children[index];
    if (!activeThumb) return;
    // Horizontal-only centering to avoid any vertical page scroll
    const thumbRect = activeThumb.getBoundingClientRect();
    const trackRect = el.getBoundingClientRect();
    const currentScrollLeft = el.scrollLeft;
    const thumbCenterOffset = (activeThumb.offsetLeft + thumbRect.width / 2);
    const targetScrollLeft = thumbCenterOffset - trackRect.width / 2;
    el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  }, [index]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative rounded-lg overflow-hidden bg-black/5">
        <div className="aspect-square sm:aspect-video">
          <img
            src={items[index]?.src}
            alt={items[index]?.alt}
            className={`size-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          />
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3">
          <button
            type="button"
            onClick={prev}
            disabled={index === 0}
            className="pointer-events-auto size-10 rounded-full bg-white/90 text-foreground flex items-center justify-center shadow disabled:opacity-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={index === items.length - 1}
            className="pointer-events-auto size-10 rounded-full bg-white/90 text-foreground flex items-center justify-center shadow disabled:opacity-50"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3">
        <div
          ref={trackRef}
          className="flex gap-2 overflow-x-auto no-scrollbar p-1"
          role="listbox"
          aria-label="Thumbnails"
        >
          {items.map((img, i) => (
            <div key={img.src + i} className="flex-shrink-0">
              <Thumb src={img.src} alt={img.alt} active={i === index} onClick={() => setIndex(i)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalCarousel;