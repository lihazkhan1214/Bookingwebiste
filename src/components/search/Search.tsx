// import { Link } from "react-router-dom"

// const Search = () => {
//   return (
//     <div className=' w-full flex flex-wrap gap-5 justify-between items-center bg-white rounded-md py-5 px-2'>
//             <div className='border border-gray-300 rounded-sm'>
//                 <input type="text" placeholder='Where are you going?' className="p-2 outline-none rounded-md"/>
//             </div>
//             <div className='border border-gray-300 rounded-sm'>
//                 <input type="date" placeholder='Select Start and End date' className="p-2 outline-none rounded-md"/>
//             </div>
//             <div className='border border-gray-300 rounded-sm'>
//                 <input type="text" placeholder='1 adult 1 child' className="p-2 outline-none rounded-md"/>
//             </div>
//             <div className=' rounded-sm'>
//                 <Link to={"/homelisting"}>
//                 <button className="bg-[#0351FC] text-white py-2 px-5 rounded-md">Find Now</button>
//                 </Link>
//             </div>

//     </div>
//   )
// }

// export default Search
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Option {
  adult: number;
  children: number;
  room: number;
}

function Search() {
  const [options, setOptions] = useState<Option>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openOptions, setOpenOptions] = useState(false);

  const handleOptionChange = (type: keyof Option, increment: "i" | "d", event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    const newOptions = { ...options };
    if (increment === "i") {
      newOptions[type] = options[type] + 1;
    } else if (options[type] > 1) {
      newOptions[type] = options[type] - 1;
    }
    setOptions(newOptions);
  };

  const handleClosePopup = () => {
    setOpenOptions(false);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search initiated with options:", options);
  };

  return (
    <div className="relative w-full border border-gray-400 flex flex-wrap gap-5 justify-start items-center bg-white rounded-md px-5 py-6">
      <div className="border border-gray-300 rounded-sm w-full md:w-[300px] lg-[300px]">
        <input
          type="text"
          placeholder="where are you Going?"
          className="p-2 outline-none rounded-md"
        />
      </div>
      <div className="border border-gray-300 rounded-sm w-full md:w-[300px] lg-[300px]">
        <input
          type="date"
          placeholder="Select Start and End date"
          className="p-2 outline-none rounded-md"
        />
      </div>
      <div className="relative w-full md:w-[300px] lg-[300px] ">
      <div
        className=" border py-2 border-gray-300 rounded-sm w-full "
        onClick={() => setOpenOptions(!openOptions)}
      >
        
        <span className="py-2 px-4 w-full">
          {`${options.adult} Adult(s) · ${options.children} Child(ren) · ${options.room} Room(s)`}
        </span>
        </div>

        {openOptions && (
          <div className="absolute flex flex-col gap-3 border border-gray-400 rounded-md top-[50px] p-5 bg-white">
            {/* Option items for Adult, Children, and Room */}

            <div className="flex justify-evenly items-center gap-10 ">
              <span className="text-base ubuntu-regular">Adults</span>
              <div className="border flex justify-between ml-3 items-center gap-5 py-1 px-2 border-gray-300 rounded-sm">
                <button
                  className="text-xl text-blue-600 bold"
                  disabled={options.adult <= 1}
                  onClick={(event) => handleOptionChange("adult", "d", event)}
                >
                  <Minus size={18} strokeWidth={3} />
                </button>
                <span className="text-base ubuntu-regular">{options.adult}</span>
                <button
                  className="text-xl text-blue-600 bold"
                  onClick={(event) => handleOptionChange("adult", "i",event)}
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-10 ">
              <span className="text-base ubuntu-regular">Children</span>
              <div className="border flex justify-between items-center gap-5 py-1 px-2 border-gray-300 rounded-sm">
                <button
                  className="text-xl text-blue-600 bold"
                  disabled={options.children <= 0}
                  onClick={(event) => handleOptionChange("children", "d",event)}
                >
                  <Minus size={18} strokeWidth={3} />
                </button>
                <span className="text-base ubuntu-regular">{options.children}</span>
                <button
                  className="text-xl text-blue-600 bold"
                  onClick={(event) => handleOptionChange("children", "i",event)}
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-10 ">
              <span className="text-base ubuntu-regular">Room(s)</span>
              <div className="border flex justify-between items-center gap-5 py-1 px-2 border-gray-300 rounded-sm">
                <button
                  className="text-xl text-blue-600 bold"
                  disabled={options.room <= 1}
                  onClick={(event) => handleOptionChange("room", "d",event)}
                >
                  <Minus size={18} strokeWidth={3} />
                </button>
                <span className="text-base ubuntu-regular">{options.room}</span>
                <button
                  className="text-xl text-blue-600 bold"
                  onClick={(event) => handleOptionChange("room", "i",event)}
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
            <button className="text-white bg-[#0351FC] rounded-sm w-max py-1 px-4 text-sm ubuntu-regular mx-auto" onClick={handleClosePopup}>
              Done
            </button>
          </div>
        )}
        
      </div>
      <div className=" rounded-sm">
        <Link to={"/homelisting"}>
          <button className="bg-[#0351FC] text-white py-2 px-5 rounded-md" onClick={handleSearch}>
            Find Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Search;
