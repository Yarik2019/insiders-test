import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Zoom } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

const PhotoGallery = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Zoom]}
      navigation
      pagination={{ clickable: true }}
      zoom={true}
      spaceBetween={20}
      slidesPerView={1}
      className="max-h-[80vh]"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-zoom-container">
            <img
              src={img?.src}
              alt={img?.alt || `Image ${idx + 1}`}
              className="rounded-lg object-cover w-full"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoGallery;
