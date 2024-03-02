import { Link } from "react-router-dom"


const Search = () => {
  return (
    <div className=' w-full flex flex-wrap gap-5 justify-between items-center bg-white rounded-md py-5 px-2'>
            <div className='border border-gray-300 rounded-sm'>
                <input type="text" placeholder='Where are you going?' className="p-2 outline-none rounded-md"/>
            </div>
            <div className='border border-gray-300 rounded-sm'>
                <input type="date" placeholder='Select Start and End date' className="p-2 outline-none rounded-md"/>
            </div>
            <div className='border border-gray-300 rounded-sm'>
                <input type="text" placeholder='1 adult 1 child' className="p-2 outline-none rounded-md"/>
            </div>
            <div className='border border-gray-300 rounded-sm'>
                <input type="number" placeholder='Rooms' className="p-2 outline-none rounded-md"/>
            </div>
            <div className=' rounded-sm'>
                <Link to={"/homelisting"}>
                <button className="bg-[#0351FC] text-white py-2 px-5 rounded-md">Find Now</button>
                </Link>
            </div>

        

    </div>
  )
}

export default Search