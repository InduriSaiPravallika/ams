import React from "react";
import Create from "../components/Create";

const Register = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="hidden sm:block w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-2Z3an9txHQSExt053UQzZEHkW_G0HZoXy_k1uQL2A&s"
            alt="undraw_navigator_a479.png"
            width={400000000}
            height={22500000000}
          />
        </div>
        <Create />
      </div>
    </div>
  );
};

export default Register;
