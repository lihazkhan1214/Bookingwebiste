import React, { useState } from "react";
import addimg from "../../../assets/images/popup/double-bed-icon.svg";
import removeimg from "../../../assets/static/delete.png"
interface BasicPageProps {
  onContinue: (step: number) => void;
}
interface BedOption {
  id: number;
  kind: string;
  numberOfBeds: number;
}

const PrisingPage: React.FC<BasicPageProps> = ({ onContinue }) => {
  const [addroom, setaddroom] = useState(false);



  const [beds, setBeds] = useState<BedOption[]>([
    { id: 1, kind: 'Twin bed(s) / 19-130cm wide', numberOfBeds: 1 }
  ]);

  const addBed = () => {
    const newBed: BedOption = { id: beds.length + 1, kind: '', numberOfBeds: 1 };
    setBeds([...beds, newBed]);
  };

  const removeBed = (id: number) => {
    setBeds(beds.filter(bed => bed.id !== id));
  };

  const handleBedChange = (id: number, field: string, value: string | number) => {
    setBeds(beds.map(bed => bed.id === id ? { ...bed, [field]: value } : bed));
  };





  const handleContinue = () => {
    // You can perform any necessary validations here before continuing
    // For now, simply trigger the onContinue function
    onContinue(2); // Pass the index of the next step
  };




  const handleform = (e: any) => {
    e.preventDefault();

  }

  return (
    <div className="">

      {
        addroom == false ? (<> <div className="flex flex-col  mt-5 justify-center text-center items-center bg-white rounded-lg lg:py-12 py-6 lg:px-72 px-6 lg:h-[70vh] h-auto ">
          <div className="py-6 px-5 bg-gray-300 rounded-full">
            <img className='h-[52px]' src={addimg} alt="img" />
          </div>
          <p className='my-6'>No rooms have been added to your property – start adding rooms to describe bed options, layout, and pricing for guests.</p>

          <button
            onClick={() => setaddroom(true)} className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Add Room</button>
        </div>


        </>) : (<>







          <div id='my_modal_8' className="">
            <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
              <form >
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Room type</label>

                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                      <option className="font-semibold text-slate-300">Double </option>
                      <option className="font-semibold text-slate-300">Single </option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Number of rooms (of this type)</label>
                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1" />

                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Room name</label>
                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                      <option className="font-semibold text-slate-300">Select</option>
                      <option className="font-semibold text-slate-300">single</option>
                      <option className="font-semibold text-slate-300">double</option>
                    </select>
                    <label htmlFor="">
                      <p className="text-gray-400 my-3">This is the name guests will see on the Booking.com website.</p>
                    </label>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Custom name (optional)</label>
                    <input type="text" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Room name custom" />
                    <label htmlFor="">
                      <p className="text-gray-400 my-3">Create an optional, custom name for your reference.</p>
                    </label>
                  </div>

                </div>
              </form>
            </div>

            <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">What are the contact details for this property?</h1>

            <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
              <form onSubmit={(e) => handleform(e)}>
                <div className="grid grid-cols-6 gap-6">






                  {
                    beds.map((bed,ind) => (<>



                      <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm font-semibold text-gray-900 block mb-2">What kind of beds are available in this room?</label>
                        <select
                          name="select"
                          id="select"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                          value={bed.kind}
                          onChange={(e) => handleBedChange(bed.id, 'kind', e.target.value)}
                        >
                          <option className="font-semibold text-slate-300">Twin bed(s) / 19-130cm wide</option>
                          <option className="font-semibold text-slate-300">more</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="text-sm font-medium text-gray-900 block mb-2">Number of beds</label>
                        <div className="relative">
                          {
                            ind ==0 ? "" :(
                              <img onClick={() => removeBed(bed.id)} className="p-2 w-[50px] h-[50px] cursor-pointer right-[-20px] absolute    z-20  text-white rounded-full top-[-35px]" src={removeimg} alt="" />

                            )
}

                          <select
                            name="select"
                            id="select"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            value={bed.numberOfBeds}
                            onChange={(e) => handleBedChange(bed.id, 'numberOfBeds', parseInt(e.target.value))}
                          >
                            <option className="font-semibold text-slate-300">Select the number of beds</option>
                            <option className="font-semibold text-slate-300">1</option>
                            <option className="font-semibold text-slate-300">2</option>
                            <option className="font-semibold text-slate-300">3</option>
                          </select>







                        </div>
                      </div>








                    </>))
                  }


















                  <div className="col-span-6 sm:col-span-3">


                    <button onClick={addBed} className="py-3 px-4 bg-primary text-white rounded-lg mt-4">+ Add Another Bed</button>

                  </div>
                  <div className="col-span-6 sm:col-span-3">



                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">How many guests can stay in this room?</label>
                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                      <option className="font-semibold text-slate-300">0</option>
                      <option className="font-semibold text-slate-300">1</option>
                      <option className="font-semibold text-slate-300">2</option>
                    </select>

                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="text-sm font-medium text-gray-900 block mb-2">Room size (optional)</label>
                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                      <option className="font-semibold text-slate-300">0 <span className="text-primary text-end">Square Meter</span>
                      </option>
                      <option className="font-semibold text-slate-300">1</option>
                      <option className="font-semibold text-slate-300">2</option>
                    </select>

                  </div>
                </div>
              </form>
            </div>
            <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">Base price per night</h1>

            <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
              <form action="#">
                <p className="py-4 px-4 my-6 mx-4 bg-gray-100 text-gray-400 rounded-md">This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing on your property dashboard.</p>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label className="text-sm font-semibold text-gray-900 block mb-2">Price for 0 people</label>

                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                      <span>USD$ / per night</span>
                      <option className="font-semibold text-slate-300">0 USD$ / per night</option>
                      <option className="font-semibold text-slate-300">1  $12 </option>
                    </select>
                  </div>

                </div>
              </form>
            </div>
            <button onClick={handleContinue} className="w-full sm:mt-6 mt-2 text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
          </div>
        </>)
      }
    </div>

  )
}

export default PrisingPage