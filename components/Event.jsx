import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import collageEvent from "../public/images/collage-events-res.jpg";

const Event = ({ details }) => {
  return (
    <div className="max-w-full bg-primary">
      <div className="flex justify-center py-28">
        <div className="flex flex-col justify-center max-w-xl">
          <div className="flex">
            <p className=" text-lg font-bold">{details.sutitleTop}</p>
          </div>
          <div className="flex">
            <p className="text-white text-6xl font-semibold">{details.title}</p>
          </div>
          <div className="flex pt-12">
            <p className="text-white">{details.description}</p>
          </div>
          <div className="flex">
            <div className="w-full md:w-11/12 pt-6 md:mb-0">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-namelll"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex">
            <h5 className="text-yellow text-base font-semibold pt-12">
              Or see all upcoming events &rarr;
            </h5>
          </div>
        </div>
        <div className="flex">
          <Image src={homepageImage} alt="details" width={747} />
        </div>
      </div>
    </div>
  );
};

export default Event;
