import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import Login from "../../components/Login";
const UserForm = () => {
  const navigate = useNavigate()
  const [passLength, setPassLength] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    type: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      console.log("password is less six character");
      return setPassLength(true);
    }
    if (formData.type === "driver") {
      navigate('/driver')
    } else {
      navigate('/user')
    }
    console.log("successfull");
  };
  return (
    <div className="p-8 mx-auto max-w-4xl">
      <h2 className="font-bold uppercase text-center text-blue-500">
        User Login
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
        <div className="w-full max-w-2xl">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-grey-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                required="required"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-grey-700 text-sm font-bold mb-2"
              >
                User Type
              </label>
              <select
                id="type"
                name="type"
                required="required"
                value={formData.type}
                onChange={handleChange}
                className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">-- select user --</option>
                <option value="driver">Driver</option>
                <option value="passenger">Passenger</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-grey-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                name="password"
                required="required"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
              />
              {passLength && <p className="text-red-500 text-xs italic">
                Please enter a valid password 
              </p>}
              <Link
                to="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <Button className="inline-block align-baseline font-bold text-sm text-white px-3 py-2 rounded bg-blue-500 hover:bg-blue-800">
                Log in
              </Button>
              <Link
                to="/create"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
        {/* <Login link="/user" linkfg="/" linkcreate="/create" /> */}
        <div className="hidden sm:block w-full h-full">
          <img
            src="https://mgchemicals.com/wp-content/uploads/2021/10/Thermal-Management-In-Automobiles-1.jpg"
            alt="car-safety-edit"
            width={4000000000000}
            height={225000000000}
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
