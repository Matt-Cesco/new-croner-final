import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Marquee from "../components/InfiniteScrolling";
import Slider from "../components/Slider";
import Link from "next/link";
import Image from "next/image";
import banner from "../public/images/banner-container-hero.webp";
import mobilePhone from "../public/images/mobile-phone.jpg";

const ModalBlack = dynamic(() => import("../components/ModalBlack"), {
  ssr: false,
});

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

const PricingSinglePage = () => {
  return (
    <>
      <Navbar />
      <div className="banner-container">
        <div className="relative">
          <Image src={banner} height={444} alt="banner image" />
        </div>
        <div className="absolute top-1/4 left-1/4 z-10 max-w-screen-xl mx-auto pt-24 px-4 md:px-0">
          <h2 className="text-6xl text-white font-bold pb-2">
            Croner Complete
          </h2>
          <h3 className="text-xs font-bold uppercase text-white">
            HR, Employment law and health & safety support
          </h3>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto pt-28">
        <h2 className="text-4xl font-bold">
          Text for generating urgency Businesses have to fulfill a number of
          complex obligations and duties in relation to employment law and
          safety. The Croner Complete package will solve your problems
        </h2>
        <h5 className="text-base pt-8">
          Text for generating urgency Businesses have to fulfill a number of
          complex obligations and duties in relation to employment law and
          safety. Text for generating urgency Businesses have to fulfill a
          number of complex obligations and duties in relation. Feel free to
          call us on <span className="text-red font-bold">01455 858 132</span>{" "}
          to find out more or get any questions you might have answered by our
          team.
        </h5>
      </div>

      <div className="max-w-screen-lg mx-auto pt-16">
        <h3 className="text-4xl font-semibold">What's Includes</h3>
      </div>
      <div className="max-w-screen-xl mx-auto pt-16 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <h5 className="font-semibold text-xl pt-2 pb-3 px-1.5">
              Employment Law
            </h5>
            <ul className="">
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Unlimited 24/7 expert Employment advice
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Bespoke employment documentation</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Expert employment tribunal representation
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  BrightHR employee management software
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Regular updates on changes in employment law
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Commercial legal helpline</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">E-learning webinar training</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold text-xl pt-2 pb-3 px-1.5">HR Law</h5>
            <ul className="">
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Unlimited 24/7 expert HR advice</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Bespoke employment documentation</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Expert employment tribunal representation
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  24/7 wellbeing support for your people
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  BrightHR employee management software
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Regular updates on changes in HR law
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Commercial legal helpline</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">E-learning webinar training</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold text-xl pt-2 pb-3 px-1.5">
              Health & Safety Law
            </h5>
            <ul className="">
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Unlimited 24/7 expert Health & Safety advice
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Bespoke Helath & safety documentation
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Expert Health & Safety tribunal representation
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  24/7 wellbeing support for your people
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">
                  Regular updates on changes in Helath & safety law
                </span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">Commercial legal helpline</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
              <li className="flex justify-between items-start text-base border-b py-3">
                <span className="px-1.5">E-learning webinar training</span>
                <div className="my-auto text-green-500 border rounded-xl p-0.5">
                  <CheckIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="text-4xl font-semibold">
            Everything under your control
          </h3>
        </div>
        <div className="max-w-screen-xl mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <Image src={mobilePhone} alt="mobile phone" width={628} />
            </div>
            <div className="flex flex-col justify-center px-12">
              <h5 class="font-semibold mb-2 text-2xl  pt-3 pb-3">
                Employee management software
              </h5>
              <p className="text-base pb-3">
                Need to know who is in work today, even if you are not actually
                in yourself? Just fire up the free BrightHR app and instantly
                see who is off sick, who is running late, and whether your staff
                holiday planner's up to date.
              </p>
              <ul className="text-base py-3">
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">
                    Online Clock in GPS based manager manager
                  </span>
                </li>
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">
                    Rota shifts online manager manager manager
                  </span>
                </li>
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">Online Clock in GPS based</span>
                </li>
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">Rota shifts online manager</span>
                </li>
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">
                    Online Clock in GPS based manager
                  </span>
                </li>
                <li className="flex items-start py-1.5">
                  <div className="border rounded-xl text-green-500 p-0.5">
                    <CheckIcon />
                  </div>
                  <span className="px-1.5">Rota shifts online manager</span>
                </li>
              </ul>
              <div className="py-4">
                <DynamicComponentWithNoSSR />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-28">
        <div className="max-w-screen-lg mx-auto">
          <h3 className="text-4xl font-semibold">
            We'll tailor the perfect service for your business
          </h3>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col">
            <p className="pt-16 text-base">
              Enter your number of employees and we'll tailor the perfect
              service for your business. Feel free to call us on{" "}
              <span className="text-red font-bold">01455 858 132</span> to find
              out more or get any questions you might have answered by our team.
              We are happy to help you to succeed
            </p>
          </div>
        </div>
        <div className="max-w-screen-lg flex justify-center mx-auto pt-16">
          <div className="md:w-2/4">
            <div className="flex flex-col">
              <div className="">
                <div className="text-6xl font-bold text-center primary-color pb-6">
                  £-.--
                  <span className="text-sm font-normal text-gray-400">
                    /mo
                  </span>
                  <div className="text-sm text-gray-500">*Per employee</div>
                </div>
                <div className="py-3">
                  <p className="text-base font-bold primary-color">
                    Please enter your Employees number
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Enter here your employees number
                  </label>
                </div>
                <div className="flex justify-center items-center py-3.5">
                  <button className="bg-primary uppercase text-white text-center font-bold py-3 mt-1.5 px-10 w-full cursor-pointer">
                    Calculate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="pt-12 pb-4">
            <p className="text-sm">
              *The service pricing is based on our entry level product over a 5
              year term. Dependent on the industry or your business
              circumstances and the service term you require, the fee may vary
              above or below the example fee.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-dark mt-28">
        <div className="max-w-screen-xl mx-auto py-12">
          <div className="flex justify-between items-end">
            <div className="py-3">
              <ModalBlack />
            </div>
            <div className="">
              <h6 className="text-xs uppercase pb-1 text-white">
                &bull; Book a <span className="font-bold">free</span> Call
              </h6>
              <h3 className="text-4xl text-white font-semibold pb-3">
                Speak with an expert
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen-lg mx-auto pt-28 pb-20">
        <h3 class="text-4xl font-semibold ">Our costumers success stories</h3>
        <h5 className="pt-6 max-w-xl">
          Explore how we help award-winning HR, Employment Law, and Health &
          Safety services to business owners and senior leaders.
        </h5>
      </div>
      <div className="w-full">
        <div className="pb-12">
          <Slider />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pb-12">
        <h5 className="max-w-xl pt-6 pb-4">
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

export default PricingSinglePage;
