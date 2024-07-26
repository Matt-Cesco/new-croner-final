import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const ModalGetInstantQuoteBlack = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="w-full text-center font-bold uppercase py-4 px-8 border border-red-500 text-black cursor-pointer">
        get instant quote
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <div className="w-full p-6">
          <div className="max-w-screen-xl mx-auto">
            <h5 class="font-bold text-xl uppercase">
              Get an Instant quote
            </h5>
          </div>
          <div className="max-w-screen-xl mx-auto pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col w-3/4">
                <p className="py-3 text-base">
                  Enter your number of employees and we'll tailor the perfect
                  service for your business.
                </p>
                <p className="py-3 text-base">
                  Feel free to call us on{" "}
                  <span className="text-red font-bold">01455 858 132</span> to
                  find out more or get any questions you might have answered by
                  our team.
                </p>
                <p className="py-3 text-base">
                  We are happy to help you to succeed
                </p>
              </div>
              <div className="flex flex-col">
                <div className="w-3/4">
                  <div className="">
                    <div className="text-6xl font-bold primary-color">
                      £-.--
                      <span className="text-sm font-normal text-gray-400">
                        /mo
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">*Per employee</div>
                  </div>
                  <div className="py-3">
                    <p className="text-base font-bold primary-color">
                      Please enter your Employees number
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      id="floating_standard"
                      className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-base text-white dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Enter here your employees number
                    </label>
                  </div>
                  <div className="flex justify-center items-center py-3.5">
                    <button className="bg-primary uppercase text-white text-center font-bold py-3 mt-1.5 px-10 w-full cursor-pointer">
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <p className="text-base">
              *The service pricing is based on our entry level product over a 5
              year term. Dependent on the industry or your business
              circumstances and the service term you require, the fee may vary
              above or below the example fee.
            </p>
          </div>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default ModalGetInstantQuoteBlack;
