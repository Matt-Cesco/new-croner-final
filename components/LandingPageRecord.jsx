import Image from "next/image";


const LandingPageRecord = ({ details }) => {
  return (
    <div className="hero-container bg-primary">
      <div className="max-w-screen-xl flex flex-col-reverse md:flex-row items-center px-6 py-4 md:py-28 mx-auto">
        <div className="flex flex-col mb-32 md:w-1/2">
          <h1 className="max-w-xl text-4xl text-yellow font-bold md:text-5xl md:textleft pt-24">
            {details.bigTitleH1}
          </h1>
          <h2 className="max-w-xl text-2xl md:text-4xl text-white md:textleft pt-6">
            {details.subtitleh2}
          </h2>
          <p className="max-w-sm text-white pt-6 md:pt-12">Trustpilot Excellent</p>
          <div className="flex flex-col md:flex-row pt-12">
            <div className="">
              <button className="btn-primary-tl">{details.firstButton}</button>
            </div>
            <div className="px-0 md:px-6 pt-6 md:pt-0">
              <button className="btn-primary-tl">{details.secondButton}</button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          
          <Image 
          src={details.image.url}
          alt={details.bigTitleH1}
          width={550}
          height={500}
       />
          
        </div>
      </div>
    </div>
    
  )
}

export default LandingPageRecord;