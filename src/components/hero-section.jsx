import Pumpkin from "../assets/Pumpkin-1.png";
import Atropos from "atropos/react";
export const HeroSection = () => (
  <div className=" flex flex-col lg:flex-row lg:justify-center lg:items-center lg:px-40 lg: overflow-hidden ">
    <div className=" justify-center  text-center  lg:text-left lg:w-[600px] ">
      <h1 className="text-6xl font-jolly text-center lg:text-[100px] lg:text-left ">
        Ready for <br></br>Trick or Treat
      </h1>
      <p className="font-poppins text-center mb-5 lg:text-left">
        Don't wait for the trick or treating, pumpkings, sweets and candy await
        you tonight. Happy adventures
      </p>
      <button className="sm:text-nrm lg:text-sm font-poppins py-4 px-4 bg-primaryColor rounded-lg mb-10">
        send pumpkins
      </button>
    </div>

    <Atropos className="my-atropos " shadow={false} highlight={false} data-atropos-offset={10} >
      <div className="justify-items-center relative  mx-auto flex justify-center lg:justify-start ">
        <img
          src={Pumpkin}
          alt=""
          className="  w-[300px] lg:w-[500px] hero_image1"
        />
      </div>
    </Atropos>
  </div>
);

export default HeroSection;