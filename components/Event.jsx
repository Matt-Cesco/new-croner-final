

const Event = ({ details }) => {
  return (
    <div className="max-w-full bg-primary">
      <div className="max-w-screen-xl mx-auto py-24 px-4 md:px-0">
        <div className="md:w-1/2">
          <div className="flex">
            <p className="text-white text-lg font-bold">{details.sutitleTop}</p>
          </div>
          <div className="flex">
            <p className="text-white text-4xl font-bold pb-2 mb-4">{details.title}</p>
          </div>
          <div className="flex">
            <p className="text-white">{details.description}</p>
          </div>
          <div className="flex">
          <div className="w-full md:w-1/2 pt-6 md:mb-0">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-namelll" type="text" placeholder="Search" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event;