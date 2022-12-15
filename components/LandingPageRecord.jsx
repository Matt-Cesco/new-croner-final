import Image from "next/image";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";

const LandingPageRecord = ({ details }) => {
  return (
    <div className="bg-primary w-full">
      <div className="max-w-screen-2xl flex mx-auto">
        <div className="flex flex-col md:w-7/12">
          <Image
            src={details.image.url}
            alt={details.bigTitleH1}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col justify-center  md:w-5/12 max-w-xl">
          <h5 className="text-base font-semibold pb-3 text-yellow">
            All Under One Umbrella
          </h5>
          <h1 className="max-w-xl text-4xl text-yellow font-bold md:text-5xl md:textleft hidden pt-24">
            {details.bigTitleH1}
          </h1>
          <h2 className="text-6xl font-bold text-white">
            {details.subtitleH2}
          </h2>
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
                <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-200 left-0 top-0 cursor-pointer"></span>
                <span className="relative">{details.firstButton}</span>
              </button>
            </div>
            <div className="">
              <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-200 left-0 top-0 cursor-pointer"></span>
                <span className="relative">{details.secondButton}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageRecord;
