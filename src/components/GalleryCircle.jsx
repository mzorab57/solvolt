import React from 'react';
import DomeGallery from './DomeGallery';

const galleryImages = [
  {
    src: '/assets/images/PIC/IMG_5974.PNG',
    alt: 'Solvolt project gallery image 1',
  },
  {
    src: '/assets/images/PIC/photo_2026-08-15_13-24-12.jpg',
    alt: 'Solvolt project gallery image 2',
  },
  {
    src: '/assets/images/PIC/photo_2026-08-15_13-24-27.jpg',
    alt: 'Solvolt project gallery image 3',
  },
  {
    src: '/assets/images/PIC/photo_2026-08-15_13-25-30.jpg',
    alt: 'Solvolt project gallery image 4',
  },
];

const GalleryCircle = () => {
  return (
      <section className="py-20  ">
        <div className="container  mx-auto ">
          <div className="text-center mx-auto px-4 max-w-6xl mb-12">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-6 text-start">
            <span className="text-4xl md:text-6xl font-medium   bg-gradient-to-r from-primary-primary via-primary/80 to-gray-400 bg-clip-text text-transparent">
              Our Work Gallery
            </span>
            <br/>
            <p className="text-xl text-gray-500 max-w-3xl font-light  my-6 ">
           See how we transform sunlight into powerful, sustainable energy with our high-efficiency solar panels and integrated solar systems.
          </p>
          </h2>
          
          </div>
          <div className="w-full h-[650px]  overflow-hidden">
            <DomeGallery
              images={galleryImages}
            //   overlayBlurColor="hsl(var(--background))"
              grayscale={false}
              imageBorderRadius="20px"
              openedImageBorderRadius="20px"
              openedImageWidth="400px"
              openedImageHeight="500px"
            />
          </div>
        </div>
      </section>
  );
};

export default GalleryCircle;
