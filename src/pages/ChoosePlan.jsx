import React, { useEffect, useState } from "react";
import PricingImg from "../assets/pricing-top.png";
import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { TbLoader2 } from "react-icons/tb";
import Loader from "../assets/loader.svg";
import { useNavigate } from "react-router-dom";
import Accordion from "../components/Accordion";
import { accordion } from "../constants";
import Footer from "../components/Footer";

const ChoosePlan = ({
  setHideNavBar,
  upgradeToPremiumPlus,
  upgradeToPremium,
  loading,
  userSubscriptionStatus,
  isSignedIn,
  signedInAsGuest
}) => {
  const [selectedPlan, setSelectedPlan] = useState("premium-plus");
  const navigate = useNavigate();

  useEffect(() => {
    setHideNavBar(true);
  }, []);

  useEffect(() => {
    if (userSubscriptionStatus || !isSignedIn || signedInAsGuest) {
      navigate("/for-you");
    }
  }, [userSubscriptionStatus]);

  return (
    <div className="w-full">
      <div className=" max-w-full flex">
        <div className="bg-[#032b41] h-full w-full rounded-bl-[250px] rounded-br-[250px] max-md:rounded-none">
          <div className="h-full w-full max-w-[1000px] mx-auto pt-[48px] px-6 flex flex-col items-center">
            <h2 className="text-white text-[48px] font-bold text-center max-w-[940px] leading-tight mb-10 max-md:text-[26px] max-md:mb-8">
              Get unlimited access to many amazing books to read
            </h2>
            <h2 className="text-white text-[20px] text-center max-w-[940px] leading-tight mb-8 max-md:text-[16px]">
              Turn ordinary moments into amazing learning opportunities
            </h2>
            <img src={PricingImg} className="w-[330px] rounded-t-full" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1070px] px-6 mx-auto pt-16 pb-10">
        <div className="flex gap-6 justify-center mb-14 max-md:flex-col max-md:items-center">
          <div className="flex flex-col items-center max-w-[250px] max-md:max-w-none">
            <AiFillFileText className="text-[#032b41] text-[60px] mb-[12px]" />
            <h2 className="text-[16px] text-[#394547] text-center">
              <span className="font-bold">Key ideas in few mins</span> with many
              books to read
            </h2>
          </div>
          <div className="flex flex-col items-center max-w-[250px] max-md:max-w-none">
            <RiPlantFill className="text-[#032b41] text-[60px] mb-[12px]" />
            <h2 className="text-[16px] text-[#394547] text-center">
              <span className="font-bold">3 million</span> people growing with
              Summarist everyday
            </h2>
          </div>
          <div className="flex flex-col items-center max-w-[250px] max-md:max-w-none">
            <FaHandshake className="text-[#032b41] text-[60px] mb-[12px]" />
            <h2 className="text-[16px] text-[#394547] text-center">
              <span className="font-bold">Precise recommendations</span>{" "}
              collections curate by experts
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-[#032b41] text-[32px] mb-8 font-bold text-center">
            Choose the plan that fits you
          </h2>
          <div
            className={`w-full max-w-[680px] p-6 bg-[#f1f6f4] border-4 rounded-sm flex gap-6 cursor-pointer ${
              selectedPlan === "premium-plus"
                ? "border-[#2bd97c]"
                : "border-[#bac8ce]"
            }`}
            onClick={() => setSelectedPlan("premium-plus")}
          >
            <div>
              <div className="border-2 w-[24px] h-[24px] rounded-full flex justify-center items-center">
                <div
                  className={`bg-black w-[6px] h-[6px] rounded-full ${
                    selectedPlan === "premium-plus" ? "" : "hidden"
                  }`}
                ></div>
              </div>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-2 font-semibold leading-tight max-md:text-[16px]">
                Premium Plus Yearly
              </h2>
              <h1 className="text-[#032b41] text-[24px] mb-2 font-bold leading-tight max-md:text-[20px]">
                $99.99/year
              </h1>
              <p className="text-[#6b757b] text-[14px] leading-tight max-md:text-[12px]">
                7-day free trial included
              </p>
            </div>
          </div>
          <div className=" flex items-center my-6">
            <div className="w-[100px] h-[1px] bg-[#bac8ce]"></div>
            <div className="text-[14px] text-[#394547] font-medium login__seperator mx-6">
              or
            </div>
            <div className="w-[100px] h-[1px] bg-[#bac8ce]"></div>
          </div>
          <div
            className={`w-full max-w-[680px] p-6 bg-[#f1f6f4] border-4 rounded-sm flex gap-6 cursor-pointer ${
              selectedPlan === "premium-plus"
                ? "border-[#bac8ce]"
                : "border-[#2bd97c]"
            }`}
            onClick={() => setSelectedPlan("premium")}
          >
            <div>
              <div className="border-2 w-[24px] h-[24px] rounded-full flex justify-center items-center">
                <div
                  className={`bg-black w-[6px] h-[6px] rounded-full ${
                    selectedPlan === "premium-plus" ? "hidden" : ""
                  }`}
                ></div>
              </div>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-2 font-semibold leading-tight max-md:text-[16px]">
                Premium Monthly
              </h2>
              <h1 className="text-[#032b41] text-[24px] mb-2 font-bold leading-tight max-md:text-[20px]">
                $9.99/month
              </h1>
              <p className="text-[#6b757b] text-[14px] leading-tight max-md:text-[12px]">
                No trial included
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-8 gap-4">
            {selectedPlan === "premium-plus" ? (
              <>
                <div
                  className="w-[300px] h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200 flex justify-center items-center"
                  onClick={() => upgradeToPremiumPlus()}
                >
                  {loading ? (
                    <img src={Loader} alt="" />
                  ) : (
                    "Start you free 7-day trial"
                  )}
                </div>
                <p className="text-[#6b757b] text-[12px] leading-tight">
                  Cancel your trial at any time before it ends, and you won't be
                  charged.
                </p>
              </>
            ) : (
              <>
                <div
                  className="w-[300px] h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200 flex items-center justify-center"
                  onClick={() => upgradeToPremium()}
                >
                  {loading ? (
                    <img src={Loader} alt="" />
                  ) : (
                    "Start your first month"
                  )}
                </div>
                <p className="text-[#6b757b] text-[12px] leading-tight">
                  30-day money back guarantee, no questions asked.
                </p>
              </>
            )}
          </div>
        </div>
        <div>
          {accordion.map((elem, index) => (
            <Accordion
              key={index}
              title={elem.title}
              paragraph={elem.paragraph}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChoosePlan;
