import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import collageEvent from "../public/images/collage-events-res.jpg";
import ArchiConcept from "../public/images/Dining_final.jpg";
import ArchiConceptTwo from "../public/images/Front-Seating_final.webp";

const EventTwo = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-2xl flex">
          <div className="flex flex-col justify-center max-w-sm">
            <div className="flex">
              <p className=" text-lg font-bold"></p>
            </div>
            <div className="flex">
              <p className="text-6xl font-bold">Find a Croner event near you</p>
            </div>
            <div className="flex pt-12">
              <p className="">
                Find an event near you for the latest and upcoming HR,
                employment law, health & safety and pay trend developments.
              </p>
            </div>
            <div className="flex">
              <div className="w-full pt-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-namelll"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex">
              <h5 className="text-red text-base font-semibold pt-12">
                Or see all upcoming events &rarr;
              </h5>
            </div>
          </div>
          <div className="flex max-w-3xl">
            <Image src={ArchiConceptTwo} alt="details" width={768} />
          </div>
      </div>
    </div>
  );
};

export default EventTwo;
