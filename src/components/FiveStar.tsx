import { Link } from "react-router-dom"
import img from "../assets/static/5strhero.png"

const FiveStar = () => {
  return (
    <div className="w-full my-20 bg-[#d6d6d6]">
        <div className="mx-auto w-full max-w-7xl padding-x py-10">
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="flex-1">
                    <img src={img} alt="img" className="w-full h-full"/>
                </div>
                <div className="flex-1 flex flex-col gap-5">
                    <div className="text-4xl text-[#0351FC] font-bold align-base">5 <span className="text-black text-base font-medium">star</span></div>
                    <h2 className="text-2xl md:text-4xl ubuntu-bold text-black">Our apartments are located in the prime area of well-known cities</h2>
                    <p className="text-sm md:text-base ubuntu-medium text-black">Search millions of apartments, houses, and private office suites for rent with our exclusive hotels & apartments Platform</p>
                    <Link to={"/homelisting"}>
                    <button className="text-[#0351FC] ubuntu-bold border-b-2 w-max border-[#0351FC]">View All Apartments</button>
                    </Link>

                </div>
            </div>

        </div>

    </div>
  )
}

export default FiveStar