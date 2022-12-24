import Image from "next/image";
import slideImage from "../public/images/slider-image.jpg";

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Controller } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SliderFree = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Controller]}
        spaceBetween={0}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-free-button-next",
          prevEl: ".swiper-free-button-prev",
        }}
        scrollbar={{
          el: ".swiper-free-custom-scrollbar",
          draggable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={slideImage} width={630} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage} width={630} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage} width={630} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage} width={630} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideImage} width={630} alt="text image" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src={slideImage} width={630} alt="text image" />
          <div className="absolute top-3/4 left-6 pt-5 px-4 z-10 text-3xl font-bold text-white">
            HR LAW
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex items-center">
          <div className="swiper-free-custom-scrollbar"></div>
          <div className="swiper-free-button-prev text-black ml-6"></div>
          <div className="swiper-free-button-next text-white"></div>
        </div>
      </div>
    </>
  );
};

export default SliderFree;
