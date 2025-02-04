import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const LoginModal = ({
  loginModalOpen,
  setLoginModalOpen,
  loginOrSignUp,
  setLoginOrSignUp,
  registerUserWithEmail,
  loginUserWithEmail,
  signInAsGuest,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-black/75 flex justify-center items-center z-50 ${
        loginModalOpen ? "" : "hidden"
      }`}
    >
      <div className="w-[400px] h-[500px] bg-white rounded-lg px-8 py-12 relative flex flex-col justify-center">
        <IoIosClose
          className="text-[42px] absolute top-1 right-1 hover:text-[#888888] cursor-pointer duration-200"
          onClick={() => setLoginModalOpen(false)}
        />
        <h2 className="text-[#032b41] text-[20px] font-bold text-center mb-6">
          {loginOrSignUp === "login"
            ? "Login to Summarist"
            : "Sign up for Summarist"}
        </h2>
        <button
          className={`w-full h-10 text-white bg-[#3a579d] text-4 flex justify-center items-center relative rounded-sm cursor-pointer hover:bg-[#313b68] duration-200 ${
            loginOrSignUp === "login" ? "" : "hidden"
          }`}
          onClick={() => signInAsGuest()}
        >
          <FaUser className="text-[24px] absolute left-2" />
          Login as Guest
        </button>
        <div
          className={`w-full flex justify-center my-4 items-center ${
            loginOrSignUp === "login" ? "" : "hidden"
          }`}
        >
          <div className="w-1/2 h-[1px] bg-[#bac8ce]"></div>
          <div className="text-[14px] text-[#394547] font-medium login__seperator mx-6">
            or
          </div>
          <div className="w-1/2 h-[1px] bg-[#bac8ce]"></div>
        </div>
        <form className="flex flex-col gap-4 mb-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-10 border-[2px] border-[#bac8ce] rounded-sm text-[13px] text-[#394547] px-3 focus:border-[#2bd97c] outline-none"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-10 border-[2px] border-[#bac8ce] rounded-sm text-[13px] text-[#394547] px-3 focus:border-[#2bd97c] outline-none"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {loginOrSignUp === "login" ? (
            <button
              type="submit"
              className="w-full h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200"
              onClick={(e) => loginUserWithEmail(e, email, password)}
            >
              Login
            </button>
          ) : (
            <button
              type="submit"
              className="w-full h-[40px] bg-[#2bd97c] text-[#032b41] rounded-[4px] hover:bg-[#20ba68] cursor-pointer duration-200"
              onClick={(e) => registerUserWithEmail(e, email, password)}
            >
              Sign up
            </button>
          )}
        </form>
        {loginOrSignUp === "login" ? (
          <h2 className="text-[#032b41] text-[15px] mb-2">
            Don't have an account?{" "}
            <span
              className="font-bold text-[16px] cursor-pointer"
              onClick={() => setLoginOrSignUp("signup")}
            >
              Sign up
            </span>
          </h2>
        ) : (
          <h2 className="text-[#032b41] text-[15px] mb-2">
            Already have an Account?{" "}
            <span
              className="font-bold text-[16px] cursor-pointer"
              onClick={() => setLoginOrSignUp("login")}
            >
              Login
            </span>
          </h2>
        )}

        <h2
          className={`text-[#032b41] text-[15px] ${
            loginOrSignUp === "login" ? "" : "hidden"
          }`}
        >
          Forgot password?{" "}
          <span className="font-bold text-[16px] cursor-pointer">
            Reset now
          </span>
        </h2>
      </div>
    </div>
  );
};

export default LoginModal;
