
import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import InfiniteScrollingHomepage from "../components/InfiniteScrollingHomepage";
import collageEvent from "../public/images/collage-events-res.jpg";
import ArchiConcept from "../public/images/Dining_final.jpg";

const CaseStudyTwo = () => {
  return (
    <div className="max-w-full">
      <div className="flex justify-start py-12">
        <div className="flex justify-center ">
          <div className="flex">
            <Image src={ArchiConcept} alt="details" width={1013} />
          </div>
          <div className="flex flex-col justify-center max-w-xl">
            <div className="flex">
              <p className="text-6xl font-extrabold">
                11,000+ businesses have been where you are today.
              </p>
            </div>
            <div className="pt-12">
              <p className="text-base">
                We have got dozens of stories to share, with a variety of
                companies across a range of sectors.
              </p>
            </div>
            <div className="pt-6">
              <InfiniteScrollingHomepage />
            </div>
            <div className="flex">
              <h5 className="text-red text-base font-semibold pt-12">
                Read their stories &rarr;
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyTwo