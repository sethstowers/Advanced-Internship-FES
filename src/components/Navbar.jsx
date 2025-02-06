import React from "react";
import logo from "../assets/logo.png";
import { FaHome, FaPen, FaQuestionCircle } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark, IoClose, IoMenu, IoSearch } from "react-icons/io5";
import { IoIosMenu, IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({
  logout,
  navActiveLink,
  hideNavBar,
  isSignedIn,
  setLoginModalOpen,
  playerFontSize,
  setPlayerFontSize,
  mobileNavOpen,
  setMobileNavOpen,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {hideNavBar ? (
        <></>
      ) : (
        <div className="relative">
          <nav>
            <div
              className={`w-[200px] max-md:w-[350px] h-screen fixed bg-[#f8fcfc] z-50 max-md:-left-[300px] ease-in-out duration-200 ${
                mobileNavOpen
                  ? "max-md:translate-x-[300px]"
                  : "max-md:-translate-x-[300px]"
              }`}
            >
              <div className="absolute right-4 top-4">
                <IoClose
                  className="text-[32px] text-[#032b41] cursor-pointer md:hidden"
                  onClick={() => setMobileNavOpen(false)}
                />
              </div>
              <div className="w-full flex justify-center pt-4 max-md:justify-start max-md:pl-6">
                <img src={logo} alt="" className="w-[160px]" />
              </div>
              <div
                className={`${
                  navActiveLink === "player"
                    ? "h-[620px] max-md:h-[460px]"
                    : "h-[700px] max-md:h-[620px]"
                }`}
              >
                <ul className="mt-10">
                  <li
                    className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                    onClick={() => (
                      navigate("/for-you"), setMobileNavOpen(false)
                    )}
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
                    onClick={() => (
                      navigate("/library"), setMobileNavOpen(false)
                    )}
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
                  <li
                    className={`flex items-center gap-2 text-[#032b41] h-[60px] mb-2 ${
                      navActiveLink === "player" ? "" : "hidden"
                    }`}
                  >
                    <div className="flex items-center gap-2 ml-[30px] ">
                      <p
                        className={`text-[#032b41] text-[16px] font-bold leading-none  cursor-pointer ${
                          playerFontSize === "16"
                            ? "border-b-[2px] border-[#2bd97c]"
                            : ""
                        }`}
                        onClick={() => (
                          setPlayerFontSize("16"), setMobileNavOpen(false)
                        )}
                      >
                        Aa
                      </p>
                      <p
                        className={`text-[#032b41] text-[18px] font-bold leading-none  cursor-pointer ${
                          playerFontSize === "18"
                            ? "border-b-[2px] border-[#2bd97c]"
                            : ""
                        }`}
                        onClick={() => (
                          setPlayerFontSize("18"), setMobileNavOpen(false)
                        )}
                      >
                        Aa
                      </p>
                      <p
                        className={`text-[#032b41] text-[22px] font-bold leading-none cursor-pointer ${
                          playerFontSize === "22"
                            ? "border-b-[2px] border-[#2bd97c]"
                            : ""
                        }`}
                        onClick={() => (
                          setPlayerFontSize("22"), setMobileNavOpen(false)
                        )}
                      >
                        Aa
                      </p>
                      <p
                        className={`text-[#032b41] text-[26px] font-bold leading-none cursor-pointer ${
                          playerFontSize === "26"
                            ? "border-b-[2px] border-[#2bd97c]"
                            : ""
                        }`}
                        onClick={() => (
                          setPlayerFontSize("26"), setMobileNavOpen(false)
                        )}
                      >
                        Aa
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li
                    className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                    onClick={() => (
                      navigate("/settings"), setMobileNavOpen(false)
                    )}
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
                  <li className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2  hover:bg-[#f8ecec] duration-200 cursor-not-allowed">
                    <div className="w-[5px] h-full mr-2"></div>
                    <div className="w-[30px] flex items-center justify-center">
                      <FaQuestionCircle className="w-[26px] h-[26px]" />
                    </div>
                    <p className="mt-1">Help & Support</p>
                  </li>

                  {isSignedIn ? (
                    <li
                      className="flex items-center gap-2 text-[#032b41] h-[56px] mb-2 cursor-pointer hover:bg-[#f8ecec] duration-200"
                      onClick={() => (logout(), setMobileNavOpen(false))}
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
                      onClick={() => (
                        setLoginModalOpen(true), setMobileNavOpen(false)
                      )}
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
          {/* <div className="border-b-[1px] border-[#e1e7ea] h-[80px] w-[calc(100vw-200px)] max-md:w-full max-md:left-0 absolute left-[200px]">
            <div className=" mx-auto px-8 flex  justify-end items-center h-full w-full max-w-[1070px] ">
              <div className="flex items-center gap-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for books"
                  className="bg-[#f1f6f4] h-10 w-[340px] max-md:w-[300px] rounded-lg text-[13px] pl-4 pr-13 outline-0 border-[2px] border-[#e1e7ea]"
                />
                <button className="absolute right-3 top-1/2 translate-y-[-50%] border-l-[2px] border-[#e1e7ea] h-full pl-2">
                  <IoSearch className="text-[24px]" />
                </button>
              
              </div>
              <IoIosMenu className="text-3xl"/>
              </div>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
