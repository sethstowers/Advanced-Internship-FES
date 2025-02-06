import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Player = ({ setNavActiveLink, playerFontSize, setMobileNavOpen}) => {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    getBookInfo();
    setNavActiveLink("player");
  }, []);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  async function getBookInfo() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    console.log(data);
    setBookInfo(data);
    setLoading(false);
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backTen = () => {
    progressBar.current.value = Number(progressBar.current.value) - 10;
    changeRange();
  };

  const forwardTen = () => {
    progressBar.current.value = Number(progressBar.current.value) + 10;
    changeRange();
  };

  return (
    <div className="ml-[196px] max-md:ml-0 max-md:w-full w-[calc(100vw-200px)] mb-[80px] max-md:mb-[180px] ">
      <SearchBar setMobileNavOpen={setMobileNavOpen}/>
      <div className="w-full max-w-[800px] mx-auto px-6 py-10 flex gap-4">
        <div className="bg-[#042330] h-[80px] w-full fixed left-0 bottom-0 px-10 grid grid-cols-3 z-50 max-md:grid-cols-1 gap-2 max-md:h-[180px] max-md:py-4 max-md:px-6  ">
          <audio
            ref={audioPlayer}
            src={bookInfo?.audioLink}
            preload="metadata"
          ></audio>
          <div className="flex items-center gap-3 h-full max-md:justify-center">
            {loading ? (
              <div className="bg-[#a8a8a8] h-[48px] w-[48px] rounded-sm"></div>
            ) : (
              <img src={bookInfo.imageLink} className="w-[48px]" alt="" />
            )}
            <div className="flex flex-col justify-center h-full">
              {loading ?  
              <>
              <div className="bg-[#a8a8a8] h-[16px] w-[172px] mb-2 rounded-sm"></div>
              <div className="bg-[#a8a8a8] h-[16px] w-[92px] rounded-sm"></div>
              </>
              :
              <>
              <h2 className="text-[14px] text-white leading-tight">{bookInfo.title}</h2>
              <h2 className="text-[14px] text-[#bac8ce]">{bookInfo.author}</h2>
              </>
              }       
            </div>
          </div>
          <div className="flex items-center gap-6 justify-center">
            <TbRewindBackward10
              className="text-[32px] max-md:text-[28px] text-white cursor-pointer"
              onClick={backTen}
            />
            <button
              className="bg-white p-3  rounded-full flex justify-center items-center cursor-pointer"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <FaPause className="text-[22px] max-md:text-[18px]  text-[#042330]" />
              ) : (
                <FaPlay className="text-[22px] max-md:text-[18px] pl-[3px] text-[#042330]" />
              )}
            </button>
            <TbRewindForward10
              className="text-[32px] max-md:text-[28px] text-white cursor-pointer"
              onClick={forwardTen}
            />
          </div>
          <div className="flex items-center w-full gap-4 max-md:justify-center">
            <h2 className="text-[14px] text-white">
              {calculateTime(currentTime)}
            </h2>
            <div className="w-full max-w-[300px] mb-1">
              <input
                ref={progressBar}
                type="range"
                className="audio__progress--bar"
                defaultValue={0}
                onChange={changeRange}
              />
            </div>
            <h2 className="text-[14px] text-white">
              {isNaN(duration) ? `00:00` : calculateTime(duration)}
            </h2>
          </div>
        </div>
        <div className="w-full">
          {loading ? (
            <div className="bg-[#d4d8d9] h-[50px] w-[90%] mb-8 rounded-sm"></div>
          ) : (
            <h2 className="w-full text-[24px] text-[#032b41] font-bold mb-8 pb-4 leading-tight  border-b-[1px] border-[#e1e7ea]">
              {bookInfo.title}
            </h2>
          )}

          {loading ? (
            <div>
              <div className="bg-[#d4d8d9] h-[120px] w-[100%] mb-6 rounded-sm"></div>
              <div className="bg-[#d4d8d9] h-[200px] w-[100%] mb-6 rounded-sm"></div>
              <div className="bg-[#d4d8d9] h-[300px] w-[100%] mb-6 rounded-sm"></div>
            </div>
          ) : (
            <p
              className={`text-[${
                playerFontSize ? playerFontSize : "16"
              }px] text-[#032b41] whitespace-pre-line`}
            >
              {bookInfo.summary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
