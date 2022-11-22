import Image from "next/image";

const SectionFreeRes = ({ details }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-24 px-4 md:px-0">
      <div className="flex">
        <p className="text-red text-lg font-bold">{details.subtitleTop}</p>
      </div>
      <div className="flex">
        <p className="text-lightblue text-4xl font-bold pb-2 mb-4">{details.title}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {details.freeResourcesCard.map(freerescard => (
        <div key={freerescard.id} className="flex justify-center rounded-xl">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="rounded-t-lg">
              <Image 
                src={freerescard.image.url}
                alt={freerescard.title}
                width={410}
                height={201}
              />
            </div>
            <div className="p-6">
              <h2 className="font-bold mb-2 text-2xl">{freerescard.title}</h2>
              <p className="primary-color fs-md mb-2">{freerescard.description}</p>
              <div className="py-3">
              <button className="btn-primary-tl">Find out more</button>
            </div>
            </div>
          </div>
        </div>
      ))}
        
      </div>
      <div className="flex justify-center py-12 md:py-24">
        <button className="btn-primary-tr fs-xl">View all resources</button>
      </div>
    </div>
  )
}

export default SectionFreeRes