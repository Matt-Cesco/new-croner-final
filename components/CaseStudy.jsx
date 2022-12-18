
import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import InfiniteScrollingHomepage from "../components/InfiniteScrollingHomepage";

const CaseStudy = () => {
  return (
    <div className="max-w-full bg-primary">
      <div className="max-w-screen-xl flex mx-auto py-28 px-4 md:px-0">
        <div className="flex flex-col md:w-6/12">
          <Image src={homepageImage} alt="details" width={747} height={747} />
        </div>
        <div className="flex flex-col justify-center md:w-6/12">
          <div className="flex">
            <p className="text-white text-4xl font-bold">
              11,000+ businesses have been where you are today.
            </p>
          </div>
          <div className="pt-12">
            <p className="text-white text-base">
              We have got dozens of stories to share, with a variety of companies
              across a range of sectors.
            </p>
          </div>
          <div className="pt-6">
            <InfiniteScrollingHomepage />
          </div>
          <div className="flex">
            <h5 className="text-yellow text-base font-semibold pt-12">
              Read their stories &rarr;
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy