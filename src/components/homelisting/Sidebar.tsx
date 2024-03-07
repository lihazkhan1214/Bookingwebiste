import { Star } from "lucide-react";
import { Hotel, facilities, roomFacilities } from "../../constants/data";
import { useState } from "react";

interface SidebarProps {
  applyFilters: (filteredHotels: Hotel[]) => void;
  hotels: Hotel[];
}

const Sidebar: React.FC<SidebarProps> = ({ applyFilters, hotels }) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleFilter = () => {
    const filteredHotels = hotels.filter((hotel) => {
      const hotelPrice = hotel.price;
      return hotelPrice >= minPrice && hotelPrice <= maxPrice;
    });

    applyFilters(filteredHotels);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setMinPrice(value);
    if (value && maxPrice) {
      handleFilter();
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    console.log(value);
    setMaxPrice(value);
    if (value && minPrice) {
      handleFilter();
    }
  };

  const filterByStars = (hotels: Hotel[], selectedStars: number): Hotel[] => {
    if (selectedStars === 0) {
      return hotels;
    }

    const filteredHotels = hotels.filter((hotel) => {
      const hotelStars = parseFloat(hotel.rating); // Assuming stars are represented as strings, convert to number
      return hotelStars >= selectedStars;
    });

    return filteredHotels;
  };

  const sortHotelsByStarRating = (hotels: Hotel[], selectedStar: number): Hotel[] => {
    return hotels.sort((a, b) => {
      const starRatingA = parseFloat(a.rating);
      const starRatingB = parseFloat(b.rating);
  
      if (starRatingA >= selectedStar && starRatingB < selectedStar) {
        return -1; // a comes first
      } else if (starRatingA < selectedStar && starRatingB >= selectedStar) {
        return 1; // b comes first
      } else {
        // Sort in ascending order of star ratings
        return starRatingA - starRatingB;
      }
    });
  };

  const handleStarSelect = (star: number) => {
    const updatedStars = selectedStars === star ? 0 : star;
    setSelectedStars(updatedStars);
    const filteredHotels = filterByStars(hotels, updatedStars);
    const sortedHotels = sortHotelsByStarRating(filteredHotels, selectedStars);
    applyFilters(sortedHotels);
  };

  return (
    <div className="hidden lg:flex flex-col w-1/3  ">
      <h2 className="text-xl md:text-2xl font-semibold ">2443 Hotels Found</h2>
      <div className="flex flex-col border border-gray-300 rounded-md mt-4 bg-white">
        {/* price section */}
        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">Price (United State $)</span>
          <div className="flex justify-center items-center gap-2 w-full">
            <div className="flex-1 flex justify-between items-center border border-gray-400 rounded-md  py-1 px-2">
              <input
                type="number"
                placeholder="min price"
                className="border-none outline-none w-2/3"
                onChange={handleMinPriceChange}
              />
              <span className="text-[#0351FC] font-semibold">US $</span>
            </div>
            <div className="flex-1 flex justify-between items-center border border-gray-400 rounded-md  py-1 px-2">
              <input
                type="number"
                placeholder="max price"
                className="border-none outline-none w-2/3"
                onChange={handleMaxPriceChange}
              />
              <span className="text-[#0351FC] font-semibold">US $</span>
            </div>
          </div>
          <input
            type="range"
            className="w-full h-1 bg-[#0351FC] mt-2 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <hr className="mt-2" />

        {/* Stars section */}
        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">Rating with Stars</span>
          <div className="flex justify-center items-center gap-1 w-full">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`flex justify-center items-center gap-1 border border-gray-300 rounded-sm py-2 px-2 focus:border-blue-500 ${
                  selectedStars === star ? "bg-gray-200" : ""
                }`}
                onClick={() => handleStarSelect(star)}
              >
                <span>{star}</span>
                <Star size={15} color="#FFC661" fill="#FFC661" />
              </button>
            ))}
          </div>
        </div>

        <hr className="mt-2" />

        {/* Location */}
        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">By Location</span>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-start items-center gap-2">
              <input
                id="karachi"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="karachi"
                className="text-base text-gray-900 cursor-pointer"
              >
                Pakistan
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="lahore"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="lahore"
                className="text-base text-gray-900 cursor-pointer"
              >
                United State
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="islamabad"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="islamabad"
                className="text-base text-gray-900 cursor-pointer"
              >
                United Kindom
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="multan"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="multan"
                className="text-base text-gray-900 cursor-pointer"
              >
                Canada
              </label>
            </div>
          </div>
        </div>

        <hr className="mt-2" />

        {/*  bed type*/}

        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">Bed Type</span>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-start items-center gap-2">
              <input
                id="two"
                name="same"
                type="radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="two"
                className="text-base text-gray-900 cursor-pointer"
              >
                2 beds
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="three"
                type="radio"
                name="same"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="three"
                className="text-base text-gray-900 cursor-pointer"
              >
                3 beds
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="four"
                type="radio"
                name="same"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="four"
                className="text-base text-gray-900 cursor-pointer"
              >
                4 beds
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="five"
                type="radio"
                name="same"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="five"
                className="text-base text-gray-900 cursor-pointer"
              >
                5 beds
              </label>
            </div>
          </div>
        </div>

        <hr className="mt-2" />
        {/* payment type */}
        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">Payment</span>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-start items-center gap-2">
              <input
                id="onlinepay"
                name="pay"
                type="radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="onlinepay"
                className="text-base text-gray-900 cursor-pointer"
              >
                Payment Online
              </label>
            </div>
            <div className="flex justify-start items-center gap-2">
              <input
                id="payPhisically"
                type="radio"
                name="pay"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="payPhisically"
                className="text-base text-gray-900 cursor-pointer"
              >
                Pay at hotel (Physically)
              </label>
            </div>
          </div>
        </div>

        <hr className="mt-2" />

        {/* Room facilities and services */}

        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">
            Room Facilities & Services
          </span>
          <div className="flex flex-col gap-2 w-full">
            {roomFacilities.map((r, i) => (
              <div key={i} className="flex justify-start items-center gap-2">
                <input
                  id={r.id}
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor={r.id}
                  className="text-base text-gray-900 cursor-pointer"
                >
                  {r.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-2" />

        {/* Property Features */}

        <div className="w-full flex flex-col gap-2 p-2">
          <span className="text-lg font-semibold">Facilities</span>
          <div className="flex flex-col gap-2 w-full">
            {facilities.map((f, i) => (
              <div key={i} className="flex justify-start items-center gap-2">
                <input
                  id={f.id}
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor={f.id}
                  className="text-base text-gray-900 cursor-pointer"
                >
                  {f.title}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
