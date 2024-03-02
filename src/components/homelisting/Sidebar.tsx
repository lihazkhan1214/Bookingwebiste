import { Star } from "lucide-react";

const Sidebar = () => {
  const facilities = [
    {
      title: "Free Wifi",
      id: "fw",
    },
    {
      title: "Parking",
      id: "par",
    },
    {
      title: "Family room",
      id: "fr",
    },
    {
      title: "No-smoking room",
      id: "nsr",
    },
    {
      title: "Airport Shuttle",
      id: "as",
    },
    {
      title: "Restaurant",
      id: "res",
    },
    {
      title: "Fitness center",
      id: "fc",
    },
    {
      title: "Pet friendly",
      id: "pf",
    },
    {
      title: "Swimming Pool",
      id: "sp",
    },
    {
      title: "Spa",
      id: "spa",
    },
    {
      title: "24-hours front desk",
      id: "fd",
    },
  ];
  const roomFacilities = [
    {
      title: "Air Conditioning",
      id: "ac",
    },
    {
      title: "Private Bathroom",
      id: "pb",
    },
    {
      title: "Sea View",
      id: "sview",
    },
    {
      title: "Private pool",
      id: "pripool",
    },
    {
      title: "Kitchen",
      id: "kitch",
    },
    {
      title: "Hot Tub",
      id: "hotT",
    },
    {
      title: "Bath Tub",
      id: "bathtub",
    },
    {
      title: "Spa Tub",
      id: "spatub",
    },
    {
      title: "Terrace",
      id: "terrace",
    },
    {
      title: "Shower",
      id: "shower",
    },
    {
      title: "Refrigrator",
      id: "ref",
    },
    {
      title: "Washing Machine",
      id: "washM",
    },
    {
      title: "Tv",
      id: "tv",
    },
    {
      title: "Toilet paper",
      id: "tiolet paper",
    },
    {
      title: "Coffee/maker",
      id: "coffemaker",
    },
    {
      title: "Heating",
      id: "heating",
    },
  ];
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
                placeholder="00"
                className="border-none outline-none w-2/3"
              />
              <span className="text-[#0351FC] font-semibold">US $</span>
            </div>
            <div className="flex-1 flex justify-between items-center border border-gray-400 rounded-md  py-1 px-2">
              <input
                type="number"
                placeholder="3000+"
                className="border-none outline-none w-2/3"
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
            <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
              <span>1</span>
              <Star size={15} color="#FFC661" fill="#FFC661" />
            </button>
            <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
              <span>2</span>
              <Star size={15} color="#FFC661" fill="#FFC661" />
            </button>
            <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
              <span>3</span>
              <Star size={15} color="#FFC661" fill="#FFC661" />
            </button>
            <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
              <span>4</span>
              <Star size={15} color="#FFC661" fill="#FFC661" />
            </button>
            <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
              <span>5</span>
              <Star size={15} color="#FFC661" fill="#FFC661" />
            </button>
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
