
import Image from "next/image";
import Link from "next/link";
import logoGrid from "../public/images/logo-grid.png"

const CaseStudy = () => {
  return (
    <div className="max-w-full mx-auto py-24 px-0 md:px-0 bg-lightblue">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2">
            <div className="grid grid-cols-3 h-36 md:h-56 gap-4 content-between">
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
              <div>
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoGrid}
                    alt="logo"
                    width={100}
                  />
                </Link>
              </div>
            </div>
            
            
          </div>
          <div className="basis-1/2 px-4 md:px-0 pt-10 md:pt-0">
            <div class="flex">
              <p class="text-white text-2xl font-bold">Resources</p>
              </div>
            <div class="flex pt-3">
              <p class="text-white text-4xl font-bold pb-2 mb-4">11,000+ businesses have been where you are today.</p>
            </div>
            <div class="py-3">
              <button class="btn-primary-tl">Find out more</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CaseStudy