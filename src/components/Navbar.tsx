import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <h1 className="w-full m-0 flex justify-center bg-[#4a566c] text-white font-bold text-xl md:text-3xl p-4 shadow fixed z-50">
        Heimdall Movies
      </h1>
    </Link>
  );
};

export default Navbar;
