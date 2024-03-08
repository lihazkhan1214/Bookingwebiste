import { Link } from "react-router-dom";
interface HavhCard {
    image: string;
    title: string;
    desc: string;
    link:string;
  }
const ListCard: React.FC<{ card: HavhCard }> = ({ card })=> {
  return (
    <div className=" bg-white z-10 p-10 border border-[#ADADAD] rounded-md flex flex-col justify-center items-center gap-2 text-center w-[277px] h-[320px]">
        <img src={card.image} alt=""  className="w-[110px] h-[110px]"/>
        <h2 className="text-base text-black font-bold mt-2">{card.title}</h2>
        <p className="text-sm h-[40px] text-black opacity-[50%]">{card.desc}</p>
        <Link to={card.link} className="text-blue-600  mt-5  text-base  border border-blue-600 rounded-sm py-2 px-6 cursor-pointer">
           List Your Property
          </Link>
    </div>
  );
};

export default ListCard;
