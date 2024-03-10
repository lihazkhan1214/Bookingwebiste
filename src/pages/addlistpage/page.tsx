import HomeImage from "../../assets/static/HOME.png"
import Apartment from "../../assets/static/aparment.png"
import hetels from "../../assets/static/hotels.png";
import elipes from "../../assets/images/elipes.png"
import { Navbar } from '../../components/Navbar';
import ListCard from "../../components/listCard";

  interface HavhCard {
    image: string;
    title: string;
    desc: string;
    link:string;
  }
 
  export const havhcards:HavhCard[] = [

    {
      image: Apartment,
      link:"/apartment",
      title: "Apartment",
      desc: "Furnished and self-catering accommodation, where guests rent the entire place.",
    },

    {
    image: HomeImage,
    link:"/homes",
    title: "Homes",
    desc: "Properties like apartments, holiday homes, villas, etc."
  },
    
    {
    image: hetels,
    link:"/hotels",
    title: "Hotel, B&Bs, and more",
    desc: "Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.",
  },
    
  ];

function ADDlistpage() {
  return (
   <>
   <Navbar bg="bg-[#0351FC]" />
   <section className="w-full py-10 bg-[#F2F4FD]  relative">
      <img src={elipes} alt="elipes"  className="absolute hidden md:block top-20 right-10 w-[250px]"/>
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h2 className="text-3xl text-center text-black font-bold border-b-2 border-blue-600 pb-4">List your property on LaterStay.com and start welcoming guests in no time!</h2>

          <p className="text-lg text-center font-normal text-[#000] ">To get started, choose the type of property you want to list on Laterstay.com</p>
         
          <div className="flex w-full justify-center gap-5 items-center flex-wrap">
            
            {havhcards.map((card , ind:number)=>(
              
            

            <ListCard card={card} key={ind}/>
            ))}
          </div>
        </div>

      </div>

    </section>
 
   
   
   
   
   </>
  )
}

export default ADDlistpage