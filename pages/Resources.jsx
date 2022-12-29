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
import { FaLocationArrow, FaClock } from "react-icons/fa";
import triangles from "../public/images/image-landing-mitul.webp";

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
      <div className="w-full relative bg-primary">
        <div className="ml-96 mx-auto ">
          <div className="py-28">
            <div className="flex flex-col justify-start">
              <div className="flex justify-start">
                <h1 className="text-6xl text-gray-100 font-extrabold z-20">
                  Free{" "}
                  <span className="italic text-6xl text-red font-thin">
                    Resources
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-96 flex justify-center z-10">
          <div className="max-w-sm">
            <Image src={triangles} alt="details" width={384} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-28">
        <div className="max-w-3xl">
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
              className="absolute text-base text-white dark:text-gray-600 duration-300 transform -translate-y-10 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
            >
              Enter you reasearch keyword here...
            </label>
          </form>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pb-12">
        <div className="flex justify-between items-end">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-extrabold">Featured FREE Downloads</h3>
            <div className="pt-6">
              <p class="text-base">
                Please feel free to download and use these templates for your
                business on a wide range of HR to Health & Safety and Employment
                Law matters. Can't find what you're looking for? Get in touch
                with our advisors today.
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
            View all FREE downloads &rarr;
          </h5>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <SliderFree />
      </div>
      <div className="max-w-6xl mx-auto pt-28 pb-12">
        <div className="flex justify-between items-end">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-extrabold">FREE Calculators</h3>
            <div className="pt-6">
              <p class="text-base">
                Use our free online calculators to understand your obligations
                when it comes to maternity and redundancy pay or holiday leave
                entitlements for your employees. Alternatively get in touch
                today for free advice.
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
            View all FREE calculators &rarr;
          </h5>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <Slider />
      </div>
      <div className="max-w-6xl mx-auto pt-28 pb-12">
        <div className="flex justify-between items-end">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-extrabold">Latest Blog posts</h3>
            <div className="pt-6">
              <p class="text-base">
                For all the latest industry-leading news and advice from the
                world of HR, Health & Safety, and Employment Law, discover
                Croner blogs below for expert insights.
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-sm">
            View all blog posts &rarr;
          </h5>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={568}
                alt="text image"
              />
              <div className="pt-3 pb-12">
                <h5 className="text-xl font-semibold py-3">
                  Statutory Maternity Pay & Leave
                </h5>
                <p className="text-sm">
                  Maternity pay is offered to employees to help them financially
                  as they raise their new baby.
                </p>
                <h5 className="underline underline-offset-2 text-red-600 text-base font-semibold pt-3">
                  Read this article &rarr;
                </h5>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={568}
                alt="text image"
              />
              <div className="pt-3 pb-12">
                <h5 className="text-xl font-semibold py-3">
                  Sick Leave Entitlement in the UK
                </h5>
                <p className="text-base">
                  Maternity pay is offered to employees to help them financially
                  as they raise their new baby.
                </p>
                <h5 className="underline underline-offset-2 text-red-600 text-base font-semibold pt-3">
                  Read this article &rarr;
                </h5>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={568}
                alt="text image"
              />
              <div className="pt-3 pb-12">
                <h5 className="text-lg font-semibold py-3">
                  Statutory Maternity Pay & Leave 
                </h5>
                <p className="text-sm">
                  Maternity pay is offered to employees to help them financially
                  as they raise their new baby.
                </p>
                <h5 className="underline underline-offset-2 text-red-600 text-base font-semibold pt-3">
                  Read more &rarr;
                </h5>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden">
            <Link href="/BlogPost">
              <Image
                src={maternityImage}
                className="transition hover:scale-110 duration-300"
                width={568}
                alt="text image"
              />
              <div className="pt-3 pb-12">
                <h5 className="text-xl font-semibold py-3">
                  Manchester Business Event
                </h5>
                <div className="flex items-center pb-1">
                  <FaLocationArrow />
                  <p className="text-base px-2">
                    AC Hotel Manchester Salford Quays
                  </p>
                </div>
                <div className="flex items-center pb-3">
                  <FaClock />
                  <p className="text-base px-2">10:30 - 13:00</p>
                </div>
                <h5 className="underline underline-offset-2 text-red-600 text-base font-semibold pt-3">
                  Learn Event details &rarr;
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
