import Image from "next/image";
import SliderServices from "../components/SliderServices";

const SupportBusinessRecord = () => {
  return (
    <div className="w-full py-28">
      <div className="max-w-6xl mx-auto pb-12">
        <div className="flex justify-between items-end">
          <div className="">
            <h3 className="text-4xl font-bold ">
              How we support your business
            </h3>
            <div className="pt-6">
              <p className="text-base">
                Explore how our services can support you managinging your
                business
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
            View all Services &rarr;
          </h5>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto">
          <SliderServices />
        </div>
      </div>
    </div>
  );
};

export default SupportBusinessRecord;
