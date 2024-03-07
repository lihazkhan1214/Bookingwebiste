import { useState } from "react";
import loginImg from "../../assets/images/loginImage.jpg";
import  logo from "../../assets/images/blogo.png"
type PopupId = number | null;
const SignUp = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupId>(null);

  const openPopup = (popupId: number) => {
    setCurrentPopup(popupId);
  };

  const closePopup = () => {
    setCurrentPopup(null);
  };

  console.log(currentPopup, closePopup);
  return (
    <div>
      <section className="text-gray-600 max-w-[80rem] mx-auto body-font relative">
        <div className="container   mx-auto flex justify-center  sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/5 md:w-1/2 rounded-lg overflow-hidden flex justify-start relative">
            <img src={loginImg} alt="image is her!!" />
          </div>
          <div
            className="lg:w-2/4 md:w-1/2 bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 px-16 border"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          >
            <h2 className="flex items-center font-bold text-2xl text-primary">
              <img src={logo} alt="logo" className="w-[200px]"/>
            </h2>
            <h2 className="text-gray-900 text-xl mb-1 sm:mt-6 mt-2 title-font font-bold">
              Create your partner account
            </h2>
            <p className="leading-relaxed mb-5 text-gray-900 font-semibold">
              Create an account to list and manage your property.
            </p>

            <div className="relative sm:mb-9">
              <label className="leading-7 text-sm text-gray-900 font-semibold ">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Email Address"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => {
                (
                  document.getElementById("my_modal_3") as HTMLDialogElement
                ).showModal();
                openPopup(1);
              }}
              className="text-white bg-[#0351FC] border-0 sm:mt-0 mt-6 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Continue
            </button>
            <div className="border my-3"></div>
            <p className="font-semibold text-gray-900 mt-3">
              Questions about your property or the Extranet? Check out{" "}
              <span className="cursor-pointer text-primary">Partner Help </span>{" "}
              or ask another partner in the{" "}
              <span className="cursor-pointer text-primary">
                Partner Community.
              </span>
            </p>

            <button className="text-primary hover:text-white mt-6 border border-primary py-2 px-6 focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg">
              Sign In
            </button>
            <div className="border my-6"></div>
            <p className="font-semibold text-gray-900 mt-3">
              By signing in or creating an account, you agree with our{" "}
              <span className="cursor-pointer text-primary">
                Terms & Conditions{" "}
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-primary">
                Privacy Statement.{" "}
              </span>
            </p>
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default SignUp;
