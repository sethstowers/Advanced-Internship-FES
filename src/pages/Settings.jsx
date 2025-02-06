import React, { useEffect } from "react";
import loginImage from "../assets/loginImage.webp";
import SearchBar from "../components/SearchBar";

const Settings = ({
  setNavActiveLink,
  user,
  isSignedIn,
  setLoginModalOpen,
  setMobileNavOpen
}) => {
  useEffect(() => {
    setNavActiveLink("settings");
  }, []);
  return (
    <div className="ml-[196px] max-md:ml-0 max-md:w-full w-[calc(100vw-200px)]">
       <SearchBar setMobileNavOpen={setMobileNavOpen}/>
      <div className="w-full max-w-[1070px] mx-auto px-6 flex gap-4 py-10">
        <div className="w-full">
          <h2 className="w-full text-[32px] text-[#032b41] font-bold mb-8 pb-4 leading-tight  border-b-[1px] border-[#e1e7ea]">
            Settings
          </h2>
          {isSignedIn ? (
            <>
              <div className="flex flex-col gap-2 pb-6 mb-8 border-b-[1px] border-[#e1e7ea]">
                <h1 className=" text-[18px] text-[#032b41] font-bold leading-tight">
                  Your Subscription plan
                </h1>
                <h2 className=" text-[16px] text-[#032b41] leading-tight">
                  premium-plus
                </h2>
              </div>
              <div className="flex flex-col gap-2 pb-6 mb-8">
                <h1 className=" text-[18px] text-[#032b41] font-bold leading-tight">
                  Email
                </h1>
                <h2 className=" text-[16px] text-[#032b41] leading-tight">
                  {user.isAnonymous ? "Anonymous" : user.email}
                </h2>
              </div>
            </>
          ) : (
            <div className="w-full flex items-center flex-col">
              <img src={loginImage} alt="" className="w-full max-w-[460px]" />
              <h1 className="text-[24px] text-[#032b41] font-bold leading-tight mb-4">
                Log in to your account to see your details.
              </h1>
              <button
                className="w-[180px] h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200"
                onClick={() => setLoginModalOpen(true)}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
