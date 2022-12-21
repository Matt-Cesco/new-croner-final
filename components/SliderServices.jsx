import Image from "next/image";
import homeSliderImage from "../public/images/home-slider-image.jpg";

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
        slidesPerView={5.3}
        navigation={{
          nextEl: ".swiper-free-button-next",
          prevEl: ".swiper-free-button-prev",
        }}
        scrollbar={{
          el: ".swiper-service-custom-scrollbar",
          draggable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="relative bg-red-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute left-0 bottom-0 py-12 px-12">
            <h5 className="text-2xl font-semibold text-white">
              Human Resources
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-purple-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute bottom-0 py-12 px-12">
            <h5 className="text-2xl font-semibold text-white">
              Employment Law
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-green-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute bottom-0 py-12 px-12">
            <h5 className="text-2xl font-semibold text-white">
              Health & Safety
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-blue-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute bottom-0 py-12 px-12">
            <h5 className="text-2xl font-semibold text-white">Pay & Reward</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-orange-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute bottom-0 py-12 px-12">
            <h5 className="text-2xl font-semibold text-white">
              Employee Wellbeing
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative bg-yellow-600 overflow-hidden">
          <Image
            src={homeSliderImage}
            className="transition hover:scale-110 hover:opacity-70 duration-300"
            width={384}
            height={480}
            alt="text image"
          />
          <div className="absolute bottom-0 py-12 px-12">
            <h5 className="text-3xl font-semibold text-white pb-6">
              Association Partnership
            </h5>
            <p className=" transition duration-300 ease-in-out text-white font-semibold">
              little description about the content about the content
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="max-w-screen-xl mx-auto pt-14">
        <div className="flex items-center">
          <div className="swiper-service-custom-scrollbar"></div>
          <div className="swiper-free-button-prev text-black ml-6"></div>
          <div className="swiper-free-button-next text-white"></div>
        </div>
      </div>
    </>
  );
};

export default SliderFree;
