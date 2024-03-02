import Search from "./Search";

const SearchSection = () => {
  return (
    <div className="w-full my-20 py-10 bg-[#F2F4FD]">
      <div className="w-full max-w-7xl mx-auto padding-x   rounded-md flex flex-col gap-10 justify-between items-center">
        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">Find Property</h2>
        <Search/>
      </div>
    </div>
  );
};

export default SearchSection;
