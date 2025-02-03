import React, { useEffect } from "react";
import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";
import Logo from "../assets/logo.png";
import LandingImg from "../assets/landing.png";
import { useNavigate } from "react-router-dom";

const Home = ({ setLoginModalOpen, isSignedIn, setHideNavBar }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/for-you");
      setHideNavBar(false);
    }
  }, [isSignedIn]);

  useEffect(() => {
    setHideNavBar(true);
  }, []);

  return (
    <div className="w-full">
      {/* ------Nav Section------ */}

      <nav className="w-full h-[80px] flex justify-between items-center max-w-[1070px] mx-auto px-6">
        <img className="w-[200px]" src={Logo} alt="" />
        <ul className="flex gap-6">
          <li
            className="text-[#032b41] cursor-pointer duration-200 hover:text-[#2bd97c]"
            onClick={() => setLoginModalOpen(true)}
          >
            Login
          </li>
          <li className="text-[#032b41] cursor-not-allowed max-[576px]:hidden">
            About
          </li>
          <li className="text-[#032b41] cursor-not-allowed max-[576px]:hidden">
            Contact
          </li>
          <li className="text-[#032b41] cursor-not-allowed max-[576px]:hidden">
            Help
          </li>
        </ul>
      </nav>

      {/* ------Landing Section------ */}

      <div className="max-w-[1070px] mx-auto py-10 px-6">
        <div className="flex justify-between items-start ">
          <div className="w-full max-md:max-w-[540px] max-md:mx-auto max-md:text-center">
            <h1 className="text-[40px] font-bold leading-tight text-[#032b41] mb-6 max-md:text-[24px]">
              Gain more knowledge <br className="max-md:hidden" /> in less time
            </h1>
            <p className="text-[20px] text-[#394547] font-light mb-6">
              Great summaries for busy people, <br className="max-md:hidden" />
              individuals who barely have time to read,{" "}
              <br className="max-md:hidden" />
              and even people who don't like to read
            </p>
            <button
              className="w-[300px] h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200"
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </button>
          </div>
          <div className="w-full flex justify-end max-md:hidden">
            <img
              className="w-full h-full max-w-[400px]"
              src={LandingImg}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ------Features Section------ */}

      <div className="max-w-[1070px] mx-auto py-10 px-6">
        {/* ------Feature Icons------ */}

        <div className="mb-[96px]">
          <h2 className="text-[32px] font-bold leading-tight text-[#032b41] mb-8 text-center max-md:text-[24px]">
            Understand books in a few minutes
          </h2>
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
            <div className="flex flex-col items-center text-center">
              <AiFillFileText className="text-[60px] max-md:text-[48px] text-[#032b41] mb-[8px]" />
              <h2 className="text-2xl max-md:text-[20px] font-medium mb-4 text-[#032b41]">
                Read or listen
              </h2>
              <p className="text-[18px] max-md:text-[14px] font-light text-[#394547] leading-6">
                Save time by getting the core ideas from the best books.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AiFillBulb className="text-[60px] max-md:text-[48px] text-[#032b41] mb-[8px]" />
              <h2 className="text-2xl max-md:text-[20px] font-medium mb-4 text-[#032b41] ">
                Find your next read
              </h2>
              <p className="text-[18px] max-md:text-[14px] font-light text-[#394547] leading-6">
                Explore book lists and personalized recommendations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AiFillAudio className="text-[60px] max-md:text-[48px] text-[#032b41] mb-[8px]" />
              <h2 className="text-2xl max-md:text-[20px] font-medium mb-4 text-[#032b41]">
                Briefcasts
              </h2>
              <p className="text-[18px] max-md:text-[14px] font-light text-[#394547] leading-6">
                Gain valuable insights from briefcasts.
              </p>
            </div>
          </div>
        </div>

        {/* ------Feature Stats------ */}

        <div className="mb-[96px] max-md:mb-8 flex gap-20 max-md:flex-col max-md:gap-8">
          <ul className="w-full">
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Enhance your knowledge
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Achieve greater success
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Improve your health
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Develop better parenting skills
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Increase happiness
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Be the best version of yourself!
            </li>
          </ul>

          <div className="py-10 px-6 bg-[#f1f6f4] flex flex-col justify-center gap-6 w-full">
            <div className="flex items-start  gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                93%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-tight">
                of Summarist members{" "}
                <span className="font-bold">significantly increase</span>{" "}
                reading frequency.
              </h2>
            </div>
            <div className="flex items-start  gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                96%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-tight">
                of Summarist members{" "}
                <span className="font-bold">establish better</span> habits.
              </h2>
            </div>
            <div className="flex items-start  gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                90%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-tight">
                have made{" "}
                <span className="font-bold">significant positive</span> change
                to their lives.
              </h2>
            </div>
          </div>
        </div>

        <div className="flex gap-20 max-md:flex-col-reverse max-md:gap-8">
          <div className="py-10 px-6 bg-[#f1f6f4] flex flex-col justify-center gap-6 w-full">
            <div className="flex items-start  gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                91%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-6">
                of Summarist members{" "}
                <span className="font-bold">
                  report feeling more productive
                </span>{" "}
                after incorporating the service into their daily routine.
              </h2>
            </div>
            <div className="flex items-start gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                94%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-6">
                of Summarist members have{" "}
                <span className="font-bold">noticed an improvement</span> in
                their overall comprehension and retention of information.
              </h2>
            </div>
            <div className="flex items-start gap-4">
              <h1 className="text-[#0365f2] text-[20px] font-semibold mt-1 max-md:mt-0">
                88%
              </h1>
              <h2 className="font-light text-[20px] max-md:text-[16px] text-[#394547] leading-6">
                of Summarist members{" "}
                <span className="font-bold">feel more informed</span> about
                current events and industry trends since using the platform.
              </h2>
            </div>
          </div>

          <ul className="flex flex-col items-end max-md:items-start w-full">
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Expand your learning
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Accomplish your goals
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Strengthen your vitality
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Become a better caregiver
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Improve your mood
            </li>
            <li className="text-[#6b757b] text-[32px] font-medium mb-4 leading-tight max-md:text-[24px]">
              Maximize your abilities
            </li>
          </ul>
        </div>
      </div>

      {/* ------Reviews Stats------ */}

      <div className="max-w-[1070px] mx-auto py-10 px-6">
        <h2 className="text-[32px] font-bold leading-tight text-[#032b41] mb-8 text-center max-md:text-[24px]">
          What our members say
        </h2>
        <div className="flex flex-col items-center">
          <div className="bg-[#FFF3D7] p-4 mb-8 max-w-[600px] rounded-[4px]">
            <div className="mb-2 flex gap-2">
              <h1 className="text-[#032b41] text-[16px] font-light leading-5">
                Hanna M.
              </h1>
              <div className="flex">
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
              </div>
            </div>
            <p className="text-[#394547] text-[16px] font-light max-md:text-[14px]">
              This app has been a{" "}
              <span className="font-bold">game-changer</span> for me! It's saved
              me so much time and effort in reading and comprehending books.
              Highly recommend it to all book lovers.
            </p>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 max-w-[600px] rounded-[4px]">
            <div className="mb-2 flex gap-2">
              <h1 className="text-[#032b41] text-[16px] font-light leading-5">
                David B.
              </h1>
              <div className="flex">
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
              </div>
            </div>
            <p className="text-[#394547] text-[16px] font-light max-md:text-[14px]">
              I love this app! It provides{" "}
              <span className="font-bold">concise and accurate summaries</span>{" "}
              of books in a way that is easy to understand. It's also very
              user-friendly and intuitive.
            </p>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 max-w-[600px] rounded-[4px]">
            <div className="mb-2 flex gap-2">
              <h1 className="text-[#032b41] text-[16px] font-light leading-5">
                Nathan S.
              </h1>
              <div className="flex">
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
              </div>
            </div>
            <p className="text-[#394547] text-[16px] font-light max-md:text-[14px]">
              This app is a great way to get the main takeaways from a book
              without having to read the entire thing.{" "}
              <span className="font-bold">
                The summaries are well-written and informative.
              </span>{" "}
              Definitely worth downloading.
            </p>
          </div>
          <div className="bg-[#fff3d7] p-4 mb-8 max-w-[600px] rounded-[4px]">
            <div className="mb-2 flex gap-2">
              <h1 className="text-[#032b41] text-[16px] font-light leading-5">
                Ryan R.
              </h1>
              <div className="flex">
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
                <BsStarFill className="text-[#0365f2] text-[16px]" />
              </div>
            </div>
            <p className="text-[#394547] text-[16px] font-light max-md:text-[14px]">
              If you're a busy person who{" "}
              <span className="font-bold">
                loves reading but doesn't have the time
              </span>{" "}
              to read every book in full, this app is for you! The summaries are
              thorough and provide a great overview of the book's content.
            </p>
          </div>
          <button
            className="w-[300px] h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200"
            onClick={() => setLoginModalOpen(true)}
          >
            Login
          </button>
        </div>
      </div>

      {/* ------Numbers------ */}

      <div className="max-w-[1070px] mx-auto py-10 px-6">
        <h2 className="text-[32px] font-bold leading-tight text-[#032b41] mb-8 text-center max-md:text-[24px]">
          Start growing with Summarist now
        </h2>
        <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] px-6 pt-6 pb-10 rounded-[12px]">
            <BiCrown className="text-[48px] text-[#0365f2] mb-2" />
            <h2 className="text-[40px] font-semibold mb-4 text-[#032b41] leading-tight max-md:text-[32px]">
              3 Million
            </h2>
            <p className="text-[16px] font-light text-[#394547] leading-tight max-md:text-[14px]">
              Download on all platforms
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] px-6 pt-6 pb-10 rounded-[12px]">
            <div className="h-[48px] flex items-center mb-2">
              <BsStarFill className="text-[20px] text-[#0365f2] " />
              <BsStarFill className="text-[20px] text-[#0365f2] " />
              <BsStarFill className="text-[20px] text-[#0365f2] " />
              <BsStarFill className="text-[20px] text-[#0365f2] " />
              <BsStarHalf className="text-[20px] text-[#0365f2] " />
            </div>
            <h2 className="text-[40px] font-semibold mb-4 text-[#032b41] leading-tight max-md:text-[32px]">
              4.5 Stars
            </h2>
            <p className="text-[16px] font-light text-[#394547] leading-tight max-md:text-[14px]">
              Average ratings on iOS and Google Play
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-[#d7e9ff] px-6 pt-6 pb-10 rounded-[12px]">
            <RiLeafLine className="text-[48px] text-[#0365f2] mb-2" />
            <h2 className="text-[40px] font-semibold mb-4 text-[#032b41] leading-tight max-md:text-[32px]">
              97%
            </h2>
            <p className="text-[16px] font-light text-[#394547] leading-tight max-md:text-[14px]">
              Of Summarist members create a better reading habit
            </p>
          </div>
        </div>
      </div>

      {/* ------Footer------ */}

      <div className="bg-[#f1f6f4]">
        <div className="max-w-[1070px] mx-auto py-10 px-6 ">
          <div className="pt-8 pb-16 flex justify-between max-md:flex-col max-md:gap-8">
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Actions
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Summarist Magazine
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Cancel Subscription
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Help
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Contact us
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Useful Links
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Pricing
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Summarist Business
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Gift Cards
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Authors & Publishers
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Company
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  About
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Carrers
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Partners
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Code of Conduct
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#032b41] text-[18px] mb-4 font-semibold leading-[20px]">
                Other
              </h2>
              <ul className="flex  flex-col gap-[12px]">
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Sitemap
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Legal Notice
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Terms of Service
                </li>
                <li className="text-[14px] text-[#394547] leading-4 cursor-not-allowed">
                  Privacy Policies
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-[#032b41] text-[16px] font-medium text-center">
            Copyright &copy; 2023 Summarist
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
