import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import PagesHeader from '../components/ui/PagesHeader';
import { AiOutlinePlayCircle } from 'react-icons/ai';
// import LoadingPages from '../components/loading/LoadingPages';
import product from "/assets/images/bgvideo.jpg";
// Static videos dataset (no API calls)
const STATIC_VIDEOS = [
    { id: 13, poster: "/assets/images/bgvideo.jpg", video: '687aa576133e4_lux.mp4', title: 'title', description: 'work title' },
    { id: 17, poster: "/assets/images/bgproduct.jpg", video: '688b602682bbf_video1.mp4', title: 'dd', description: 'dd' },
    { id: 15, poster: "/assets/images/generated.png", video: '688a1ac2c293a_video1.mp4', title: 'Natural', description: 'luxor groups' },
    { id: 16, poster: "/assets/images/bgProducts.jpg", video: '688a1b003a617_video2.mp4', title: 'Life', description: 'new painting' },
    { id: 14, poster: "/assets/images/product.jpg", video: '687aa5969f712_lux.mp4', title: 'Miran city', description: 'description' },
    { id: 19, poster: "/assets/images/bgvideo.jpg", video: '687aa5969f712_lux.mp4', title: 'Miran city', description: 'description' },
];

export default function Videos() {
//   const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <div className=" relative ">
      {/* <PagesHeader img={"/assets/images/gallery/gallery16.jpg"} title={t("Our_Videos")} /> */}
     <section className="relative">
      <div className="relative hidden lg:block    ">
        <div style={{ backgroundImage: `url(${product})` }}  className="absolutev  aspect-auto lg:aspect-[4/1]   inset-0 bg-cover bg-center  "></div>
      </div>
      <div className="relative  ">
        <div style={{ backgroundImage: `url(${product})` }} className=" aspect-square   lg:hidden  inset-0  bg-cover bg-center "></div>
      </div>
      <div className="h-14 w-full bg-gradient-to-t from-[#fffefe] via-[#dddcdc] to-transparent absolute -bottom-[1%]"></div>

      </section>


      {/* Videos Grid */}
      <section className="relative py-16 max-w-7xl w-full mx-auto px-4">
        <div className="container ">
          <div className="max-w-7xl  text-start ">
            <h1 className="text-4xl md:text-6xl font-semibold  bg-gradient-to-r from-primary-primary via-primary/80 to-gray-300 bg-clip-text text-transparent">Our Solar & Energy Projects</h1>
            <p className="text-lg text-start font-light text-gray-500  max-w-4xl py-5 px-1 ">
            Explore a selection of our recent solar power installations, renewable energy solutions, and innovative technology projects. Each video highlights our commitment to sustainability, precision engineering, and reliable performance — powering a greener future for businesses and communities alike.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8 py-24  relative z-10">
          {STATIC_VIDEOS.map((video, index) => (
            <div
              key={video.id}
              className="group relative aspect-[4/4] w-full place-self-center rounded overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-primary-primary/60 overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  className="h-full w-full object-cover transform transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="absolute flex justify-between items-center bg-black/20 border-t border-white/10 bottom-0 w-full p-4 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-300 rounded px-2 bg-white/10 w-fit"># {video.description}</p>
                  </div>
                  <span className="block text-3xl font-medium text-white">{index + 1}</span>
                </div>
                <button
                  onClick={() => openModal(video)}
                  className="absolute inset-0 w-full h-full flex items-center justify-center opacity-100 transition-opacity duration-300"
                >
                  <span className="rounded bg-primary-primary/10 border border-white/20 p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <AiOutlinePlayCircle className="w-10 h-10 text-white" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative bg-[#19160f] rounded-lg shadow-2xl overflow-hidden max-w-3xl w-full">
            <video
              preload="none"
              controls
              autoPlay
              className="w-full max-h-[80vh]"
            >
              <source src={`https://luxorgroups.com/api/uploads/video/${selectedVideo.video}`} type="video/mp4" />
            </video>
            <button
              className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-800 rounded-full w-8 h-8 flex items-center justify-center text-lg"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

