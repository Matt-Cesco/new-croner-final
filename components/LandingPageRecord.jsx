import Image from "next/image";


const LandingPageRecord = ({ details }) => {
  return (
    <div className="bg-primary w-full">
      <div className="max-w-screen-xl flex flex-col-reverse md:flex-row items-center px-6 py-24 md:py-32 mx-auto">
        <div className="flex flex-col mb-32 md:w-2/6">
          <h2 className="max-w-xl text-2xl md:text-4xl text-white md:textleft pt-6">
            {details.subtitleH2}
          </h2>
          <p className="max-w-sm text-white pt-6 md:pt-12">
            Award-Winning HR, Employment Law and Health & Safety Services
          </p>
          <div className="flex flex-col md:flex-row pt-12">
            <div className="">
              <button className="bg-red text-white font-bold py-4 px-10 cursor-pointer">
                {details.firstButton}
              </button>
            </div>
            <div className="px-0 md:px-6 pt-6 md:pt-0">
              <button className="bg-red text-white font-bold py-4 px-10 cursor-pointer">
                {details.secondButton}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-4/6">
          <Image
            src={details.image.url}
            alt={details.bigTitleH1}
            width={550}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPageRecord;