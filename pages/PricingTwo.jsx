import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import KFClogo from '../public/images/kfc-logo.png'
import Marquee from '../components/InfiniteScrolling';
import Slider from '../components/Slider';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Modal'), {
  ssr: false,
})


const PricingTwo = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto pt-24 px-4 md:px-0">
        <div className="text-center">
          <h2 className="primary-color text-5xl font-bold pb-2 mb-4">Choose the right service for you</h2>
          <h5 className="text-gray-500 text-base">Enter your number of employees* and select the most suitable package below.</h5>
          <h5 className="text-gray-500 text-base">Alternatively, feel free to call us on <span className="text-lightblue font-bold">01455 858 132</span> to find out more.</h5>
        </div>
        <div className="flex justify-center pt-6">
          <div className="flex flex-col max-w-xs">
            <div class="relative z-0">
              <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label for="floating_standard" class="absolute text-base color-primary dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter here <span className='text-red'>your employees </span>number</label>
            </div>
            <div className="flex justify-center py-3.5">
              <button className='bg-lightblue uppercase text-sm text-black font-bold py-3 px-6 rounded-xl cursor-pointer'>
                Calculate <span className='pl-2 font-bold'>&#x2192;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          <div className="flex justify-center">
            <div className="flex flex-col justify-between bg-white rounded-2xl shadow-xl w-full p-6">
              <div className="">
                <div className="pb-3 border-b">
                  <h2 className="font-bold mb-2 text-2xl text-center pt-2 pb-1">Croner Employment Services</h2>
                  <h5 className="primary-color text-sm text-center">HR and employment law support</h5>
                  <div className="flex justify-center py-6">
                    <div className="">
                      <div className="text-sm text-gray-500">FROM</div>
                      <div className="text-6xl font-bold">£14.36<span className='text-sm font-normal text-gray-500'>/mo</span></div>
                      <div className="text-sm text-gray-500">*Per employee</div>
                    </div>
                  </div>
                </div>
                <ul className="py-3">
                  <li className="text-md font-bold pt-1 pb-2">What includes</li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Bespoke employment documentation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Unlimited 24/7 expert HR advice</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Expert employment tribunal representation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>24/7 wellbeing support for your people</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>BrightHR employee management software</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Regular updates on changes in employment law</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Commercial legal helpline</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>E-learning webinar training</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="pt-6 border-t">
                  <div className="">
                    <div className="text-sm text-gray-500">As litte as</div>
                    <div className="text-5xl text-gray-700 font-bold">£14.36<span className='text-sm font-normal text-gray-500'>/mo</span></div>
                    <div className="text-sm text-gray-500">*Per employee</div>
                  </div>
                  <div className="flex justify-center py-6">
                    <DynamicComponentWithNoSSR />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-red rounded-t-2xl">
              <h5 className='flex flex-col text-white text-sm uppercase font-bold text-center py-2'>most popular</h5>
            </div>
            <div className="bg-primary text-white rounded-b-2xl shadow-xl w-full">
              <div className="p-6">
                <div className="pb-3 border-b">
                <h2 className="font-bold mb-2 text-2xl text-center pt-2 pb-1">Croner Complete</h2>
                  <h5 className="text-sm text-center">HR, employment law and health & safety support</h5>
                  <div className="flex justify-center py-6">
                    <div className="">
                      <div className="text-sm text-gray-400">FROM</div>
                      <div className="text-6xl font-bold">£21.95<span className='text-sm font-normal text-gray-400'>/mo</span></div>
                      <div className="text-sm text-gray-400">*Per employee</div>
                    </div>
                  </div>
                </div>
                <ul className="py-3">
                  <li className="text-md font-bold pt-1 pb-2">What includes</li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Bespoke employment documentation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Unlimited 24/7 expert HR advice</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Expert employment tribunal representation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>24/7 wellbeing support for your people</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>BrightHR employee management software</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Regular updates on changes in employment law</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety review and confidential compliance report</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety management system including policies & handbooks</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety management system including policies & handbooks</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety management system including policies & handbooks</span>
                  </li>
                </ul>
                <div className="pt-6 border-t">
                  <div className="">
                    <div className="text-sm text-gray-400">As litte as</div>
                    <div className="text-5xl font-bold">£21.95<span className='text-sm font-normal text-gray-400'>/mo</span></div>
                    <div className="text-sm text-gray-400">*Per employee</div>
                  </div>
                  <div className="flex justify-center py-6">
                    <DynamicComponentWithNoSSR />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-between bg-white rounded-2xl shadow-xl w-full p-6">
              <div className="">
                <div className="pb-3 border-b">
                  <h2 className="font-bold mb-2 text-2xl text-center pt-2 pb-1">Croner Health & Safety</h2>
                  <h5 className="primary-color text-sm text-center">Health & safety support</h5>
                  <div className="flex justify-center py-6">
                    <div className="">
                      <div className="text-sm text-gray-500">FROM</div>
                      <div className="text-6xl font-bold">£10.79<span className='text-sm font-normal text-gray-500'>/mo</span></div>
                      <div className="text-sm text-gray-500">*Per employee</div>
                    </div>
                  </div>
                </div>
                <ul className="py-3">
                  <li className="text-md font-bold pt-1 pb-2">What includes</li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety review and confidential compliance report</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety management system including policies & handbooks</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Expert health & safety installation visit</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Annual health & safety audits</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Unlimited 24/7 expert health & safety advice</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Health & safety prosecution representation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Crisis management and incident support</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Online access to your documentation</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>Commercial legal helpline</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>BrightSafe health & safety software</span>
                  </li>
                  <li className="flex items-start text-sm py-2">
                    <div className="bg-green-500 rounded-xl text-white p-0.5">
                      <CheckIcon />
                    </div>
                    <span className='px-2'>E-learning webinar training</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="pt-6 border-t">
                  <div className="">
                    <div className="text-sm text-gray-500">As litte as</div>
                    <div className="text-5xl text-gray-700 font-bold">£10.79<span className='text-sm font-normal text-gray-500'>/mo</span></div>
                    <div className="text-sm text-gray-500">*Per employee</div>
                  </div>
                  <div className="flex justify-center py-6">
                    <DynamicComponentWithNoSSR />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-300">
        <div className="max-w-screen-xl mx-auto">
          <div className="py-16 my-8 rounded-2xl">
            <h3 className="font-bold mb-2 text-4xl primary-color uppercase py-2">Trusted by 11,000+ businesses</h3>
            <h5 className="text-green-600 max-w-xl py-2">TRUSTPILOT EXCELLENT WIDGET</h5>
            <h5 className='text-primary max-w-xl py-2'>From gross misconduct and disciplinaries, to tribunal cases and redundancies — we’ve handled it all. Our HR, health & safety, and pay & reward support has helped businesses through the toughest periods of their growth.</h5>
            <h5 className="text-primary max-w-xl py-2">Get a <span className='text-sm font-bold text-red uppercase'>Free Consultation</span> and discuss the perfect package for your business today.</h5>
            <div className="py-12">    
              <Marquee />
            </div>
            <div className="flex justify-center py-6">
              <DynamicComponentWithNoSSR />
            </div>
            
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-16 my-8">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h3 className="font-bold text-4xl primary-color uppercase py-2">Customers stories</h3>
              <h5 className='py-2'>Explore how we help award-winning HR, Employment Law, and Health & Safety services to business owners and senior leaders.</h5>
            </div>
            <h5 className="text-yellow-600 max-w-xl py-2">FEEFO EXCELLENT</h5>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="pb-12">    
            <Slider />
          </div>
      </div>
      <div className='max-w-screen-xl mx-auto pb-12'>
        <h5 className="text-primary max-w-xl py-2">Contact us and <span className='text-sm font-bold text-red uppercase'>we can help you</span> to discuss the perfect package for your business today.</h5>
        <div className="flex py-6">
          <DynamicComponentWithNoSSR />
        </div>
      </div>
          
    <Footer />
    </>
  )
}

export default PricingTwo