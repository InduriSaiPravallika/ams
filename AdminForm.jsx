import React from "react";
import Login from "../components/Login";

const AdminForm = () => {
  return (
    <div className="p-8 mx-auto max-w-4xl">
      <h2 className="font-bold uppercase text-center text-blue-500">
        Admin Login
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
        <Login link="/admin" linkfg="/" linkcreate="/create" />
        <div className="hidden sm:block w-full h-full">
          <img
            src="assets/gif/car-safety-edit.gif"
            alt="car-safety-edit"
            width={400}
            height={225}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
