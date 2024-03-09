import  { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import Home from "../../assets/static/HOME.png";
// import apartimg from "../../assets/static/aparment.png";
import locationimg from "../../assets/static/location.png";
import multilcation from "../../assets/static/multiple.png";
import multiapart from "../../assets/static/mutipleapament.png";
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


type Location = "One Location" | "Multiple location";

type OpCategory = "One" | "Multiple";

const Entiercards = [{
    title: "Apartment",
    desc: "Furnished accommodation without catering. Possibility of shorter and longer stays."
},
{
    title: "Holiday home",
    desc: "Detached house with its own, private entrance. Rented specifically for holiday stays"
},
{
    title: "Villa",
    desc: "Private elegant house with own kitchen"
},
{
    title: "Apartment hotel",
    desc: "An apartment without catering but with kitchen facilities, often with certain hotel facilities such as a reception"
}
    ,
{
    title: "Chalet",
    desc: "House or cabin with a characteristic pitched roof that is rented out specifically for holidays."
},
{
    title: "Holiday park",
    desc: "Private residences without catering, located on shared grounds with shared facilities or leisure activities."
}




];











function Hotels() {
    const [step, setStep] = useState<number>(1);

    const [opcategory, setopcategory] = useState<OpCategory>("One");
    const [locations, setLocations] = useState<Location>("One Location");
    const [clicked, setClicked] = useState("Apartment");

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    // const handleSubmit = () => {
    //     // Handle form submission
    //     // You can submit the form data here
    //     // For demonstration, let's just log the data
    // };





    return (
        <>
            <Navbar bg="bg-[#0351FC]" />




            {step === 1 && (
                <>



                    <section className="w-full py-10 bg-[#F2F4FD]  relative">
                        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">


                            <h2 className="text-3xl mb-5  text-black font-bold ">Choose from the list below which category best suits your accommodation.</h2>

                            <div className="bg-[#FFFFFF] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center p-5">




                                {

                                    Entiercards.map((item, ind) => (<>

                                        <div key={ind} className={`border-[1px] flex cursor-pointer flex-col gap-5 w-[300px] h-[150px] p-4 rounded-[8px] ${clicked == item.title ? 'border-blue-600 border-[2px]' : 'border-[#ADADAD]'
                                            }`}
                                            onClick={() => setClicked(item.title)}
                                        >

                                            <h1 className="text-[#000000] text-lg font-bold">{item.title}</h1>
                                            <p className="text-[#000000] text-[14px]">{item.desc}</p>


                                        </div>


                                    </>))
                                }

































                            </div>





                            <div className="flex  justify-between">
                                <button onClick={() => setStep(step - 1)} className='mt-5 mx-2 border-[1px] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> <ChevronLeft /></button>
                                <button className='mt-5 bg-blue-600 w-full px-4 py-2 rounded-[4px] text-lg text-[#FFF]' onClick={nextStep}>Continue</button>
                            </div>

                        </div>




                    </section>






                </>
            )
            }






            {step === 2 && (
                <>
                    <section className="w-full py-10 bg-[#F2F4FD]  relative">
                        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
                            <div className="w-full flex max-sm:flex-col  gap-10">
                                <div className=' w-full md:w-[500px] '>



                                    <h2 className="text-3xl mb-5  text-black font-bold ">How many {clicked} are you listing?</h2>
                                    <div className="bg-[#FFF] flex gap-5 flex-col p-5">
                                        <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${opcategory === 'One' && 'border-blue-600'}`} onClick={() => setopcategory('One')}>
                                            <img className='w-[60px] h-[60px]' src={Home} alt="" />
                                            <h1 className='text-[#000000] font-normal text-lg'>One {clicked}</h1>
                                        </div>
                                        <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${opcategory === "Multiple" && 'border-blue-600'}`} onClick={() => setopcategory("Multiple")}>
                                            <img className='w-[60px] h-[60px]' src={multiapart} alt="" />
                                            <h1 className='text-[#000000] font-normal text-lg'>Multiple {clicked}</h1>
                                        </div>
                                        {opcategory === "Multiple" && (
                                            <>
                                                <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${locations === 'One Location' && 'border-blue-600'}`} onClick={() => setLocations("One Location")}>
                                                    <img className='w-[40px] h-[60px]' src={locationimg} alt="" />
                                                    <h1 className='text-[#000000] font-normal text-lg'>Yes, these {clicked} are at the same address or building</h1>
                                                </div>
                                                <div className={`border-[2px] cursor-pointer flex gap-5 p-2 border-[#ADADAD] ${locations === 'Multiple location' && 'border-blue-600'}`} onClick={() => setLocations("Multiple location")}>
                                                    <img className='w-[60px] h-[60px]' src={multilcation} alt="" />
                                                    <h1 className='text-[#000000] font-normal text-lg'>No, these {clicked} are at different addresses or buildings</h1>
                                                </div>
                                                <label className='text-[#000000] text-lg font-normal' htmlFor="">Number of properties</label>
                                                <input type="number" placeholder='2' className='border-[1px] p-2 rounded-[8px] w-[100px] outline-none' name="" id="" />
                                            </>
                                        )}
                                        <div className="flex justify-between">
                                            <button onClick={() => setStep(step - 1)} className='mt-5 mx-2 border-[1px] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> <ChevronLeft /></button>
                                            <button className='mt-5 bg-blue-600 w-[100%] p-2 rounded-[4px] text-lg text-[#FFF]' onClick={nextStep}>Continue</button>
                                        </div>
                                    </div>






                                </div>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </section>
                </>
            )}














            {step == 3 && (
                <>

                    <section className="w-full py-10 bg-[#F2F4FD]  relative">
                        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
                            <div className="w-full flex max-sm:flex-col  gap-10">
                                <div className=' w-full md:w-[500px] '>
                                    <div className="bg-[#FFF] flex gap-5 flex-col p-5">
                                        <p className="text-[#000000] text-sm font-normal text-center">You're listing:</p>
                                        <div className={` cursor-pointer flex justify-center items-center flex-col gap-5 p-2 '}`}>
                                            <img className='w-[60px] h-[60px]' src={Home} alt="" />
                                            <h1 className='text-[#000000] font-bold text-center text-[30px]'> where guests can book the {clicked}</h1>
                                        </div>
                                        <p className="mt-5 text-center">Does this sound like your property?</p>
                                        <div className="flex gap-5 flex-col justify-center items-center">
                                            <button className='mt-5 bg-blue-600 w-[100%] p-2 rounded-[4px] text-lg text-[#FFF]' onClick={nextStep}>Continue</button>
                                            <button className=' mx-2 border-[1px] w-[100%] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> No, I need to make a change</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </section>




                </>
            )}
            {step == 4 && (
                <>

                    <section className="w-full py-10 bg-[#F2F4FD]  relative">
                        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
                            <div className="w-full flex max-sm:flex-col  gap-10">
                                <div className=' w-full md:w-[500px] '>



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
                                            <Link to="/infoform" className='mt-5 bg-blue-600 w-[100%] p-2 text-center rounded-[4px] text-lg text-[#FFF]' >Continue</Link>
                                        </div>
                                        <button className=' mx-2 border-[1px] w-[100%] border-blue-600 p-2 rounded-[4px] text-lg text-blue-600'> No, I need to make a change</button>
                                    </div>


                                </div>
                            </div>
                            <div className='flex-1'></div>
                        </div>
                    </section>
                </>
            )


            }



        </>
    );
}

export default Hotels;
