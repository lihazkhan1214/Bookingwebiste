import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import Home from "../../assets/static/HOME.png";
import apartimg from "../../assets/static/aparment.png";
import locationimg from "../../assets/static/location.png";
import multilcation from "../../assets/static/multiple.png";
import multiapart from "../../assets/static/mutipleapament.png";
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = "Entier place" | "A private room";
type Location = "One Location" | "Multiple location";

function Homes() {
  const [step, setStep] = useState<number>(1);
  const [category, setCategory] = useState<Category>("Entire place");
  const [locations, setLocations] = useState<Location>("One Location");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    // You can submit the form data here
    // For demonstration, let's just log the data
  };

  return (
    <>
      <Navbar bg="bg-[#0351FC]" />
      <section className="w-full py-10 bg-[#F2F4FD]  relative">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
          <div className="w-full flex max-sm:flex-col  gap-10">
            <div className=' w-full md:w-[500px] '>
              {step === 1 && (
                <>
                  <h2 className="text-3xl mb-5  text-black font-bold ">What can guests book?</h2>
                  <div className="bg-[#FFF] flex gap-5 flex-col p-5">
                    <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${category === 'Entire place' && 'border-blue-600'}`} onClick={() => setCategory("Entire place")}>
                      <img className='w-[60px] h-[60px]' src={Home} alt="" />
                      <div className="">
                      <h1 className='text-[#000000] font-normal text-lg'>Entire place</h1>
                      <p className="text-sm text-[#000]">Guests are able to use the entire place and do not have to share this with the host or other guests.</p>
                    
                      </div>
                    </div>
                    <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${category === 'A private room' && 'border-blue-600'}`} onClick={() => setCategory("A private room")}>
                      <img className='w-[60px] h-[60px]' src={multiapart} alt="" />
                    <div className="">  <h1 className='text-[#000000] font-normal text-lg'>A private room</h1>
                      <p className="text-sm text-[#000]">Guests rent a room within the property. There are common areas </p>
                      </div>
                    
                    </div>
                    
                    <div className="flex justify-between">
                      <Link to='/list-property' className='mt-5 mx-2 border-[1px] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> <ChevronLeft /></Link>
                      <button className='mt-5 bg-blue-600 w-[100%] p-2 rounded-[4px] text-lg text-[#FFF]' onClick={nextStep}>Continue</button>
                    </div>
                  </div>
                </>
              )}
              {step === 2 && (
                <>


     two

                 
                </>
              )}
              {step === 3 && (
                <>
                  <h2 className="text-3xl mb-5  text-black font-bold ">Where else is your property listed?</h2>
                  <div className="bg-[#FFF] flex gap-5 flex-col p-5">
                    <p className="text-[#000000] text-sm font-normal text-justify">If your property is listed on Airbnb, you can speed up registration by importing it directly to Booking.com.</p>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="airbnb" />
                      <span>Airbnb</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="tripadvisor" />
                      <span>TripAdvisor</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="vrbo" />
                      <span>Vrbo</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="anotherWebsite" />
                      <span>Another website</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" name="notListed" />
                      <span>My property isn't listed on any other websites</span>
                    </label>
                    <p className="mt-5 text-center">Does this sound like your property?</p>
                    <div className="flex gap-5  justify-center items-center">
                      <button className='mt-5 mx-2 border-[1px] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600' onClick={prevStep}> <ChevronLeft /></button>
                      <button className='mt-5 bg-blue-600 w-[100%] p-2 rounded-[4px] text-lg text-[#FFF]' onClick={() => setStep(4)}>Continue</button>
                    </div>
                    <button className=' mx-2 border-[1px] w-[100%] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> No, I need to make a change</button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='flex-1'></div>
        </div>
      </section>
    </>
  );
}

export default Homes;
