import React from "react";

export const navMenu = () => {
  return (
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
  );
};

export default navMenu;
