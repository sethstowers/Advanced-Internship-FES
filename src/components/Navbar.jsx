import React from "react";
import logo from "../assets/logo.png";
import { FaHome, FaPen, FaQuestionCircle } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark, IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Navbar = ({ logout, navActiveLink, hideNavBar, isSignedIn, setLoginModalOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      {hideNavBar ? (
        <></>
      ) : (
        <div className="relative">
          <nav>
            <div className="w-[200px] h-screen fixed bg-[#f8fcfc]">
              <div className="w-full flex justify-center pt-4">
                <img src={logo} alt="" className="w-[160px]" />
              </div>
              <div className="h-[700px]">
                <ul className="mt-10">
                  <li
                    className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                    onClick={() => navigate("/for-you")}
                  >
                    <div
                      className={`w-[5px] h-full  mr-2 ${
                        navActiveLink === "for-you" ? "bg-[#2bd97c]" : ""
                      }`}
                    ></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <FaHome className="w-[26px] h-[26px]" />
                    </div>
                    <p className="mt-1">For You</p>
                  </li>

                  <li
                    className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                    onClick={() => navigate("/library")}
                  >
                    <div
                      className={`w-[5px] h-full mr-2 ${
                        navActiveLink === "library" ? "bg-[#2bd97c]" : ""
                      }`}
                    ></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <IoBookmark className="w-[28px] h-[28px]" />
                    </div>
                    <p className="mt-1">My Library</p>
                  </li>
                  <li className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-not-allowed hover:bg-[#f8ecec] duration-200">
                    <div className="w-[5px] h-full  mr-2"></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <FaPen className="w-[22px] h-[22px]" />
                    </div>
                    <p className="mt-1">Highlights</p>
                  </li>
                  <li className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-not-allowed hover:bg-[#f8ecec] duration-200">
                    <div className="w-[5px] h-full  mr-2"></div>
                    <div className="w-[30px]">
                      <IoSearch className="w-[26px] h-[26px]" />
                    </div>
                    <p className="mt-1">Search</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li
                    className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                    onClick={() => navigate("/settings")}
                  >
                    <div
                      className={`w-[5px] h-full  mr-2 ${
                        navActiveLink === "settings" ? "bg-[#2bd97c]" : ""
                      }`}
                    ></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <IoIosSettings className="w-[30px] h-[30px]" />
                    </div>
                    <p className="mt-1">Settings</p>
                  </li>
                  <li className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200">
                    <div className="w-[5px] h-full mr-2"></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <FaQuestionCircle className="w-[26px] h-[26px]" />
                    </div>
                    <p className="mt-1">Help & Support</p>
                  </li>

                  {isSignedIn ? (
                    <li
                      className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                      onClick={() => logout()}
                    >
                      <div className="w-[5px] h-full mr-2"></div>
                      <div className="w-[30px] flex items-center justify-center">
                        <LuLogOut className="w-[28px] h-[28px]" />
                      </div>
                      <p className="mt-1">Log out</p>
                    </li>
                  ) : (
                    <li
                      className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                      onClick={() => setLoginModalOpen(true)}
                    >
                      <div className="w-[5px] h-full mr-2"></div>
                      <div className="w-[30px] flex items-center justify-center">
                        <LuLogOut className="w-[28px] h-[28px]" />
                      </div>
                      <p className="mt-1">Log in</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
          <div className="border-b-[1px] border-[#e1e7ea] h-[80px] w-[calc(100vw-200px)] absolute left-[200px]">
            <div className=" mx-auto px-8 flex justify-end items-center h-full w-full max-w-[1070px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for books"
                  className="bg-[#f1f6f4] h-10 w-[340px] rounded-lg text-[13px] pl-4 pr-13 outline-0 border-[2px] border-[#e1e7ea]"
                />
                <button className="absolute right-3 top-1/2 translate-y-[-50%] border-l-[2px] border-[#e1e7ea] h-full pl-2">
                  <IoSearch className="text-[24px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
