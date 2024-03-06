
import { useState } from "react";
import {  Hotel, hotels } from "../../constants/data";
import HomeListingMain from "./HomeListingMain";
import Sidebar from "./Sidebar";

const HomeListingHotel = () => {

  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);

  const applyFilters = (filteredHotels: Hotel[]) => {
    setFilteredHotels(filteredHotels);
    console.log("main", filteredHotels)
  };
  
  return (
    <div className={`relative w-full mt-10 bg-[#F7F7F7]`}>
      <div className="mx-auto flex max-w-7xl py-10 items-start justify-center gap-10 padding-x">
        <Sidebar applyFilters={applyFilters} hotels={hotels}/>
        <HomeListingMain hotels={filteredHotels} />
        
      </div>
      
    </div>
  );
};

export default HomeListingHotel;
