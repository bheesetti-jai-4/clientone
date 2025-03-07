
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const navagate = useNavigate()
  const number=9381235807
  


  const navigate = [
    { name: "Home", alllinks:"/home" },
    { name: "Profiles", alllinks:"/Profile" },
    { name: "blogs", alllinks:"/blog" },
    { name: "service", alllinks:"/service" },
    { name: "Galary", alllinks:"/galary" },
    // { name: "Rating", alllinks:"/rating" },
  ];

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center  z-50">
        {/* Logo */}
        <h1 className="text-black font-bold text-3xl cursor-pointer "
        onClick={()=>navagate("/")}
        >Cardiology</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navigate.map((item, index) => (
            <li key={index}>
              <a onClick={()=>navagate(item.alllinks)}  className="text-black text-xl font-semibold hover:text-red-500 cursor-pointer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (Dropdown) */}
        <ul className={`md:hidden absolute left-0 w-full  z-50 bg-gray-100 transition-all duration-300 ${isOpen ? "top-16" : "top-[-200px]"}`}>
          {navigate.map((item, index) => (
            <li key={index} className="text-black text-center p-2 border-b cursor-pointer border-gray-300">
              <a  onClick={() => {setIsOpen(false),navagate(item.alllinks)}}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Company Name */}
        {/* whats app cals  */}
        {/* <div className="hidden md:block">
          <h1 className="text-black font-bold cursor-pointer bg-red-500 p-2 rounded-lg"
          onClick={()=>window.location.href = `tel:${number}`}
          >call {number} </h1>
        </div> */}

        {/* phone calls */}
         <div className="hidden md:block">
          <h1 className="text-black font-bold cursor-pointer bg-red-500 p-2 rounded-lg"
          onClick={()=>window.open = (`tel:${number}`,"_self")}
          >call {number} </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

