import Image from "next/image";
import SliderFree from "./SliderFree";

const SectionFreeRes = () => {
  return (
    <div className="w-full py-28">
      <div className="max-w-screen-xl mx-auto pb-20">
        <div className="flex justify-between items-end">
          <div className="max-w-2xl">
            <h3 className="text-4xl font-extrabold ">
              Free resources for your business
            </h3>
            <div className="pt-6">
              <p class="text-base">
                Explore our free content to help you managing your business
              </p>
            </div>
          </div>
          <h5 className="underline underline-offset-4 hover:text-red text-base font-semibold max-w-xl">
            View all FREE resources &rarr;
          </h5>
        </div>
      </div>
      <div className="w-full">
        <div className="">
          <SliderFree />
        </div>
      </div>
    </div>
  );
}

export default SectionFreeRes