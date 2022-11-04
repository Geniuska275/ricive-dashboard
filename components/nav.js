import React from "react";
import { NavLinks } from "./NavDb";
import { FiSearch } from "react-icons/fi";
import { LogoutIcon } from "@heroicons/react/outline";
import { MdOutlineCancel } from "react-icons/md";

function Nav() {
  return (
    <nav className="col-span-2 border-r border-gray-100  bg-white min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">
        <div className="flex  flex-col items-center py-3 px-1 gap-2 ">
          <img src="ricivelog.jpg" className=" w-full xl: flex" />
          <div className="mt-6 border w-full flex justify-between items-center rounded xl:text-center ">
            <FiSearch
              style={{ color: "gray", fontSize: "25px", margin: "5px" }}
            />

            <input
              type={"search"}
              placeholder="Search"
              className="border-none xl:flex hidden focus:border"
            />
          </div>
        </div>
        <div className="mb-8  flex-col">
          {NavLinks.slice(0, 6).map((link) => (
            <div
              key={link.id}
              className="flex flex-row px-5 mb-2 p-3 hover:bg-lime-100 rounded text-lime-700 cursor-pointer"
            >
              <span>{link.icon}</span>
              <h1 className="text-base text-black font-bold px-4 xl:flex hidden hover:text-lime-700">
                {link.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex mt-6 flex-col">
          {NavLinks.slice(6, 8).map((link) => (
            <div
              key={link.id}
              className="flex flex-row gap-1 px-5 mb-6 p-3 hover:bg-lime-100 rounded text-lime-700 cursor-pointer"
            >
              <span>{link.icon}</span>
              <h1 className="text-base text-black font-bold px-4 xl:flex hidden hover:text-lime-700">
                {link.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="rounded bg-white shadow p-4 hover:shadow-lg xl:grid hidden">
          <div className="flex  justify-between items-center">
            <h1 className="font-bold text-black">Monthly Budget</h1>
            <MdOutlineCancel style={{ color: "gray", fontSize: "25px" }} />
          </div>
          <span className="font-bold text-center text-gray-500">
            You are at 80% of your budget.
          </span>
          <div className="flex justify-around items-center m-5">
            <span className="font-bold text-gray-600">Dismiss</span>
            <span className="font-bold text-lime-600">Upgrade Plan</span>
          </div>
        </div>

        <div className="rounded bg-white shadow mt-8 p-4 hover:shadow-lg xl:flex hidden">
          <div className="flex  justify-between p-6items-center">
            <img src="KINGSLEY1.jpg" className="rounded-3xl w-10 h-10" />
            <div>
              <h1 className="font-bold text-gray-900">Kingsley Aigbojie</h1>
              <h4 className="font-bold text-gray-400">Aigbojie@ricive.com</h4>
            </div>
            <LogoutIcon className="Nav-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
