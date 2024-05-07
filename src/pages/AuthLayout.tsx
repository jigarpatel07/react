import React from "react";
import imgData from "../assets/bgImage.jpg"
const AuthLayout = ({ children }: any) => {


  return (
    <div className="h-screen flex bg-[#000000]">
      <div className={` rounded-e-3xl w-[40%] object-cover bg-center bg-cover bg-no-repeat`} style={{
        backgroundImage: `url(${imgData})`
      }}>
        <h1>hello</h1>
      </div>
      <div className=" w-[60%]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
