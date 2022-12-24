import Image from "next/image";
import slideImage from "../public/images/slider-image.jpg";

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Controller } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Controller]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{
          el: ".swiper-custom-scrollbar",
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
      </Swiper>
      <div className="max-w-6xl mx-auto pt-12">
        <div className="flex items-center">
          <div className="swiper-custom-scrollbar"></div>
          <div className="swiper-button-prev text-black ml-6"></div>
          <div className="swiper-button-next text-white"></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
