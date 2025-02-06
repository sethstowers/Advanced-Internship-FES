import axios from "axios";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setMobileNavOpen, mobileNavOpen }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchSearchedData = async (searchValue) => {
    setLoading(true);
    const res = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${searchValue}`
    );
    console.log(res.data);
    setSearchResults(res.data);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="border-b-[1px] border-[#e1e7ea] h-[80px] w-full">
      <div className="mx-auto px-8 flex justify-end items-center h-full w-full max-w-[1070px] relative ">
        <div className="flex items-center gap-4 w-full max-w-[380px]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for books"
              className="bg-[#f1f6f4] h-10 w-full  rounded-lg text-[13px] pl-4 pr-13 outline-0 border-[2px] border-[#e1e7ea]"
              onChange={(e) => (
                fetchSearchedData(e.target.value),
                setSearchValue(e.target.value)
              )}
              value={searchValue}
            />
            <button className="absolute right-3 top-1/2 translate-y-[-50%] border-l-[2px] border-[#e1e7ea] h-full pl-2">
            {searchValue < 1 ? <IoSearch className="text-[24px]" /> : <IoClose className="text-[24px] cursor-pointer" onClick={() => setSearchValue('')}/>}
               
            </button>
          </div>
          <IoIosMenu
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setMobileNavOpen((prevValue) => !prevValue)}
          />
        </div>
        <div
          className={`absolute top-[108px] max-md:w-full max-md:right-0 bg-white max-h-[640px] right-6 shadow-[0px_0px_5px_3px_rgba(0,_0,_0,_0.1)]  z-50 p-4 
            ${searchResults.length < 6 || loading ? "" : "overflow-y-scroll"}
    
            ${searchValue === "" ? "hidden" : ""}`}
        >
          <ul className={`${loading ? "flex flex-col gap-3" : ""}`}>
            {searchResults.length > 0 ? (
              loading ? (
                new Array(4)
                  .fill("")
                  .map((card, index) => (
                    <li
                      className="w-[390px] h-[120px]  p-4 flex gap-6 bg-gray-200 cursor-pointer"
                      key={index}
                    ></li>
                  ))
              ) : (
                searchResults.map((result) => (
                  <li
                    className="w-[390px] p-4 flex gap-6 hover:bg-gray-100 cursor-pointer border-b-[1px] border-gray-200"
                    onClick={() => (navigate(`/book/${result.id}`), location.reload())}
                    key={result.id}
                  >
                    <img src={result.imageLink} className="w-[80px]" alt="" />
                    <div>
                      <h1 className="text-[16px] text-[#032b41] font-bold mb-2 leading-tight">
                        {result.title}
                      </h1>
                      <h2 className="text-[14px] text-[#6b757b] mb-2 leading-tight">
                        {result.author}
                      </h2>
                      <div className="flex items-center gap-1">
                        <FaRegClock className="text-[14px] text-[#6b757b] leading-tight" />
                        <p className="text-[14px] text-[#6b757b] leading-tight">
                          03:24
                        </p>
                      </div>
                    </div>
                  </li>
                ))
              )
            ) : (
              <li className="w-[390px] p-4 flex gap-6">
                <div className="w-full">
                  <h1 className="text-[16px] text-[#032b41] font-bold leading-tight text-center">
                    No books found.
                  </h1>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
