import Image from "next/image";
import homepageImage from "../public/images/homepage-image-1000.webp";
import ArchiConcept from "../public/images/Dining_final.jpg";
import ArchiConceptThree from "../public/images/Bar_final.jpg";
import triangles from "../public/images/image-landing-mitul.webp";

const ContactForm = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-2xl w-full flex justify-center pb-28 pt-12">
        <div className="flex flex-col w-full max-w-3xl">
          <div className="w-full">
            <h3 className="text-4xl font-bold ">Speak to an Expert</h3>
            <div className="pt-12">
              <p className="text-base">
                Explore how our services can support you managing your business
              </p>
            </div>
          </div>
          <form className="flex flex-col justify-center max-w-3xl pt-12">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Surname
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Job title
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Telephone
                  </label>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    E-mail
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <textarea
                id="floating_textarea"
                rows="4"
                className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="floating_textarea"
                className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Message
              </label>
            </div>
            <div className="flex justify-center pt-12">
              <button className="relative bg-red text-white px-14 py-4 font-semibold group">
                <span className="absolute w-0 h-full bg-red-800 group-hover:w-full transition-all ease-out duration-300 left-0 top-0 cursor-pointer"></span>
                <span className="relative">Send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex max-w-sm">
          <Image src={triangles} alt="details" width={384} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
