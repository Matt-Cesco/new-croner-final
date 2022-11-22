import Image from 'next/image'


const SupportBusinessRecord = ({ details }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-4 md:px-0">
        <div className="flex">
          <p className="text-red text-lg font-bold">{details.subtitletop}</p>
        </div>
        <div className="flex">
          <p className="text-lightblue text-4xl font-bold pb-2 mb-4">{details.title}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.secondSectionCards.map(card => (
            <div key={card.id} className="flex justify-center rounded-xl">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg">
                  <Image 
                      src={card.image.url}
                      alt={card.title}
                      width={302}
                      height={201}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold mb-2 text-2xl text-purple">{card.title}</h2>
                  <p className="primary-color fs-md mb-2">{card.description}<span className="text-purple font-bold">{card.highlightedword}</span></p>
                  <div className="py-3">
                  <button className="btn-primary-tl">Find out more</button>
                </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
  )
}

export default SupportBusinessRecord;