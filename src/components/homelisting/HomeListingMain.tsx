import { useEffect, useState } from "react";
import { Hotel } from "../../constants/data";
import { Link } from "react-router-dom";

interface Tab {
  title: string;
}

const HomeListingMain = ({ hotels }: { hotels: Hotel[] }) => {

  
  const tabs: Tab[] = [
    { title: "Most Popular" },
    { title: "Lowest Price" },
    { title: "Distance" },
    { title: "Star Rating" },
  ];
  const [selectedTab, setSelectedTab] = useState<number | null>(0);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);

  const handleClick = (index: number) => {
    setSelectedTab(index);
    filterHotels(tabs[index].title);
  };

  console.log(filteredHotels.length)

  const filterHotels = (title: string) => {
    switch (title) {
      case "Most Popular":
        setFilteredHotels(hotels.slice(0, 6));
        break;
        case "Lowest Price":
          setFilteredHotels(hotels.slice().sort((a: Hotel, b: Hotel) => a.price - b.price).slice(0, 6));
          break;
          case "Distance":
            
            break;
            case "Star Rating":
              const sortedHotels = hotels.slice().sort((a: Hotel, b: Hotel) => parseFloat(b.rating) - parseFloat(a.rating));
             
              setFilteredHotels(sortedHotels.slice(0, 6));
              break;
      default:
        setFilteredHotels(hotels);
        break;
    }
  };

  useEffect(() => {
    if (selectedTab !== null) {
      filterHotels(tabs[selectedTab].title);
    }
  }, [hotels]);



  return (
    <div className="flex flex-col w-full lg:w-2/3 ">
      <div className="border border-gray-300 rounded-md overflow-hidden flex justify-stretch items-center bg-white">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`border-r border-gray-200 text-base font-normal flex-1 text-center py-2 cursor-pointer ${
              selectedTab === index ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </span>
        ))}
      </div>

      <div className=" w-full flex flex-col gap-2 mt-4">
        {filteredHotels.length===0 && (<>
        <div className="w-full h-[200px] flex justify-center items-center text-blue-500 text-lg ubuntu-regular">

          Sorry No Property Found
        </div>
        </>)}
        {filteredHotels.map((hotel: Hotel, index: number) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-start gap-5 md:gap-8 items-start w-full border border-[#ADADAD] bg-white rounded-md p-2"
          >
            <img
              src={hotel.image}
              alt="img"
              className="w-full sm:w-1/2 h-[250px] rounded-md"
            />
            <div className="h-full flex flex-col pr-1 gap-4 w-full sm:w-1/2">
              <h3 className="text-base md:text-lg font-bold text-black">
                {hotel.title}
              </h3>
              <p className="text-sm">{hotel.desc}</p>

              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

                <span className="text-sm md:text-base text-black">
                  {hotel.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base md:text-lg font-bold text-black">
                  {hotel.rating}/5
                </span>
                <span className="text-sm md:text-base text-black">
                  Wonderful . {hotel.reviews} reviews
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link to={"/homelistingdetails"}>
                  <button className="text-white py-2 px-4 rounded-md bg-[#0351FC]">
                    Book Now
                  </button>
                </Link>
                <div className="">
                  <span className="text-sm">From</span>
                  <span className="text-xl font-bold">${hotel.price}.00</span>
                  <span className="text-sm text-black">/night</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-end mt-5">
        <button className="border border-[#0351FC] text-[#0351FC] rounded-sm py-2 px-8">
          view More Hotels
        </button>
      </div>
    </div>
  );
};

export default HomeListingMain;
