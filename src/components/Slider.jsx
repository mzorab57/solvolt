import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const slides = [
  { id: 1, video: '/assets/video/v4.mp4', title: 'Solar Installation', tag: '#site execution' },
  { id: 2, video: '/assets/video/v5.mp4', title: 'Project Delivery', tag: '#custom solution' },
  { id: 3, video: '/assets/video/v3.mp4', title: 'Technical Setup', tag: '#power systems' },
  { id: 4, video: '/assets/video/v1.mp4', title: 'On-Site Support', tag: '#field service' },
  { id: 5, video: '/assets/video/v5.mp4', title: 'Completed Work', tag: '#solvolt energy' },
  { id: 6, video: '/assets/video/v4.mp4', title: 'Solar Installation', tag: '#site execution' },
];

const Slider = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <>
      <section className="relative mx-auto w-full max-w-7xl overflow-hidden bg-white px-4 py-12 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-4 bg-gradient-to-r from-primary-primary via-primary-primary/80 to-gray-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Powering with Solvot
          </h2>
          <p className="text-lg font-normal leading-relaxed text-gray-500">
            Bringing reliable, high-efficiency solar systems to homes and businesses. We design,
            install, and maintain custom solar solutions that reduce costs, increase energy
            independence, and create a cleaner future.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {slides.map((slide) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setSelectedSlide(slide)}
              className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-black text-left shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
            >
              <video
                src={slide.video}
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />

              <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                <div className="rounded-xl bg-white/95 px-4 py-2 text-sm font-bold tracking-wider text-primary-primary shadow-lg backdrop-blur-md">
                  SOLVOLT
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-primary">
                  <Play className="ml-1 h-6 w-6 text-white" />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white drop-shadow-md sm:text-3xl">
                  {slide.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal Section */}
      {selectedSlide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedSlide(null)}
        >
          <div
            className="relative mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSlide(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full  text-white shadow-lg transition hover:bg-red-600"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video Player */}
            <div className="overflow-hidden rounded-sm bg-black  shadow-2xl md:px-4 md:py-6">
              <div className="h-[78vh] max-h-[620px] w-[88vw] max-w-[560px] md:max-h-[660px] md:max-w-[600px]">
                <video
                  src={selectedSlide.video}
                  className="h-full w-full bg-black object-contain"
                  controls
                  autoPlay
                  playsInline
                  controlsList="nofullscreen"
                  disablePictureInPicture
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
