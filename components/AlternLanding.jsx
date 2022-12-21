import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import trustpilotStars from "../public/images/stars-5-trustpilot.svg";
import ArchiConcept from "../public/images/Dining_final.jpg";
import ArchiConceptTwo from "../public/images/Front-Seating_final.webp";
import ArchiConceptThree from "../public/images/Bar_final.jpg";
import umbrellaWallpaper from "../public/images/CrownDirect_Winter.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="banner-container">
          <div className="relative">
            <Image src={umbrellaWallpaper} alt="banner image" />
          </div>
          <div className="absolute top-1/4 left-96 z-10 max-w-screen-xl mx-auto px-4 md:px-0">
            <div className="py-28">
              <div className="flex justify-start">
                <div className="flex flex-col justify-start max-w-xl">
                  <h5 className="text-base font-bold pb-3 text-yellow">
                    All Under One Umbrella
                  </h5>
                  <h1 className="text-6xl text-white font-extrabold primary-color">
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
                        <span className="relative">
                          Get a Free Consultation
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
