import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";

const UserDashboard = () => {
  const [menu, setMenu] = useState(false);

  const styles = {
    display: "block",
    backgroundColor: "green",
    color: "white",
    padding: "15px",
  };

  const display = {
    display: menu ? "block" : "none",
  };

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-300">
      <div className="w-full hidden md:block md:w-[25%] bg-white">
        <div className="flex justify-between items-center mb-8 p-4 border-b-2">
          <FaUserCircle size={18} />
          <strong>Welcome User</strong>
        </div>
        <ul className="py-2">
          <li className="mb-4">
            <NavLink
              to="."
              className="px-4 py-2"
              style={({ isActive }) => (isActive ? styles : null)}
              end
            >
              <TbLayoutDashboard style={{ display: "inline" }} /> Dashboard
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="view"
              className="px-4 py-2"
              style={({ isActive }) => (isActive ? styles : null)}
            >
              <MdDashboard style={{ display: "inline" }} /> View Vechicle
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="booking"
              className="px-4 py-2"
              style={({ isActive }) => (isActive ? styles : null)}
            >
              <MdDashboard style={{ display: "inline" }} /> Booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-[75%]">
        <div className="flex justify-between items-center mb-4 bg-green-500 h-[58px]">
          <h2 className="ml-4 uppercase font-bold text-white">
            Dashboard
          </h2>
          <div className="flex flex-end relative px-4 py-2 md:hidden">
            <button className="px-4 py-2 text-white" onClick={handleMenu}>
              <HiMenu size="24" />
            </button>
            <div
              className="w-[250px] absolute hidden top-0 right-0 bg-white"
              style={display}
            >
              <div className="flex justify-between items-center mb-8 p-4 border-b-2">
                <FaUserCircle size={18} />
                <button onClick={handleMenu}>
                  <FaTimes size={18} />
                </button>
              </div>
              <ul className="py-2">
                <li className="mb-4">
                  <NavLink
                    to="."
                    className="px-4 py-2"
                    style={({ isActive }) => (isActive ? styles : null)}
                    end
                  >
                    <TbLayoutDashboard style={{ display: "inline" }} />{" "}
                    Dashboard
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="view"
                    className="px-4 py-2"
                    style={({ isActive }) => (isActive ? styles : null)}
                  >
                    <MdDashboard style={{ display: "inline" }} /> View Vechicle
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-center items-center p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
