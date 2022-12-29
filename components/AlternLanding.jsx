import Image from "next/image";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";
import ArchiConcept from "../public/images/Front-Seating_final.webp";
import triangles from "../public/images/image-landing-mitul.webp";

const LandingPage = () => {
  return (
    <>
      <div className="w-full bg-primary flex justify-end">
        <div className="max-w-screen-2xl flex">
          <div className="flex flex-col max-w-3xl py-28">
            <h5 className="text-base font-bold pb-3 text-yellow">
              All Under One Umbrella
            </h5>
            <h1 className="text-6xl font-extrabold text-white">
              HR, Employment Law and Health & Safety services
            </h1>
            <div className="flex items-center">
              <h5 className="text-base text-white max-w-xl">Excellent</h5>
              <div className="">
                <Image
                  src={trustpilotStars}
                  alt="trust pilot"
                  height={20}
                  className="mx-4"
                />
              </div>
              <h5 className="text-base text-white max-w-xl py-6">
                1,655 reviews
              </h5>
            </div>
            <div className="flex flex-col md:flex-row justify-start pt-12">
              <div className="">
                <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                  <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                  <span className="relative">Service & Pricing</span>
                </button>
              </div>
              <div className="ml-6">
                <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                  <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                  <span className="relative">Get a Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-w-3xl">
            <Image src={triangles} alt="details" width={768} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
