import Image from "next/image";
import freeResImage from "../public/images/free-res.jpg";

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y, Controller } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Controller]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={freeResImage} width={400} height={400} alt="text image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
