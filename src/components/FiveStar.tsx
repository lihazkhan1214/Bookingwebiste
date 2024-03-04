import { Link } from "react-router-dom"
import img from "../assets/static/5strhero.jpg"
import img1 from "../assets/static/5strhero1.jpg"
import img2 from "../assets/static/5strhero2.jpg"

const FiveStar = () => {
  return (
    <div className="w-full my-20 bg-[#d6d6d6]">
        <div className="mx-auto w-full max-w-7xl padding-x py-20">
            <div className="w-full flex flex-col md:flex-row justify-center items-start gap-10">
                <div className="flex-1 w-full flex justify-center">
                    <img src={img} alt="img" className="w-full md:w[90%] lg:w-[80%] h-[480px] rounded-md"/>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div className="text-7xl text-[#0351FC] font-bold align-base">5 <span className="text-[#000000] text-base ubuntu-regular ml-[-5px] uppercase">Stars</span></div>
                    <h2 className="text-2xl md:text-4xl ubuntu-bold text-black">Our apartments are located in the prime area of well-known cities</h2>
                    <p className="text-sm md:text-base ubuntu-medium text-black">Search millions of apartments, houses, and private office suites for rent with our exclusive hotels & apartments Platform</p>
                    <Link to={"/homelisting"}>
                    <button className="text-[#0351FC] ubuntu-bold pb-[2px] border-b-2 w-max border-[#0351FC]">View All Apartments</button>
                    </Link>

                </div>
            </div>
            <div className="w-full hidden lg:flex justify-center items-baseline gap-5">
                <img src={img1} alt="" className="w-[250px] h-[300px] rounded-md mt-[-150px] ml-[250px]"/>
                <img src={img2} alt="" className="w-[350px] rounded-md mt-[-40px] ml-"/>


            </div>

        </div>

    </div>
  )
}

export default FiveStar