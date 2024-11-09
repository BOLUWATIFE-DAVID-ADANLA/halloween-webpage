import { useState } from "react";
import navMenu from "./Navmenu";
export const Navbar = () => {
    const [isMenuOpen, setIsmenuOpen] = useState(false);

    const handleToggle = ()=> setIsmenuOpen(!isMenuOpen);
    const handleMenuitemClick = ()=> setIsmenuOpen(false);

    //
  return (
    <nav className="mb-5 flex items-center justify-between py-6 px-6">
        <h1 className="text-textColor font-poppins text-nrm lg:pl-24  ">Halloween</h1>
        <div>
            {/* button  hamburger */}
            <button className="lg:hidden  md:hidden" onClick={handleToggle}>
                <img src="src\assets\menu-hamburger-svgrepo-com.svg" className="w-8 h-8"/>
            </button>
            {/* navbar items  */}
            {isMenuOpen && (
              <div>
              <div className=" p-40, , bg-backgroundColor">
                <div className="absolute top-0 left-0 w-full h-[300px] font-poppins text-center p-10 mt-2 bg-backgroundColor shadow-md rounded">
                  <ul className="p-2">
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="${handleMenuitemClick}">Home</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="${handleMenuitemClick}">Events</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="${handleMenuitemClick}">Visit Us</a>
                    </li>
                    <li className="py-2 px-4 hover:bg-gray-100">
                      <a href="${handleMenuitemClick}">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            )}
        <ul className='${isMenuOpen ? "hidden" : "block"} hidden md:flex lg:flex font-poppins text-textColor text-nrm'>
            <li className="md:pr-10 lg:pr-20"><a href="">Home </a></li>
            <li className="md:pr-10 lg:pr-20"><a href="">Events </a></li>
            <li className="md:pr-10 lg:pr-20"><a href="">visit us </a></li>
            <li className="md:pr-10 lg:pr-40"><a href="">contact us</a></li>
        </ul>
        </div>
      
    </nav>
  )
}
export default Navbar;
