import React, { useEffect, useState } from 'react';

const Slider = () => {
  const slides = [
    { id: 1, image: '/assets/images/bgproduct.jpg', alt: 'سلايد یەک', text: 'First slide' },
    { id: 2, image: '/assets/images/bgProducts.jpg', alt: 'سلايد دوو', text: 'Second slide' },
    { id: 3, image: '/assets/images/bgvideo.jpg', alt: 'سلايد سێ', text: 'Third slide' },
    { id: 4, image: '/assets/images/bgproduct.jpg', alt: 'سلايد چوار', text: 'Fourth slide' },
    { id: 5, image: '/assets/images/bgproduct.jpg', alt: 'سلايد پێنج', text: 'Fifth slide' },
  ];

  const isAutoPlay = true;
  const speed = 1000;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isAutoPlay || isPaused) return;
    const timer = setInterval(next, speed);
    return () => clearInterval(timer);
  }, [isAutoPlay, speed, isPaused]);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 30) {
      if (dx < 0) next();
      else prev();
    }
    setTouchStartX(null);
  };

  return (
    <div
      id="carousel-progress"
      data-carousel='{ "loadingClasses": "opacity-50", "isAutoPlay": true, "speed": 100 }'
      className="relative w-full max-w-7xl px-4 lg:px-8 mx-auto"
    >

         <div className="max-w-4xl  mb-10">
          <h2 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-300 bg-clip-text text-transparent">Powering with Solvot</h2>
          <p className="text-lg text-start  w-full font-light text-gray-500  max-w-3xl py-5 px-1 ">
          Bringing reliable, high-efficiency solar systems to homes and businesses. We design, install, and maintain custom solar solutions that reduce costs, increase energy independence, and create a cleaner future.
          </p>
        </div>
      <div className="carousel h-80 sm:h-96 md:h-[28rem] lg:h-[30rem] rounded-none overflow-hidden">
        <div
          className="carousel-body flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, idx) => (
            <div className="carousel-slide flex-shrink-0 w-full h-full" key={slide.id}>
              <div className="bg-base-200/40 relative flex h-full justify-center p-6">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded"
                />
                <span className="absolute self-center text-2xl sm:text-4xl text-white">
                  {slide.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-pagination absolute end-0 start-0 top-0 justify-start space-x-0">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 ${
                current === i ? 'bg-primary' : 'bg-gray-400'
              } ${i === 0 ? 'w-1/5' : i === 1 ? 'w-2/5' : i === 2 ? 'w-3/5' : i === 3 ? 'w-4/5' : 'w-full'}`}
            ></span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
      >
        <span className="icon-[tabler--chevron-left] size-5"></span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        onClick={next}
        className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
      >
        <span className="icon-[tabler--chevron-right] size-5"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Slider;
