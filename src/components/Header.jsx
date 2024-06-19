import { Link } from "react-router-dom";

export const Header = ({title = "Content"}) => {
  return (
    <header>
        
      <div className="bg-blue-600 flex justify-between px-40 py-5">
        <h1 className="text-4xl font-bold text-white"><Link to="/">DEMO Streaming</Link></h1>
        <div className="flex gap-10 justify-center items-center text-white text-xl">
          <h3 className="font-semibold">Log in</h3>
          <button className="font-semibold bg-[#414141] px-[16px] py-2">
            Start your free trial
          </button>
        </div>
      </div>
      <div className="bg-[#414141] py-5 pl-40 text-white">
        <h2 className="font-semibold text-3xl">Popular {title}</h2>
      </div>
    </header>
  );
};
