import { CircleUser, Star } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Jessica G.",
      date: "April 8, 2023",
      desc: "The location of the hotel was perfect for our needs. We were able to easily explore the city and also had access to plenty of great dining options nearby.",
    },
    {
      name: "Jessica G.",
      date: "April 8, 2023",
      desc: "The location of the hotel was perfect for our needs. We were able to easily explore the city and also had access to plenty of great dining options nearby.",
    },
    {
      name: "Jessica G.",
      date: "April 8, 2023",
      desc: "The location of the hotel was perfect for our needs. We were able to easily explore the city and also had access to plenty of great dining options nearby.",
    },
    {
      name: "Jessica G.",
      date: "April 8, 2023",
      desc: "The location of the hotel was perfect for our needs. We were able to easily explore the city and also had access to plenty of great dining options nearby.",
    },
  ];
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl padding-x py-10 flex flex-col justify-center items-center gap-5">
        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">
          Customers Honest Reviews
        </h2>
        <div className="w-full my-10 flex flex-col md:flex-row  justify-center items-start gap-10">
          {/* left */}
          <div className="flex flex-col gap-6 w-full  md:w-[35%] bg-[#e7e7e7] p-4 rounded-md">
            <div className="flex w-full justify-between items-center gap-5">
              <span className="text-2xl ubuntu-bold ">4.5/5</span>
              <span className="text-base ubuntu-regular">4,265 Reviews</span>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">Cleanliness</span>
                <span className="text-base ubuntu-regular">4.3</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">Comfort</span>
                <span className="text-base ubuntu-regular">4.6</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">
                  Staff & Service
                </span>
                <span className="text-base ubuntu-regular">4.8</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">Location</span>
                <span className="text-base ubuntu-regular">4.9</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">
                  Property Condition & Facilities
                </span>
                <span className="text-base ubuntu-regular">4.6</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
            <div className="flex flex-col w-full  gap-3">
              <div className="flex w-full justify-between items-center gap-5">
                <span className="text-base ubuntu-regular">
                  Value For Money
                </span>
                <span className="text-base ubuntu-regular">4.8</span>
              </div>
              <div className="w-full flex items-center rounded-sm overflow-hidden">
                <span className="w-5/6 h-[6px] bg-black"></span>
                <span className="w-[15%] h-[6px] bg-[#ADADAD]"></span>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full flex-col gap-5">
            <div className="flex justify-start items-center gap-5">
              <span className="ubuntu-bold">Sort By:</span>
              <select className="outline-none bg-transparent">
                <option value="" defaultChecked hidden>
                  Rating
                </option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
              <input
                type="date"
                placeholder="date"
                className="outline-none bg-transparent"
              />
            </div>
            <hr className="my-5" />

            {reviews.map((r, i) => (
              <>
                <div key={i} className="w-full flex-col sm:flex-row flex justify-start items-center gap-10">
                  <div>
                    <CircleUser size={100} color="#ADADAD" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-start gap-5">
                      <span className="ubuntu-bold text-xl">{r.name}</span>
                      <span className="ubuntu-regular">{r.date}</span>
                    </div>
                    <p className="ubuntu-regular text-black">
                      {r.desc}
                    </p>
                    <div className="flex justify-start items-center gap-2">
                      <Star color="black" fill="" size={16} />
                      <Star color="black" fill="" size={16} />
                      <Star color="black" fill="" size={16} />
                      <Star color="black" fill="" size={16} />
                      <Star color="black" fill="" size={16} />
                    </div>
                  </div>
                </div>
                <hr className="my-10" />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
