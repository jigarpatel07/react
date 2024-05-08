import React from "react";
import imgData from "../assets/bgImage.jpg"
const AuthLayout = ({ children }: any) => {


  return (
    <div className="h-full flex bg-[#000000] overflow-y-auto">
      {/* <div className={` rounded-e-3xl w-[40%] min-h-screen object-cover bg-center bg-cover bg-no-repeat`} style={{
        backgroundImage: `url(${imgData})`
      }}>
      </div> */}
      <div className=" w-full">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
