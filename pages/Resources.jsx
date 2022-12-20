import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Marquee from "../components/InfiniteScrolling";
import SliderFree from "../components/SliderFree";
import Link from "next/link";
import Image from "next/image";
import banner from "../public/images/banner-container-hero.webp";
import mobilePhone from "../public/images/mobile-phone.jpg";
import maternityImage from "../public/images/maternity-pay.png";
import AccordionResources from "../components/AccordionResources";
import Slider from "../components/Slider";

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
        <div className="banner-container flex flex-col max-w-screen-xl mx-auto">
          <div className="absolute top-1/4 z-10">
            <h2 className="text-6xl text-white font-bold pb-2">
              Free Resources
            </h2>
            <h3 className="text-xs font-bold uppercase text-white">
              Articles, calculators and blog posts
            </h3>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto pt-28 pb-28">
        <form className="relative">
          <input
            type="text"
            id="floating_standard"
            className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-black focus:outline-none focus:ring-0 peer"
            placeholder=" "
          />
          <button className="absolute right-0 top-5 cursor-pointer text-black">
            <MagnifyingGlassIcon />
          </button>
          <label
            htmlFor="floating_standard"
            className="absolute text-xl text-white dark:text-gray-600 duration-300 transform -translate-y-10 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
          >
            Enter you reasearch keyword here...
          </label>
        </form>
      </div>
      <div className="max-w-screen-xl mx-auto pb-20">
        <div className="flex justify-between items-end">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-semibold ">Featured FREE Downloads</h3>
            <div className="pt-6">
              <p class="text-base">
                Explore our free download resources to support your business
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
            View all FREE downloads &rarr;
          </h5>
        </div>
      </div>
      <div className="w-full">
        <div className="">
          <SliderFree />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-28 pb-20">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h3 className="text-4xl font-semibold">FREE Calculators</h3>
              <h5 className="pt-6">
                Explore how we help award-winning HR, Employment Law, and Health
                & Safety services to business owners and senior leaders.
              </h5>
            </div>
            <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
              See all blog posts &rarr;
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto">
        <Slider />
      </div>
      <div className="max-w-screen-lg mx-auto pt-28 pb-20">
        <div className="">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h3 className="text-4xl font-semibold">Latest blog posts</h3>
              <h5 className="pt-6">
                Explore how we help award-winning HR, Employment Law, and Health
                & Safety services to business owners and senior leaders.
              </h5>
            </div>
            <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
              See all blog posts &rarr;
            </h5>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={512}
                height={341}
                alt="text image"
              />
              <div className="absolute bottom-0 py-6 px-12">
                <h5 className="text-xl font-semibold text-white pb-3">
                  Statutory Maternity Pay & Leave 
                </h5>
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={512}
                height={341}
                alt="text image"
              />
              <div className="absolute bottom-0 py-6 px-12">
                <h5 className="text-xl font-semibold text-white pb-3">
                  Statutory Maternity Pay & Leave 
                </h5>
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={512}
                height={341}
                alt="text image"
              />
              <div className="absolute bottom-0 py-6 px-12">
                <h5 className="text-xl font-semibold text-white pb-3">
                  Statutory Maternity Pay & Leave 
                </h5>
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={512}
                height={341}
                alt="text image"
              />
              <div className="absolute bottom-0 py-6 px-12">
                <h5 className="text-xl font-semibold text-white pb-3">
                  Statutory Maternity Pay & Leave 
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
