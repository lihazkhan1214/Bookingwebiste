import React, { useState, ReactElement } from "react";
import FacilitiesPage from "../formcomponents/Facilities_Services/Facilities";
import BasicPage from "../formcomponents/basic_info/Basic";
import LayoutPricing from "../formcomponents/layoutAndPricing/Prising";
import AmenitiesPage from "../formcomponents/Amenities/Amenities";
import CustomInput from "../formcomponents/Photos/Photos";
import PoliciesPage from "../formcomponents/Policies/Policies";
import PaymentPage from "../formcomponents/Payments/Payment";

interface Menu {
  title: string;
  component: ReactElement;
  gap?: string;
}

const MultiStepForm: React.FC = () => {






  const handleClick = (component: ReactElement, index: number) => {
    setSelectedComponent(component);
    setCurrentStep(index);
  };

  const handleContinue = (nextStep: number) => {
    if (nextStep < Menus.length) {
      setSelectedComponent(Menus[nextStep].component);
      setCurrentStep(nextStep);
    }
  };
  const [selectedComponent, setSelectedComponent] = useState<ReactElement | null>(<BasicPage onContinue={handleContinue} />);
  const [currentStep, setCurrentStep] = useState<number>(0);
  console.log(currentStep)



  const Menus: Menu[] = [
    { title: "BASIC INFORMATION", component: <BasicPage onContinue={handleContinue} /> },

    { title: "LAYOUT & PRICING", component: <LayoutPricing onContinue={handleContinue} /> },
    { title: "Facilities & services", component: <FacilitiesPage onContinue={handleContinue} /> },
    { title: "AMENITIES ", component: <AmenitiesPage onContinue={handleContinue} /> },
    { title: "PHOTOS", component: <CustomInput onContinue={handleContinue} /> },
    { title: "POLICIES", component: <PoliciesPage onContinue={handleContinue} /> },
    { title: "PAYMENTS ", component: <PaymentPage /> },
  ];




  return (
    <div className="bg-gray-100 ">
      <div className="bg-[#002D8F] w-full py-24 sm:px-24 px-6 text-white text-center">
        <h2 className='font-bold md:text-4xl sm:text-3xl text-xl '>Welcome Muhammad Kashif!</h2>
        <p className='w-full my-6 sm:text-xl text-sm'>Start by telling us your property&apos;s name, contact details, and address.</p>
      </div>
      <div className="max-w-[85rem] padding-x mx-auto flex md:flex-row flex-col bg-gray-100 ">
        <div
          className=' md:w-72 mt-10 w-full bg-white rounded-md md:h-screen h-auto p-5  pt-8 relative duration-300'
        >
          <ul className="pt-4">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 
                                  ${Menu.gap ? "mt-1" : "mt-1"} ${index === 0 && "bg-light-white"
                  } `}
              >
                <span className={`text-base font-semibold hover:bg-green-600 hover:text-white w-full duration-200 px-3 py-2 rounded-sm ${Menu.title === selectedComponent?.props?.children && "bg-green-600 text-white"}`} onClick={() => handleClick(Menu.component, index)}>
                  {Menu.title}
                </span>


              </li>
            ))}

            <p className="text-white bg-primary px-4 py-4 rounded-md mt-5">
              After you complete registration you&apos;ll be able to make changes to your listing before it goes live.
            </p>
          </ul>
        </div>
        <div className="h-auto ml-6 my-4 flex-1 ">
          {selectedComponent}
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm;
