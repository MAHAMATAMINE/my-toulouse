import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4 bg-gray-800">
      <h1 className="text-xl font-bold text-white">Toulouse Spots</h1>
      <div className="flex flex-row items-center space-x-6">
        <Link to="/" className="text-xl text-rose-600 hover:text-rose-400">
          Home
        </Link>
        <Link to="/add" className="text-xl text-rose-700 hover:text-rose-500">
          Add Spot
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
