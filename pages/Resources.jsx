import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Marquee from "../components/InfiniteScrolling";
import SliderFree from "../components/SliderFree";
import Link from "next/link";
import Image from "next/image";
import banner from '../public/images/banner-container-hero.webp';
import mobilePhone from '../public/images/mobile-phone.jpg';
import maternityImage from '../public/images/maternity-pay.png';

const ModalBlack = dynamic(() => import("../components/ModalBlack"), {
  ssr: false,
});

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

const Resources = () => {
  return (
    <>
      <Navbar />
      <div className="banner-container">
        <div className="relative">
          <Image src={banner} height={444} alt="banner image" />
        </div>
        <div className="absolute top-1/4 left-1/4 z-10 max-w-screen-xl mx-auto pt-24 px-4 md:px-0">
          <h2 className="text-6xl text-white font-bold pb-2">Free Resources</h2>
          <h3 className="text-xs font-bold uppercase text-white">
            articles, infographics, case studies, free downloads
          </h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto pt-24 pb-16">
        <form className="relative">
          <input
            type="text"
            id="floating_standard"
            className="block py-3 px-0 w-full text-4xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            placeholder=" "
          />
          <button className="absolute right-0 top-8 cursor-pointer text-black">
            <MagnifyingGlassIcon />
          </button>
          <label
            htmlFor="floating_standard"
            className="absolute text-4xl text-white dark:text-gray-400 duration-300 transform -translate-y-20 scale-140 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-50 peer-focus:-translate-y-10"
          >
            Enter your search...
          </label>
        </form>
      </div>
      <div className="max-w-screen-xl mx-auto pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col relative">
            <Link href="/BlogItem">
              <Image src={maternityImage} width={628} alt="maternity image" />
              <div className="absolute bg-black bottom-0 left-0 px-10 py-10">
                <h4 className="text-2xl text-white font-bold">
                  What is Maternity Pay?
                </h4>
              </div>
            </Link>
          </div>
          <div className="flex flex-col relative">
            <Link href="/BlogItem">
              <Image src={maternityImage} width={628} alt="maternity image" />
              <div className="absolute bg-black bottom-0 left-0 px-10 py-10">
                <h4 className="text-2xl text-white font-bold">
                  What is Maternity Pay?
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto pt-24 pb-16">
        <h3 className="text-4xl font-bold ">Featured FREE resources</h3>
        <div className="pt-12 pb-4"></div>
        <p className="text-base primary-color">
          Please feel{" "}
          <span className="font-bold text-red uppercase">free to download</span>{" "}
          and use these templates for your business on a wide range of HR to
          Health & Safety and Employment Law matters. Can't find what you're
          looking for? Get in touch with our advisors today.
        </p>
      </div>
      <div className="w-full">
        <div className="pb-12">
          <SliderFree />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pb-12">
        <h5 className="text-primary max-w-xl py-2">
          Contact us and{" "}
          <span className="text-sm font-bold text-red uppercase">
            we can help you
          </span>{" "}
          to discuss the perfect package for your business today.
        </h5>
        <div className="flex py-6">
          <ModalBlack />
        </div>
      </div>
    </>
  );
};

export default Resources;