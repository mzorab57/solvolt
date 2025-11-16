import React, { useState, useEffect, useRef } from 'react';

// A simple utility for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const CircularGallery = React.forwardRef(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, rotationExternal, disableWindowScroll = false, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const animationFrameRef = useRef(null);
    const containerRef = useRef(null);

    // Effect to handle scroll-based rotation
    useEffect(() => {
      if (disableWindowScroll || rotationExternal !== undefined) return;

      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [disableWindowScroll, rotationExternal]);

    // Effect for auto-rotation when not scrolling
    useEffect(() => {
      if (rotationExternal !== undefined) return; // skip auto-rotate when externally controlled

      const autoRotate = () => {
        if (!isScrolling) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed, rotationExternal]);

    const effectiveRotation = rotationExternal ?? rotation;
    const effectiveRadius = radius;
    const anglePerItem = 360 / items.length;
    
    return (
      <div
        ref={(node) => {
          // merge forwarded ref and local ref
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          containerRef.current = node;
        }}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: '2000px' }}
        {...props}>
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${effectiveRotation}deg)`,
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}>
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = effectiveRotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - (normalizedAngle / 180));

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute bg-red-300 lg:w-[300px]  w-[250px]  h-[300px] lg:h-[400px] rounded-lg"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${effectiveRadius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-150px',
                  marginTop: '-200px',
                  opacity: opacity,
                  transition: 'opacity 0.3s linear'
                }}>
                <div
                  className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group   backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }} />
                  {/* Replaced text-primary-foreground with text-white for consistent color */}
                  <div
                    className="absolute bottom-0 left-5 w-fit p-2   text-black/70">
                    <h2 className="lg:text-lg text-xs font-light bg-primary-primary/10 rounded-md px-3">{item.common}</h2>
                    {/* <em className="text-xs  opacity-80">{item.binomial}</em> */}
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };