import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";

const Event = ({ details }) => {
  return (
    <div className="max-w-full bg-primary">
      <div className="max-w-screen-xl flex mx-auto py-24 px-4 md:px-0">
        <div className="flex flex-col justify-center md:w-5/12">
          <div className="flex">
            <p className="text-white text-lg font-bold">{details.sutitleTop}</p>
          </div>
          <div className="flex">
            <p className="text-white text-4xl font-bold">{details.title}</p>
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
            <h5 className="text-yellow text-sm font-bold pt-12">
              Or see all upcoming events &rarr;
            </h5>
          </div>
        </div>
        <div className="flex flex-col md:w-7/12">
          <Image src={homepageImage} alt="details" width={747} height={747} />
        </div>
      </div>
    </div>
  );
};

export default Event;
