import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import placeholder from "../assets/placeholder.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col justify-between h-screen m-0">
      <Header title={"Titles"} />

      <div className="px-40 pt-5 flex gap-5">
        <Link to="/series">
          <div>
            <div className="bg-[#414141] h-72 place-content-center cursor-pointer">
              <img src={placeholder} alt="" />
            </div>
            <p className="text-xl font-semibold">Popular Series</p>
          </div>
        </Link>

        <Link to="/movies">
          <div className="bg-[#414141] h-72 place-content-center cursor-pointer">
            <img src={placeholder} alt="" />
          </div>
          <p className="text-xl font-semibold">Popular Movies</p>
          </Link>
      </div>

      <Footer />
    </div>
  );
};
