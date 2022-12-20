
import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import InfiniteScrollingHomepage from "../components/InfiniteScrollingHomepage";
import collageEvent from "../public/images/collage-events-res.jpg";

const CaseStudy = () => {
  return (
    <div className="max-w-full bg-primary">
      <div className="flex justify-center py-28">
        <div className="flex justify-center ">
          <div className="flex">
            <Image src={homepageImage} alt="details" width={747} />
          </div>
          <div className="flex flex-col justify-center max-w-xl">
            <div className="flex">
              <p className="text-white text-6xl font-semibold">
                11,000+ businesses have been where you are today.
              </p>
            </div>
            <div className="pt-12">
              <p className="text-white text-base">
                We have got dozens of stories to share, with a variety of
                companies across a range of sectors.
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
    </div>
  );
}

export default CaseStudy