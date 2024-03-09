import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import letterimg from "../../assets/static/letter.png";
import emptyroomimg from "../../assets/static/emptyroom.png";
import { Images } from 'lucide-react';
import expressimg from "../../assets/dami/aexpress.png";
import uerocardimg from "../../assets/dami/eurocard.png";
import dinnerclubimg from "../../assets/dami/dinnerclub.jpeg";
import maestroimg from "../../assets/dami/maestro.png";
import visaimg from "../../assets/dami/visa.png";
import jbcimg from "../../assets/dami/jcb.jpeg";
import unionimg from "../../assets/dami/union.png";
import discoverimg from "../../assets/dami/discover.png";
import arrow from "../../assets/static/arrow.png";
import { Link } from 'react-router-dom';



interface Tab {
  title: string;
}

const tabs: Tab[] = [
  { title: " BasicInfo" },
  { title: "LayoutAndPricing" },
  { title: "FacilitiesAndServices" },
  { title: " Amenities" },
  { title: "Photos" },
  { title: "Policies" },
  { title: " payments" }
];

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [multipleapart, setmultipleapart] = useState(true);
  const [manager, setmanager] = useState(true);
  const [parking, setparking] = useState("no");
  const [extrabed, setextrabed] = useState(false);
  const [paymentoption, setpaymentoption] = useState(false);
  const [differenceaddress, setdifferenceaddress] = useState(false);





  const [layout, setlayout] = useState(true);
  const [home, sethome] = useState("please");

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput instanceof HTMLInputElement) {
        fileInput.click();
    }
}

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
        const imagesArray = Array.from(fileList).map((file) => URL.createObjectURL(file));
        setSelectedImages(imagesArray);
    }
}






  const [formData, setFormData] = useState({
    basicInfo: '',
    layoutAndPricing: '',
    facilitiesAndServices: '',
    amenities: '',
    photos: '',
    policies: '',
    payments: ''
  });



  const [methods, setMethods] = useState({
    americanExpress: false,
    visa: false,
    euroMastercard: false,
    dinersClub: false,
    jcb: false,
    maestro: false,
    discover: false,
    unionPayCreditCard: false
  });

  const handleCheckboxChange = (event:any) => {
    const { name, checked } = event.target;
    setMethods({
      ...methods,
      [name]: checked
    });
  };







  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

 

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className='text-3xl text-justify mt-5 text-black font-bold'>You're doing great. Keep going!</h1>
            <p className="text-sm text-black font-normal text-justify mt-5">Start by telling us your property's name, contact details and address.</p>
            <div className="flex max-lg:flex-col  mt-5 gap-5 justify-center gap-5">
              <div className="flex flex-col w-full gap-5">
                {/* setion one start */}
                <div className="bg-[#FFFFFF] w-full  rounded-[8px] p-10">
                  <h2 className='text-xl text-justify mt-5 text-black font-normal'>What is the name of your property?</h2>
                  <input type="text" name="basicInfo" value={formData.basicInfo} onChange={handleChange} className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />
                  <p className="text-sm text-black font-normal sm:w-[400px] text-justify mt-5">This name will be seen by guests when they search for a place to stay.</p>
                </div>

                {/* setion one end */}


                {/* section two start */}

                <div className="bg-[#FFFFFF] w-full  rounded-[8px] p-10">
                  <h2 className='text-xl text-justify mt-5 text-black font-normal'>What are the contact details for this property?</h2>
                  <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Contact name</label>
                  <br />
                  <input type="text" placeholder='who will receive the letter?' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4  outline-blue-600 p-2 border-[#ADADAD]" />
                  <p className="text-sm text-black font-normal sm:w-[400px] text-justify mt-5">Contact number (so we can assist with your registration when needed)</p>
                  <div className="">
                    <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Phone number</label>
                    <br />
                    <PhoneInput
                      country={'us'}

                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,

                      }}
                      inputStyle={{
                        border: 'none',

                      }}
                      containerStyle={{
                        border: '2px solid #ADADAD',
                        width: '320px',
                        height: "45px",
                        marginTop: '10px'
                        , // You can adjust this color as needed

                      }}


                    />
                  </div>
                  <div className="flex max-lg:flex-col gap-5 mt-5 ">
                    <div className="">

                      <p className="text-sm text-black font-normal sm:w-[400px] text-justify">Do you own multiple apartments, or are you part of a property management company or group?</p>

                      <div className="flex mt-5 gap-5">
                        <div
                          className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${multipleapart ? 'border-blue-600' : ''}`}
                          onClick={() => {
                            setmultipleapart(true);
                          }}
                        >
                          <input type="radio" checked={multipleapart} onChange={() => setmultipleapart(true)} />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div
                          className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!multipleapart ? 'border-blue-600' : ''}`}
                          onClick={() => {
                            setmultipleapart(false);
                          }}
                        >
                          <input type="radio" checked={!multipleapart} onChange={() => setmultipleapart(false)} />
                          <label htmlFor="">No</label>
                        </div>
                      </div>




                    </div>
                    <div className="">
                      {

                        multipleapart && (<>

                          <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Name of company, group or chain</label>
                          <br />
                          <input type="text" className="border-[2px] sm:w-[400px] mt-5 border-opacity-4  outline-blue-600 p-2 border-[#ADADAD]" />


                        </>)
                      }



                    </div>
                  </div>
                </div>

                {/* section two end */}


                {/* section three  start*/}





                <div className="bg-[#FFFFFF] w-full  rounded-[8px] p-10">
                  <h2 className='text-xl text-justify mt-5 text-black font-normal'>Do you use a channel manager?</h2>

                  <p className="text-sm text-black font-normal  text-justify mt-5">A channel manager is a tool that lets you choose what you sell across all the different sites you might list your place on. You can then set your prices and open and close dates in your calendar on all of these sites in one place.</p>


                  <p className="text-sm text-black font-normal  text-justify mt-5">If you use a channel manager, tell us below. We’ll use this information to help you connect it to Booking.com in the future. It also helps if you tell us the brand name of your channel manager.</p>



                  <div className="flex flex-col gap-5 mt-5 ">
                    <div className="">


                      <div className="flex max-sm:flex-col mt-5 gap-5">
                        <div
                          className={`border-[1px] cursor-pointer w-[280px] flex gap-5 rounded-sm p-2  border-[#ADADAD] ${manager ? 'border-blue-600' : ''}`}
                          onClick={() => {
                            setmanager(true);
                          }}
                        >

                          <input type="radio" checked={manager} onChange={() => setmanager(true)} />
                          <label htmlFor="">I use a channel manager</label>
                        </div>
                        <div
                          className={`border-[1px] cursor-pointer  w-[280px] flex gap-5 rounded-sm p-2 border-[#ADADAD] ${!manager ? 'border-blue-600' : ''}`}
                          onClick={() => {
                            setmanager(false);
                          }}
                        >
                          <input type="radio" checked={!manager} onChange={() => setmanager(false)} />
                          <label htmlFor="">I don’t use a channel manager</label>
                        </div>
                      </div>




                    </div>
                    <div className="">
                      {

                        manager && (<>

                          <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Enter name (optional)</label>
                          <br />
                          <input type="text" className="border-[2px] w-full mt-5 border-opacity-4  outline-blue-600 p-2 border-[#ADADAD]" />


                        </>)
                      }



                    </div>
                  </div>
                </div>






                {/* section three  end*/}






                {/* section four start */}



                <div className="bg-[#FFFFFF]  w-full  rounded-[8px] p-10">

                  <h2 className='text-xl text-justify mt-5  text-black font-normal'>Where is your property located?</h2>
                  <p className="text-sm text-black font-normal p-2 bg-gray-100  text-justify mt-5">You have multiple properties you want to list. Remember to fill in the information that corresponds to this property registration.</p>
                  <div className="flex max-lg:flex-col  gap-10">
                    <div className="flex flex-col ">
                      <div className="flex flex-col">

                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Street address</label>
                        <input type="text" name="basicInfo" placeholder='eg.123 Easy Street' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                      </div>

                      <div className="flex flex-col">

                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Address line 2</label>
                        <input type="text" name="basicInfo" placeholder='unit number,suite,floor,building etc' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                      </div>

                      <div className="flex flex-col">

                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Country/region</label>
                        <input type="text" placeholder='country name' name="basicInfo" className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                      </div>

                      <div className="flex flex-col">

                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">City</label>
                        <input type="text" name="basicInfo" placeholder='City' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                      </div>

                      <div className="flex flex-col">

                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">  Post Code</label>
                        <input type="text" name="basicInfo" placeholder='postcode' className="border-[2px] sm:w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                      </div>




                    </div>
                    <div className="border-[2px] flex max-sm:flex-col gap-5  md:w-[450px]  justify-between mt-5 md:h-[200px]  p-2 border-[#ADADAD]">
                      <div className="w-[200px]">
                        <img src={letterimg} alt="" className="w-[120px] h-[60px]" />

                      </div>
                      <div className="">


                        <h2 className='text-xl text-justify mt-5  text-black font-normal'>Your address matters</h2>
                        <p className="text-sm text-black font-normal  text-justify mt-5">
                          Please make sure you enter the full address of your property, including building name, number, etc. Based on the information you provide, we might send a letter to verify this address.
                        </p>


                      </div>
                    </div>

                  </div>






                </div>



                <button className='bg-blue-600 border-0  p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>





                {/* section four end */}


              </div>


              <div className="max-md:hidden">
                <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
              </div>
            </div>

          </div>
        );

      case 2:
        return (<>






          {/* setion one start */}

          {
            layout == true ? (<>



              <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Layout and pricing
              </h1>
              <p className="text-sm text-black font-normal text-justify mt-5">Describe the bed options, common spaces, size, and pricing for each of your apartments.

              </p>









              <div className="flex max-lg:flex-col  mt-5  gap-5">




                <div className="bg-[#FFFFFF] w-full flex flex-col items-center gap-5 justify-center  rounded-[8px] p-10">

                  <img src={emptyroomimg} className='w-[240px] h-[80px]' alt="" />

                  <p className="text-sm text-black font-normal sm:w-[400px] text-center">You haven't shared any layout or pricing information. Start setting these for each of your apartments.</p>

                  <button onClick={() => setlayout(!layout)} className='bg-blue-600 rounded-sm text-lg font-normal p-3 text-[#FFFFFF]'>Set layout and price</button>
                </div>


                <div className="max-md:hidden">
                  <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
                </div>




              </div>













            </>) : (<>

              <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Layout and pricing
              </h1>
              <p className="text-sm cursor-pointer hover:underline text-black font-normal text-justify mt-5" onClick={() => setlayout(!layout)}>Go back to overview

              </p>


              <div className="flex max-lg:flex-col  mt-5  gap-5">


                <div className='w-full'>

                  <div className="bg-[#FFFFFF] w-full  gap-5   rounded-[8px] p-10">

                    <h2 className='text-xl text-justify mt-5 text-black font-normal'>

                      Room info
                    </h2>

                    <div className="">
                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Room type</label>
                      <br />
                      <select className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" onChange={(e) => sethome(e.target.value)}>
                        <option value="please">Please Select</option>
                        <option value="home">Mobile Home</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    {
                      home == "home" && (<>


                        <div className="flex max-lg:flex-col  gap-5 ">

                          <div className="">
                            <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Number of rooms (of this type)</label>
                            <br />
                            <select className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">
                              <option value="please">Please Select</option>
                              <option value="caravan">Caravan</option>
                              <option value="home">Mobile home</option>
                              {/* Add more options as needed */}
                            </select>


                          </div>
                          <div className="">
                            <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Custom name (optional)</label>
                            <br />
                            <input type="text" placeholder='' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                          </div>

                        </div>




                        <div className="flex max-lg:flex-col mt-5  gap-5 ">

                          <div className="">
                            <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Number of bedrooms</label>
                            <br />
                            <input type="number" placeholder='0...' className="border-[2px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                          </div>
                          <div className="">
                            <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Number of living rooms</label>
                            <br />
                            <input type="number" placeholder='0...' className="border-[2px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                          </div>



                          <div className="">
                            <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Number of bathrooms</label>
                            <br />
                            <input type="text" placeholder='0..' className="border-[2px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                          </div>

                        </div>

















                      </>)
                    }




                    <div className="mt-5">
                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Number of rooms (of this type)</label>
                      <br />
                      <input type="number" className="border-[2px] w-[100px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />


                    </div>










                  </div>





                  {/* section two start  */}
                  <div className="bg-[#FFFFFF] w-full mt-5  gap-5   rounded-[8px] p-10">

                    <h2 className='text-xl text-justify  text-black font-normal'>

                      Bed options
                    </h2>

                    <p className="text-[12px] text-black font-normal bg-gray-100 p-2 sm:w-[420px]  mt-5">Tell us only about the existing beds in a room. Do not include extra beds.</p>



                    <div className="flex max-lg:flex-col mt-5  gap-5 ">

                      <div className="">
                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Number of rooms (of this type)</label>
                        <br />
                        <select className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">
                          <option value="please">Please Select</option>
                          <option value="singlebed">Single bed</option>
                          <option value="doublebed">double bed</option>
                          {/* Add more options as needed */}
                        </select>


                      </div>
                      <div className="">
                        <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5' htmlFor="">Select the numbers of beds</label>
                        <br />
                        <input type="number" placeholder='' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                      </div>

                    </div>





                    <div className="">
                      <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Number of bathrooms</label>
                      <br />
                      <input type="text" placeholder='0..' className="border-[2px] w-[100px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                    </div>










                  </div>

                  {/* section two end */}



                  {/* section third start */}

                  <div className="bg-[#FFFFFF] w-full mt-5  gap-5   rounded-[8px] p-10">

                    <h2 className='text-xl text-justify  text-black font-normal'>

                      Room size (optional)
                    </h2>

                    <div className="flex max-lg:flex-col mt-5  items-center ">



                      <div className="">
                        <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Select the numbers of beds</label>
                        <br />
                        <input type="number" placeholder='0...' className="border-[2px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                      </div>

                      <div className="">
                        <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Number of rooms (of this type)</label>
                        <br />
                        <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">
                          <option value="please">Please Select</option>
                          <option value="singlebed">square feets</option>
                          <option value="doublebed">square meters</option>
                          {/* Add more options as needed */}
                        </select>


                      </div>


                    </div>






                  </div>




                  {/* section third end */}

                  {/* section 4 start */}







                  <div className="bg-[#FFFFFF] w-full mt-5  gap-5   rounded-[8px] p-10">

                    <h2 className='text-xl text-justify  text-black font-normal'>

                      Base price per night
                    </h2>
                    <p className="text-[12px] bg-gray-100 p-2 mt-5">This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing in your property dashboard.</p>




                    <div className="mt-5">
                      <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Price for 0 people
                      </label>
                      <br />
                      <input type="number" placeholder='0...' className="border-[2px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />

                    </div>




                  </div>

                  {/* section 4 end */}

                  <button className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>










                </div>


                <div className="max-md:hidden">
                  <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
                </div>



              </div>







              {/* setion one end */}

















            </>)



          }



















        </>)

      case 3:
        return (<>



          <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Facilities & services
          </h1>
          <p className="text-sm text-black font-normal text-justify mt-5">Now, tell us some general details about your property, such as facilities available, internet, parking and the languages you speak.

          </p>


          <div className="flex max-lg:flex-col  mt-5  gap-5">


            <div className="w-full">
              <div className="bg-[#FFFFFF] w-full  justify-center  rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Parking
                </h2>

                <p className="mt-5 text-[#000000] text-[12px] sm:w-[520px] p-2 bg-gray-100">This information is especially important for those travelling to your accommodation by car.</p>





















                <div className="flex max-lg:flex-col mt-5  gap-5 ">



                  <div className="">
                    <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Is parking available to guests?</label>
                    <br />
                    <select className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" onChange={(e) => setparking(e.target.value)}>
                      <option value="no">No</option>
                      <option value="paid">yes,paid</option>
                      <option value="free">yes,free</option>
                      {/* Add more options as needed */}
                    </select>


                  </div>







                  {
                    parking == "paid" ? (<>

                      <div className="">
                        <br />
                        <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">
                          <option value="Private">Private</option>
                          <option value="Public">Public</option>

                        </select>


                      </div>



                      <div className="">
                        <br />

                        <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" >

                          <option value="onsite">onsite</option>
                          <option value="offsite">offsite</option>
                          {/* Add more options as needed */}
                        </select>


                      </div>

                    </>) : parking == "free" ? (<>
                      <div className="">
                        <br />
                        <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">
                          <option value="Private">Private</option>
                          <option value="Public">Public</option>

                        </select>


                      </div>



                      <div className="">
                        <br />

                        <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" >

                          <option value="onsite">onsite</option>
                          <option value="offsite">offsite</option>
                          {/* Add more options as needed */}
                        </select>


                      </div>




                    </>) : ""
                  }







                </div>









                {
                  parking === "paid" ? (<>

                    <div className="flex max-lg:flex-col mt-5 gap-5">




                      <div className="">
                        <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Do guests need to reserve a parking space?</label>
                        <br />
                        <select className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" onChange={(e) => setparking(e.target.value)}>

                          <option value="reservation">Reservation</option>
                          <option value="noreservation">No,Reservation</option>
                          {/* Add more options as needed */}
                        </select>


                      </div>





                      <div className="">
                        <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Price for parking (per day)</label>
                        <br />
                        <input type="number" placeholder='' className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                      </div>

                    </div>




















                  </>) :

                    parking === "free" ? (<>

                      <div className="flex max-lg:flex-col mt-5 gap-5">




                        <div className="">
                          <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Do guests need to reserve a parking space?</label>
                          <br />
                          <select className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                            <option value="reservation">Reservation</option>
                            <option value="noreservation">No,Reservation</option>
                            {/* Add more options as needed */}
                          </select>


                        </div>






                      </div>




















                    </>) : ""







                }

















              </div>


              <div className="bg-[#FFFFFF] w-full mt-5  justify-center  rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Breakfast

                </h2>



                <div className="">
                  <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Is breakfast available to guests?</label>
                  <br />
                  <select className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                    {/* Add more options as needed */}
                  </select>


                </div>

              </div>




              <div className="bg-[#FFFFFF] w-full mt-5  justify-center  rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Languages spoken

                </h2>

                <p className="text-[12px] mt-5 bg-gray-100 w-[300px] p-2 text-[#000]">What languages do you or your staff speak?</p>


                <div className="">

                  <input type="text" className="border-[2px] h-[45px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                </div>

              </div>





              <div className="bg-[#FFFFFF] w-full mt-5  justify-center  rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Facilities that are popular with guests

                </h2>

                <p className="text-[12px] mt-5 bg-gray-100 sm:w-[450px] p-2 text-[#000]">Guests look for these facilities the most when they’re searching for properties.</p>


                <div className="grid grid-cols-2 mt-5 gap-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Free WiFi</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Bar</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Sauna</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Garden</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Terrace</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Non-smoking rooms</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Family rooms</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Hot tub/Jacuzzi</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Air conditioning</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox text-indigo-600 h-5 w-5" />
                    <span className="ml-2 text-sm">Swimming pool</span>
                  </label>
                </div>


              </div>








              <button className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>





            </div>





            <div className="max-md:hidden">
              <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
            </div>
          </div>



        </>)





      case 4: return (<>


        <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Amenities

        </h1>
        <p className="text-sm text-black font-normal text-justify mt-5">
          These are specific features and services available in your apartment.</p>

        <div className="flex max-lg:flex-col  mt-5  gap-5">


          <div className="w-full">



            <div className="bg-[#FFFFFF] w-full    rounded-[8px] p-10">
              <h2 className='text-xl text-justify  text-black font-normal'>
                Extra bed options

              </h2>
              <p className="text-[#000] bg-gray-100 mt-5 p-2 sm:w-[400px] text-sm">These are the bed options that can be added upon request.</p>


              <p className="text-[#000000] text-[16] font-normal mt-5">Can you provide extra beds?</p>


              <div className="flex mt-5 gap-5">


                <div
                  className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${multipleapart ? 'border-blue-600' : ''}`}
                  onClick={() => {
                    setextrabed(true);
                  }}
                >
                  <input type="radio" checked={extrabed} onChange={() => setextrabed(true)} />
                  <label htmlFor="">Yes</label>
                </div>
                <div
                  className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!extrabed ? 'border-blue-600' : ''}`}
                  onClick={() => {
                    setextrabed(false);
                  }}
                >
                  <input type="radio" checked={!extrabed} onChange={() => setextrabed(false)} />
                  <label htmlFor="">No</label>
                </div>
              </div>


              {
                extrabed && (<>




                  <div className="">
                    <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor=""> Select the number of extra beds that can be added.</label>
                    <br />
                    <input type="number" placeholder='000' className="border-[2px] h-[45px] sm:w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                  </div>





                  <div className='mt-5'>
                    <p className='text-[16px] font-normal mt-5 text-[#000000]'>Tick the box if you can accommodate the following guests in extra beds:</p>
                    <label>
                      <input
                        type="checkbox"
                        name="cot"

                      />
                      Children up to 2 years old in cots
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="children"

                      />
                      Children
                    </label>
                    <br />
                    <label>
                      <input
                        type="checkbox"
                        name="adults"

                      />
                      Adults
                    </label>
                  </div>












                </>)
              }






            </div>

            <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
              <h2 className='text-xl text-justify  text-black font-normal'>
                Amenities

              </h2>
              <p className="text-[#000]  mt-5 sm:w-[400px] text-sm">Tell us about your amenities
              </p>



              <div>
                <p className='text-[#000000] mt-5 text-[16px]'>Most requested by guests</p>
                <label className='text-[14px] mt-5'>
                  <input
                    type="checkbox"
                    name="airConditioning"
                    className='mx-2'

                  />
                  Air conditioning
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    type="checkbox"
                    name="privatePool"
                    className='mx-2'

                  />
                  Private pool
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    type="checkbox"
                    name="washingMachine"
                    className='mx-2'

                  />
                  Washing machine
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    type="checkbox"
                    name="flatScreenTV"
                    className='mx-2'

                  />
                  Flat-screen TV
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    className='mx-2'
                    type="checkbox"
                    name="kitchen"

                  />
                  Kitchen
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    type="checkbox"
                    name="kitchenette"
                    className='mx-2'

                  />
                  Kitchenette
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    className='mx-2'
                    type="checkbox"
                    name="balcony"

                  />
                  Balcony
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    className='mx-2'
                    type="checkbox"
                    name="view"

                  />
                  View
                </label>
                <br />
                <label className='text-[14px] '>
                  <input
                    className='mx-2'
                    type="checkbox"
                    name="terrace"

                  />
                  Terrace
                </label>
              </div>









            </div>

            <button className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>






          </div>

          <div className="max-md:hidden">
            <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
          </div>


        </div>


      </>)





      case 5: return (<>

        <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Property photos
        </h1>
        <p className="text-sm text-black font-normal text-justify mt-5">
          Great photos invite guests to get the full experience of your property, so upload some high-resolution photos that represent all your property has to offer. We will display these photos on your property's page on the Booking.com website.</p>



        <div className="flex max-lg:flex-col  mt-5  gap-5">


          <div className="w-full">
            <div className="bg-[#FFFFFF] w-full flex flex-col items-center justify-center  rounded-[8px] p-10">
              <h2 className='text-xl text-justify  text-black font-normal'>
                Upload at least 1 photo

              </h2>

              <button className='bg-blue-600 p-3 mt-5 text-[#FFF] flex items-center gap-2' onClick={handleButtonClick}>
                <Images /> Add Photos
              </button>
              <input id="fileInput" type="file" multiple style={{ display: 'none' }} onChange={handleFileChange} />
              <div className="mt-5 grid grid-cols-4 gap-4">
                {selectedImages.map((imageUrl, index) => (
                  <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="w-full h-full" />
                ))}
              </div>








            </div>


            <button className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>

          </div>
          <div className="max-md:hidden">
            <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
          </div>





        </div>






      </>)

      case 6:
        return (<>
          <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Policies</h1>
          <p className="text-sm text-black font-normal text-justify mt-5">Specify some basic policies. Do you allow children or pets? How flexible are you with cancellations?</p>










          <div className="flex max-lg:flex-col  mt-5  gap-5">


            <div className="w-full">
              <div className="bg-[#FFFFFF] w-full   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Cancellations

                </h2>

                <p className="text-sm text-black font-normal text-justify mt-5"> When can your guests cancel their booking for free?
                </p>


                <div className="">
                  <label className='text-sm text-black font-normal w-full text-justify mt-5' htmlFor="">Is breakfast available to guests?</label>
                  <br />
                  <select className="border-[2px] h-[45px] w-full mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                    <option value="">1day before arrival</option>
                    <option value="">7day before arrival</option>

                    <option value="">14day before arrival</option>
                    <option value="">30day before arrival</option>
                    {/* Add more options as needed */}
                  </select>


                </div>


                <div className="bg-gray-100 p-3 mt-5">


                  <h2 className='text-xl text-justify  text-black font-normal'>
                    Your guests will see this summary when they book

                  </h2>

                  <p className="text-sm text-black font-normal text-justify mt-5">“You may cancel free of charge until 30 days before arrival. You will be charged the total price of the reservation if you cancel in the 30 days before arrival. If you don't show up, the no-show fee will be the same as the cancellation fee.”



                  </p>












                </div>






              </div>



              <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Protect against accidental bookings

                </h2>



                <p className="text-sm text-black font-normal text-justify mt-5">To save you time handling accidental bookings, we automatically waive cancellation fees for guests that cancel within the first 24 hours of a booking being made. You can change this period of time later in your property management platform.
                </p>







              </div>




              <div className=" w-full mt-5 flex  max-lg:flex-col gap-5 justify-between   rounded-[8px]">

                <div className="bg-[#FFFFFF] flex-1  p-5">



                  <h2 className='text-xl text-justify  text-black font-normal'>
                    Guest arrival time

                  </h2>
                  <p className="text-sm">from:</p>

                  <div className="flex  gap-5">

                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>
                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <div className="">


                      <select className="border-[2px] h-[45px] w-full mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                        <option value="">11:30</option>
                        <option value="">12:30</option>


                        {/* Add more options as needed */}
                      </select>


                    </div>




                  </div>


                  <p className="text-sm mt-5">to:</p>
                  <div className="flex  gap-5">

                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>
                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <div className="">


                      <select className="border-[2px] h-[45px] w-full mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                        <option value="">11:30</option>
                        <option value="">12:30</option>


                        {/* Add more options as needed */}
                      </select>


                    </div>




                  </div>










                </div>





                <div className="bg-[#FFFFFF] flex-1 p-5">



                  <h2 className='text-xl text-justify  text-black font-normal'>
                    Guest departure time

                  </h2>
                  <p className="text-sm">from (optional):</p>

                  <div className="flex  gap-5">

                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>
                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <div className="">


                      <select className="border-[2px] h-[45px] w-full mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                        <option value="">11:30</option>
                        <option value="">12:30</option>


                        {/* Add more options as needed */}
                      </select>


                    </div>




                  </div>


                  <p className="text-sm mt-5">to:</p>
                  <div className="flex  gap-5">

                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>
                    <button className="border-[2px] h-[45px] w-[80px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">12:00</button>


                    <div className="">


                      <select className="border-[2px] h-[45px] w-full mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                        <option value="">11:30</option>
                        <option value="">12:30</option>


                        {/* Add more options as needed */}
                      </select>


                    </div>




                  </div>










                </div>










              </div>



              <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Smoking

                </h2>



                <p className="text-sm text-black font-normal text-justify mt-5">
                  Do you allow smoking at your property?

                </p>









                <div className="flex mt-5 gap-5">
                  <div
                    className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${multipleapart ? 'border-blue-600' : ''}`}
                    onClick={() => {
                      setmultipleapart(true);
                    }}
                  >
                    <input type="radio" checked={multipleapart} onChange={() => setmultipleapart(true)} />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div
                    className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!multipleapart ? 'border-blue-600' : ''}`}
                    onClick={() => {
                      setmultipleapart(false);
                    }}
                  >
                    <input type="radio" checked={!multipleapart} onChange={() => setmultipleapart(false)} />
                    <label htmlFor="">No</label>
                  </div>
                </div>



              </div>







              <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Children

                </h2>



                <p className="text-sm text-black font-normal text-justify mt-5">
                  Can you accommodate children? (You can specify the ages and prices later)


                </p>









                <div className="flex mt-5 gap-5">
                  <div
                    className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${multipleapart ? 'border-blue-600' : ''}`}
                    onClick={() => {
                      setmultipleapart(true);
                    }}
                  >
                    <input type="radio" checked={multipleapart} onChange={() => setmultipleapart(true)} />
                    <label htmlFor="">Yes</label>
                  </div>
                  <div
                    className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!multipleapart ? 'border-blue-600' : ''}`}
                    onClick={() => {
                      setmultipleapart(false);
                    }}
                  >
                    <input type="radio" checked={!multipleapart} onChange={() => setmultipleapart(false)} />
                    <label htmlFor="">No</label>
                  </div>
                </div>



              </div>








              <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Pets

                </h2>



                <p className="text-sm bg-gray-100 p-2 text-black font-normal text-justify mt-5">
                  Some guests like to travel with their furry friends. Indicate if you allow pets and if any charges apply.


                </p>


                <div className="flex mt-5 gap-5">


                  <div className="">
                    <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Do you allow pets?</label>
                    <br />
                    <input type="text" placeholder='' className="border-[2px] h-[45px] sm:w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                  </div>
                  <div className="">
                    <label className='text-sm text-black font-normal w-[200px] text-justify mt-5' htmlFor="">Are there additional charges for pets?</label>
                    <br />
                    <input type="text" placeholder='' className="border-[2px] h-[45px] sm:w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800" />


                  </div>




                </div>










              </div>












              <div className="bg-[#FFFFFF] w-full mt-5   rounded-[8px] p-10">
                <h2 className='text-xl text-justify  text-black font-normal'>
                  Minimum stay

                </h2>



                <p className="text-sm  text-black font-normal text-justify mt-5">
                  Do you require a minimum stay for your guests?


                </p>







                <div className="">

                  <select className="border-[2px] h-[45px] w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD] bg-[#FFFFFF] text-gray-800">

                    <option value="">no</option>
                    <option value="">1 night</option>

                    <option value="">3 night</option>
                    <option value="">5 night</option>
                    {/* Add more options as needed */}
                  </select>


                </div>











              </div>










              <button className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]' onClick={()=>setStep(step+1)}>Continue</button>

            </div>
            <div className="max-md:hidden">
              <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
            </div>













          </div>

        </>)

      case 7: return (<>



        <h1 className='text-3xl text-justify mt-5 text-black font-bold'>Payments</h1>
        <p className="text-sm text-black font-normal text-justify mt-5">
          Specify the types of payment you accept, tax details and other options like additional charges</p>










        <div className="flex max-lg:flex-col  mt-5  gap-5">



          <div className="bg-[#FFFFFF] w-full   rounded-[8px] p-10">
            <h2 className='text-xl text-justify  text-black font-normal'>

              Guest payment options
            </h2>



            <p className="text-[#000000] text-[16] font-normal mt-5">Can you charge credit cards at the property?</p>


            <div className="flex mt-5 gap-5">


              <div
                className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${paymentoption ? 'border-blue-600' : ''}`}
                onClick={() => {
                  setpaymentoption(true);
                }}
              >
                <input type="radio" checked={extrabed} onChange={() => setpaymentoption(true)} />
                <label htmlFor="">Yes</label>
              </div>
              <div
                className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!paymentoption ? 'border-blue-600' : ''}`}
                onClick={() => {
                  setpaymentoption(false);
                }}
              >
                <input type="radio" checked={!extrabed} onChange={() => setpaymentoption(false)} />
                <label htmlFor="">No</label>
              </div>
            </div>


            {
              paymentoption == true ? (<>
                <p className='my-5'>Select payment methods:</p>


                <div className='grid gap-5 grid-cols-2'>
                  <div>

                    <label className='flex  items-center gap-2'>
                      <input
                        type="checkbox"
                        name="americanExpress"
                        checked={methods.americanExpress}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={expressimg} alt="American Express" />

                      <div className="">American Express</div>


                    </label>
                  </div>
                  <div>
                    <label className='flex  items-center gap-2'>

                      <input
                        type="checkbox"
                        name="visa"
                        checked={methods.visa}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={visaimg} alt="Visa" />
                      <div> Visa</div>


                    </label>
                  </div>
                  <div>

                    <label className='flex gap-2 items-center'>
                      <input
                        type="checkbox"
                        name="euroMastercard"
                        checked={methods.euroMastercard}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={uerocardimg} alt="Euro/Mastercard" />

                      <div className="">Euro/Mastercard</div>
                    </label>
                  </div>
                  <div>

                    <label className='flex  items-center gap-2'>
                      <input
                        type="checkbox"
                        name="dinersClub"
                        checked={methods.dinersClub}
                        onChange={handleCheckboxChange}
                      />
                      <img className="w-[80px] h-[40px]" src={dinnerclubimg} alt="Diners Club" />

                      <div>Diners Club</div>

                    </label>
                  </div>
                  <div>
                    <label className='flex items-center gap-2'>

                      <input
                        type="checkbox"
                        name="jcb"
                        checked={methods.jcb}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={jbcimg} alt="JCB" />
                      <div> JCB</div>


                    </label>
                  </div>
                  <div>
                    <label className='flex gap-5 items-center'>
                      <input
                        type="checkbox"
                        name="maestro"
                        checked={methods.maestro}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={maestroimg} alt="Maestro" />

                      <div> Maestro</div>



                    </label>
                  </div>
                  <div>


                    <label className='flex gap-2 items-center'>
                      <input
                        type="checkbox"
                        name="discover"
                        checked={methods.discover}
                        onChange={handleCheckboxChange}
                      />
                      <img className='w-[80px] h-[40px]' src={discoverimg} alt="Discover" />

                      <div>Discover</div>

                    </label>
                  </div>
                  <div>
                    <label className='flex gap-2 items-center'>
                      <input
                        type="checkbox"
                        name="unionPayCreditCard"
                        checked={methods.unionPayCreditCard}
                        onChange={handleCheckboxChange}
                      />
                      <img className="w-[80px] h-[40px]" src={unionimg} alt="UnionPay credit card" />

                      UnionPay credit card
                    </label>
                  </div>
                </div>

              </>) : (<>
                <p className='text-sm mt-5 text-[#000]'>We will inform guests that you only accept cash.</p>


              </>)
            }









          </div>

          <div className="max-md:hidden">
            <div className="w-[300px] flex justify-center items-center p-2    bg-[#ececec] text-[12px] h-[100px]">After you complete registration you will still be able to make changes to your listing before it goes live.</div>
          </div>
        </div>

        <div className="flex max-lg:flex-col  mt-5  gap-5">
          <div className='w-full'>

            <div className="bg-[#FFFFFF] w-full    rounded-[8px] p-10">
              <h2 className='text-xl text-justify  text-black font-normal'>

                Commission payments
              </h2>

              <div className="flex items-center gap-5 max-sm:flex-col justify-between">

                <p className="text-[#000000] text-[16] font-normal mt-5">
                  At the beginning of each month we will send you an invoice for all complete bookings in the previous month.</p>


                <div>
                  <h1 className="text-2xl font-semibold text-[#000000]">Commission percentage:
                  </h1>
                  <h1 className="text-2xl font-semibold text-end text-[green]">12%
                  </h1></div>

              </div>





              <div className="flex flex-col">

                <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">What name should be placed on the invoice (e.g. legal/company name)?</label>
                <input type="text" placeholder='abc...' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

              </div>






              <p className="text-[#000000] text-[16] font-normal mt-5">Does this recipient have the same address as your property?
              </p>


              <div className="flex mt-5 gap-5">


                <div
                  className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${differenceaddress ? 'border-blue-600' : ''}`}
                  onClick={() => {
                    setdifferenceaddress(true);
                  }}
                >
                  <input type="radio" checked={differenceaddress} onChange={() => setdifferenceaddress(true)} />
                  <label htmlFor="">Yes</label>
                </div>
                <div
                  className={`border-[1px] cursor-pointer flex gap-5 rounded-sm p-2 w-[100px] border-[#ADADAD] ${!differenceaddress ? 'border-blue-600' : ''}`}
                  onClick={() => {
                    setdifferenceaddress(false);
                  }}
                >
                  <input type="radio" checked={!differenceaddress} onChange={() => setdifferenceaddress(false)} />
                  <label htmlFor="">No</label>
                </div>
              </div>


              {
                differenceaddress && (<>

                  <div className="flex flex-col ">
                    <div className="flex flex-col">

                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Street address</label>
                      <input type="text" name="basicInfo" placeholder='eg.123 Easy Street' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                    </div>

                    <div className="flex flex-col">

                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Address line 2</label>
                      <input type="text" name="basicInfo" placeholder='unit number,suite,floor,building etc' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                    </div>

                    <div className="flex flex-col">

                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">Country/region</label>
                      <input type="text" placeholder='country name' name="basicInfo" className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                    </div>

                    <div className="flex flex-col">

                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">City</label>
                      <input type="text" name="basicInfo" placeholder='City' className="border-[2px] sm:w-[400px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                    </div>

                    <div className="flex flex-col">

                      <label className='text-sm text-black font-normal sm:w-[400px] text-justify mt-5 ' htmlFor="">  Post Code</label>
                      <input type="text" name="basicInfo" placeholder='postcode' className="border-[2px] sm:w-[200px] mt-5 border-opacity-4 outline-blue-600 p-2 border-[#ADADAD]" />

                    </div>




                  </div>



                </>)
              }







            </div>

            <Link  to="/" className='bg-blue-600 border-0 mt-5 p-2 flex justify-center items-center w-full text-[16px] font-normal text-[#FFFFFF]'>Complete Registration</Link>
          </div>
          <div className="max-md:hidden">
            <div className="w-[300px] p-2    bg-[#ececec] text-[12px]">

              <p className="text-[12px]">How your commission works for you!</p>
              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]"> No hidden fees one flat commission rate</p>

              </div>

              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]">Pay only for bookings that stay</p>

              </div>
              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]">24/7 personal support by phone or e-mail</p>

              </div>
              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]">Strong search engine presence for more bookings</p>

              </div>

              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]">Property advice and analytics to increase performance</p>

              </div>
              <div className="flex mt-2 gap-2 ">

                <img className='w-[20px] h-[20px]' src={arrow} alt="" />
                <p className="text-[12px]">Instant confirmations to save you time</p>

              </div>

            </div>
          </div>

        </div>











      </>)




      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="mx-auto padding-x ">
        <div className="w-full   overflow-x-auto  rounded-md overflow-hidden flex justify-stretch items-center">
          {tabs.map((tab, index) => (
            <span
              key={index}
              className={` text-base font-normal mx-2 flex-1 text-center py-2 cursor-pointer ${step >= index+1 ? "text-blue-500 font-bold border-b-[3px] text-xl border-blue-600" : ""}`}
              onClick={() => setStep(index+1)}
            >
              {tab.title}
            </span>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {renderFormStep()}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
