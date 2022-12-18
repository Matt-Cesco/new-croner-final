import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";

const LandingPageRecord = () => {
  return (
    <div className="bg-primary w-full py-28">
      <div className="max-w-screen-xl flex mx-auto">
        <div className="flex flex-col md:w-6/12">
          <Image src={homepageImage} alt="details" width={800} height={800} />
        </div>
        <div className="flex flex-col justify-center md:w-6/12 max-w-xl">
          <h5 className="text-base font-semibold pb-3 text-yellow">
            All Under One Umbrella
          </h5>
          <h1 className="text-6xl font-bold text-white">
            HR, Employment Law and Health & Safety services
          </h1>
          <div className="flex items-center">
            <h5 className="text-white text-base max-w-xl">Excellent</h5>
            <div className="">
              <Image
                src={trustpilotStars}
                alt="trust pilot"
                height={20}
                className="mx-4"
              />
            </div>
            <h5 className="text-white text-base max-w-xl py-6">
              1,655 reviews
            </h5>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-12">
            <div className="">
              <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                <span className="relative">Service & Pricing</span>
              </button>
            </div>
            <div className="">
              <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                <span className="relative">Get a Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageRecord;
