import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="lg:flex justify-between items-center h-16 bg-gray-50 px-4 border-b border-black sm:hidden">
      <div>
        <button
          className="font-semibold text-black text-xl hover:bg-[#4183c4] h-16 p-2 px-4 border-r border-black"
          onClick={() => navigate("/")}
        >
          eventyay
        </button>
      </div>

      <div className="flex-grow flex justify-end pr-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-gray-200  px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-400 rounded-xl"
        />
      </div>

      <div>
        <button
          type="button"
          onClick={() => navigate("/pricing")}
          className="hover:bg-slate-300 h-16 p-2 px-4 border-l border-black"
        >
          Pricing
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="hover:bg-slate-300 h-16 p-2 px-4 border-l border-black"
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="text-blue-600 hover:bg-slate-300 h-16 p-2 px-4 border-l border-black"
        >
          Create Event
        </button>
      </div>
    </div>
  );
}

export default Navbar;
