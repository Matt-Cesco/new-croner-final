import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckIcon } from '@radix-ui/react-icons';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Modal'), {
  ssr: false,
})


const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto pt-24 px-4 md:px-0">
      <div className="">
        <p className="text-red text-lg font-bold">pricing</p>
      </div>
      <div className="">
        <p className="text-lightblue text-4xl font-bold pb-2 mb-4">Choose the right service for you</p>
      </div>
      <div className="pt-12">
        <p className="primary-color max-w-3xl block text-xl mb-2">
          <span className='text-red'>Enter your number of employees </span>
            and select the most suitable package below and we will tailor the perfect service for your business. 
            Alternatively, feel free to call us on <span className='text-lightblue'>01455 858 132</span> to find out more or get any questions you might have answered by our team.
        </p>        
        <div className="flex">
          <div className='flex flex-col py-3'>
              <label className='text-md' for="first">How many employees do you have?</label>
              <input className='border' type="number" id="employee-number" name="employee" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      <div className="flex justify-center ">
          <div className="bg-white rounded-2xl shadow-xl w-full">
            <div className="">
            </div>
            <div className="bg-fuchsia-900 p-6 text-white">
                <div className="pb-3 border-b">
                  <div className="border-b pb-3">
                    <h2 className="font-bold mb-2 text-2xl py-2">Croner Complete</h2>
                    <p className="text-sm py-3">HR, employment law and health & safety support</p>
                  </div>
                  <div className="flex justify-between items-end py-6">
                    <div className="">
                      <div className="text-sm">FROM</div>
                      <div className="text-xl font-bold">£22.73</div>
                    </div>
                    <div className="">
                      <div className="text-xs">Per employee</div>
                      <div className="text-xs">Per month</div>
                    </div>
                    <div className="">
                      <button className="btn-primary-tl">SELECT</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="p-6">
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
              </ul>
              <div className="py-6 border-t">
              <div className="flex justify-around items-center">
                <div className="">
                    <div className="text-xs text-center text-gray-500">As little as</div>
                    <div className="text-5xl text-center font-bold py-3">£22.73</div>
                    <div className="text-xs text-center text-gray-500">*Per employee, Per month</div>
                  </div>
                  
                </div>
                <div className="flex justify-center py-3">
                  <button className="btn-primary-tl flex justify-center w-full">
                    Select Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-white rounded-2xl shadow-xl w-full">
            <div className="">
            </div>
            <div className="bg-fuchsia-900 p-6 text-white">
                <div className="pb-3 border-b">
                  <div className="border-b pb-3">
                    <h2 className="font-bold mb-2 text-2xl py-2">Croner Employment Services</h2>
                    <p className="text-sm py-3">HR and employment law support</p>
                  </div>
                  <div className="flex justify-between items-end py-6">
                    <div className="">
                      <div className="text-sm">FROM</div>
                      <div className="text-xl font-bold">£14.81</div>
                    </div>
                    <div className="">
                      <div className="text-xs">Per employee</div>
                      <div className="text-xs">Per month</div>
                    </div>
                    <div className="">
                      <button className="btn-primary-tl">SELECT</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="p-6">
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
              </ul>
              <div className="py-6 border-t">
              <div className="flex justify-around items-center">
                <div className="">
                    <div className="text-xs text-center text-gray-500">As little as</div>
                    <div className="text-5xl text-center font-bold py-3">£14.81</div>
                    <div className="text-xs text-center text-gray-500">*Per employee, Per month</div>
                  </div>
                  
                </div>
                <div className="flex justify-center py-3">
                  <button className="btn-primary-tl flex justify-center w-full">
                    Select Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-white rounded-2xl shadow-xl w-full">
            <div className="">
            </div>
            <div className="bg-fuchsia-900 p-6 text-white">
                <div className="pb-3 border-b">
                  <div className="border-b pb-3">
                    <h2 className="font-bold mb-2 text-2xl py-2">Croner Health & Safety</h2>
                    <p className="text-sm py-3">Health & safety support</p>
                  </div>
                  <div className="flex justify-between items-end py-6">
                    <div className="">
                      <div className="text-sm">FROM</div>
                      <div className="text-xl font-bold">£10.99</div>
                    </div>
                    <div className="">
                      <div className="text-xs">Per employee</div>
                      <div className="text-xs">Per month</div>
                    </div>
                    <div className="">
                      <button className="btn-primary-tl">SELECT</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="p-6">
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
              </ul>
              <div className="py-6 border-t">
              <div className="flex justify-around items-center">
                <div className="">
                    <div className="text-xs text-center text-gray-500">As little as</div>
                    <div className="text-5xl text-center font-bold py-3">£10.99</div>
                    <div className="text-xs text-center text-gray-500">*Per employee, Per month</div>
                  </div>
                  
                </div>
                <div className="flex justify-center py-3">
                  <button className="btn-primary-tl flex justify-center w-full">
                    Select Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <Footer />
    </>
  )
}

export default Pricing