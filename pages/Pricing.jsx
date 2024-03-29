import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Marquee from "../components/InfiniteScrolling";
import Slider from "../components/Slider";
import Link from "next/link";
import Image from "next/image";
import banner from "../public/images/banner-container-hero.webp";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";
import ModalGetQuoteBlack from "../components/ModalGetQuoteBlack";
import ModalGetQuoteWhite from "../components/ModalGetQuoteWhite";
import triangles from "../public/images/image-landing-mitul.webp";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

const ModalBlack = dynamic(() => import("../components/ModalBlack"), {
  ssr: false,
});

const PricingSinglePage = () => {
  return (
    <>
      <Navbar />

      <div className="w-full relative bg-primary">
        <div className="ml-96 mx-auto ">
          <div className="py-28">
            <div className="flex flex-col justify-start">
              <div className="flex justify-start">
                <h1 className="text-6xl text-gray-100 font-extrabold z-20">
                  Pricing <span className="text-6xl font-thin">Packages</span>
                </h1>
              </div>
              <div className="flex items-center pt-12">
                <h5 className="text-white text-base">Excellent</h5>
                <div className="">
                  <Image
                    src={trustpilotStars}
                    alt="trust pilot"
                    height={20}
                    className="mx-4"
                  />
                </div>
                <h5 className="text-white text-base">1,655 reviews</h5>
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
      <div className="max-w-6xl mx-auto pt-36 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between bg-gray-100 shadow-2xl w-full p-6">
              <div className="">
                <div className="">
                  <h2 className="font-extrabold mb-2 text-2xl text-center pt-2 pb-1">
                    Croner Employment
                  </h2>
                  <h5 className="text-sm text-center">HR and Employment law</h5>
                  <div className="flex justify-center py-6">
                    <div className="">
                      <div className="text-sm text-gray-600">FROM</div>
                      <div className="text-6xl font-extrabold primary-color">
                        £6.89
                        <span className="text-sm font-normal text-gray-500">
                          /mo
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">*Per employee</div>
                    </div>
                  </div>
                  <div className="flex border-b pb-3">
                    <p className="text-xs text-gray-600">
                      *based on a company size of 250 employees
                    </p>
                  </div>
                  <ul className="py-3.5">
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Bespoke employment documentation
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Unlimited 24/7 expert HR advice
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Expert employment tribunal representation
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        24/7 wellbeing support for your people
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        BrightHR employee management software
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Regular updates on changes in employment law
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">Commercial legal helpline</span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        E-learning webinar training
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="pb-2.5">
                  <p className="text-xs">
                    Explore this package and get an{" "}
                    <span className="font-bold">Instant</span>{" "}
                    <span className="font-bold">Quote</span>
                  </p>
                </div>
                <div className="flex border border-red-500">
                  <ModalGetQuoteBlack />
                </div>
                <div className="flex pt-3">
                  <Link
                    href="/SubPricingPage"
                    className="btn-dark-red w-full text-center font-bold uppercase"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[-2rem]">
            <div className="flex flex-col justify-between bg-primary text-white shadow-2xl w-full p-6">
              <div className="">
                <div className="bg-red text-center text-sm font-bold uppercase py-2 m-[-1.5rem]">
                  most popular
                </div>
                <h2 className="font-extrabold mb-2 text-2xl text-center pt-14 pb-1">
                  Croner Complete
                </h2>
                <h5 className="text-sm text-center">
                  HR, Employment law and Health & safety
                </h5>
                <div className="flex justify-center py-6">
                  <div className="">
                    <div className="text-sm text-gray-400">FROM</div>
                    <div className="text-6xl font-extrabold">
                      £9.71
                      <span className="text-sm font-normal text-gray-400">
                        /mo
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">*Per employee</div>
                  </div>
                </div>
                <div className="flex  border-b pb-3">
                  <p className="text-xs text-gray-400">
                    *based on a company size of 250 employees
                  </p>
                </div>
                <ul className="py-3.5">
                  <li className="flex items-start text-base py-1.5">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className="px-1.5 font-bold">
                      <span className="uppercase">All in</span>{" "}
                      <span className="text-sm">Employment Services</span>
                    </span>
                  </li>
                  <li className="flex items-start text-base py-1.5">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className="px-1.5 font-bold">
                      <span className="uppercase">All in</span>{" "}
                      <span className="text-sm">Health & safety</span>
                    </span>
                  </li>
                  <li className="flex items-start text-sm py-1.5">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className="px-1.5">
                      Unlimited 24/7 expert Employment law advice
                    </span>
                  </li>
                  <li className="flex items-start text-sm py-1.5">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className="px-1.5">
                      Unlimited 24/7 expert HR advice
                    </span>
                  </li>
                  <li className="flex items-start text-sm py-1.5">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className="px-1.5">
                      Unlimited 24/7 expert Health & Safety advise
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t">
                <div className="pb-2.5">
                  <p className="text-xs">
                    Explore this package and get an{" "}
                    <span className="font-bold">Instant</span>{" "}
                    <span className="font-bold">Quote</span>
                  </p>
                </div>
                <div className="flex border border-red-500">
                  <ModalGetQuoteWhite />
                </div>
                <div className="flex pt-3">
                  <Link
                    href="/SubPricingPage"
                    className="btn-dark-red w-full text-center font-bold uppercase"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-between bg-gray-100 shadow-2xl w-full p-6">
              <div className="">
                <div className="">
                  <h2 className="font-extrabold mb-2 text-2xl text-center pt-2 pb-1">
                    Croner Health & Safety
                  </h2>
                  <h5 className="text-sm text-center">Health & Safety</h5>
                  <div className="flex justify-center py-6">
                    <div className="">
                      <div className="text-sm text-gray-600">FROM</div>
                      <div className="text-6xl font-extrabold primary-color">
                        £3.90
                        <span className="text-sm font-normal text-gray-500">
                          /mo
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">*Per employee</div>
                    </div>
                  </div>
                  <div className="flex border-b pb-3">
                    <p className="text-xs text-gray-600">
                      *based on a company size of 250 employees
                    </p>
                  </div>
                  <ul className="py-3.5">
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Health & safety review and confidential compliance
                        report
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Health & safety management system including policies &
                        handbooks
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Expert health & safety installation visit
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Annual health & safety audits
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Unlimited 24/7 expert health & safety advice
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Health & safety prosecution representation
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Crisis management and incident support
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        Online access to your documentation
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">Commercial legal helpline</span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        BrightSafe health & safety software
                      </span>
                    </li>
                    <li className="flex items-start text-sm py-1.5">
                      <div className="bg-green-500 rounded-xl text-white p-0.5">
                        <CheckIcon />
                      </div>
                      <span className="px-1.5">
                        E-learning webinar training
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-6 border-t">
                <div className="pb-2.5">
                  <p className="text-xs">
                    Explore this package and get an{" "}
                    <span className="font-bold">Instant</span>{" "}
                    <span className="font-bold">Quote</span>
                  </p>
                </div>
                <div className="flex border border-red-500">
                  <ModalGetQuoteBlack />
                </div>
                <div className="flex pt-3">
                  <Link
                    href="/SubPricingPage"
                    className="btn-dark-red w-full text-center font-bold uppercase"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="pt-28 pb-12">
          <div className="flex justify-between items-end">
            <div className="max-w-3xl">
              <h3 className="text-4xl font-extrabold">
                Our customers success stories
              </h3>
              <h5 className="pt-6">
                Explore how we help award-winning HR, Employment Law, and Health
                & Safety services to business owners and senior leaders.
              </h5>
            </div>
            <h5 className="text-yellow-600 text-sm font-bold max-w-sm">
              FEEFO EXCELLENT WIDGET
            </h5>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <Slider />
      </div>
      <div className="w-full bg-primary mt-28">
        <div className="max-w-6xl mx-auto py-12">
          <div className="flex justify-between items-end">
            <div className="py-3">
              <DynamicComponentWithNoSSR />
            </div>
            <div className="">
              <h6 className="text-xs uppercase pb-1 text-white">
                &bull; Book a <span className="font-bold">free</span> Call
              </h6>
              <h3 className="text-4xl text-white font-extrabold pb-3">
                Speak with an expert
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-28">
        <div className="pl-96 flex">
          <h3 className="text-6xl font-extrabold pb-2">
            Trusted by 11,000+ businesses
          </h3>
        </div>
        <div className="max-w-6xl mx-auto pt-12">
          <div className="max-w-sm">
            <div className="flex items-center">
              <h5 className="text-black text-base">Excellent</h5>
              <div className="">
                <Image
                  src={trustpilotStars}
                  alt="trust pilot"
                  height={20}
                  className="mx-4"
                />
              </div>
              <h5 className="text-black text-base">1,655 reviews</h5>
            </div>
            <h5 className="text-base pt-6">
              From gross misconduct and disciplinaries, to tribunal cases and
              redundancies — we ve handled it all. Our HR, health & safety, and
              pay & reward support has helped businesses through the toughest
              periods of their growth.
            </h5>
          </div>
          <div className="max-w-6xl pt-12">
            <h5 className="text-base">
              Get a{" "}
              <span className="text-sm font-bold text-red underline uppercase">
                Free Consultation
              </span>{" "}
              with our experts and discuss the perfect package for your business
              today.
            </h5>
          </div>
        </div>
        <div className="pt-16">
          <Marquee />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricingSinglePage;
