import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaBookmark,
  FaRegClock,
  FaRegLightbulb,
  FaRegStar,
} from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoMdBook } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { TbMicrophone } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState({});
  const [audioDuration, setAudioDuration] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  async function getBookInfo() {
    const { data } = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    console.log(data);
    setBookInfo(data);
  }

  useEffect(() => {
    getBookInfo();
  }, []);

  useEffect(() => {
    const fetchAudioDuration = async () => {
      try {
        const bookResponse = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookInfo.id}`
        );
        const bookData = await bookResponse.json();
        const audioLink = bookData.audioLink;

        if (audioLink) {
          const audio = new Audio(audioLink);
          audio.addEventListener("loadedmetadata", () => {
            const duration = audio.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            setAudioDuration(
              `${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`
            );
            setLoading(false);
          });

          audio.addEventListener("error", () => {
            setAudioDuration("Duration not available");
          });

          audio.load();
        } else {
          setAudioDuration("Audio not available");
        }
      } catch (error) {
        setAudioDuration("Duration not available");
      }
    };

    fetchAudioDuration();
  }, [bookInfo]);

  return (
    <div className="pt-[120px] ml-[200px] w-[calc(100vw-200px)] pb-10">
      <div className="w-full max-w-[1070px] mx-auto px-6 flex gap-4">
        <div className="flex-1 ">
          {loading ? (
            <div className="bg-[#d4d8d9] h-[40px] w-[70%] mb-4 rounded-sm"></div>
          ) : (
            <h1 className="text-[32px] text-[#032b41] font-bold mb-4 leading-tight">
              {bookInfo.title}
            </h1>
          )}
          {loading ? (
            <div className="bg-[#d4d8d9] h-[32px] w-[40%] mb-4 rounded-sm"></div>
          ) : (
            <h3 className="text-[16px] text-[#032b41] font-bold mb-4 leading-tight">
              {bookInfo.author}
            </h3>
          )}
          {loading ? (
            <div className="bg-[#d4d8d9] h-[32px] w-[80%] mb-4 rounded-sm"></div>
          ) : (
            <h2 className="text-[20px] text-[#032b41] font-light mb-4 leading-tight">
              {bookInfo.subTitle}
            </h2>
          )}
          {loading ? (
            <div className="bg-[#d4d8d9] h-[96px] w-[50%] mb-4 rounded-sm"></div>
          ) : (
            <div className="w-full flex flex-col gap-3 py-4 mb-6 border-t-[1px] border-b-[1px] border-[#e1e7ea]">
              <div className="flex items-center ">
                <div className="flex items-center gap-[6px] w-[200px]">
                  <FaRegStar className="text-[20px] text-[#032b41] mb-1" />
                  <h2 className="text-[14px] text-[#032b41] font-medium leading-tight">
                    {bookInfo.averageRating}
                  </h2>
                  <h2 className="text-[14px] text-[#032b41] font-medium leading-tight">
                    ({bookInfo.totalRating} ratings)
                  </h2>
                </div>
                <div className="flex items-center gap-[6px] w-[200px]">
                  <FaRegClock className="text-[20px] text-[#032b41] mb-[2px]" />
                  <h2 className="text-[14px] text-[#032b41] font-medium leading-tight">
                    {audioDuration}
                  </h2>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-[6px] w-[200px]">
                  <TbMicrophone className="text-[20px] text-[#032b41] mb-1" />
                  <h2 className="text-[14px] text-[#032b41] font-medium leading-tight">
                    {bookInfo.type}
                  </h2>
                </div>
                <div className="flex items-center gap-[6px] w-[200px]">
                  <FaRegLightbulb className="text-[20px] text-[#032b41] mb-[2px]" />
                  <h2 className="text-[14px] text-[#032b41] font-medium leading-tight">
                    {bookInfo.keyIdeas} Key ideas
                  </h2>
                </div>
              </div>
            </div>
          )}

          {loading ? (
            <div className="bg-[#d4d8d9] h-[48px] w-[40%] mb-4 rounded-sm"></div>
          ) : (
            <div className="flex gap-4 mb-6">
              <div className="bg-[#032b41] w-[144px] h-[48px] text-white flex items-center justify-center gap-2 rounded-sm cursor-pointer"
              onClick={() => navigate(`/player/${bookInfo.id}`)}
              >
                <IoMdBook className="text-[24px]" />
                <h2 className="text-[16px]">Read</h2>
              </div>
              <div className="bg-[#032b41] w-[144px] h-[48px] text-white flex items-center justify-center gap-2 rounded-sm cursor-pointer"
              onClick={() => navigate(`/player/${bookInfo.id}`)}
              >
                <TbMicrophone className="text-[24px]" />
                <h2 className="text-[16px]">Listen</h2>
              </div>
            </div>
          )}

          {loading ? (
            <div className="bg-[#d4d8d9] h-[28px] w-[30%] mb-4 rounded-sm"></div>
          ) : (
            <div className="flex items-center text-[#0365f2] gap-2 mb-10 cursor-pointer hover:text-[#0317f2]">
              <FaBookmark className="text-[20px]" />
              <h2 className="text-[18px] font-medium ">
                Add title to My Library
              </h2>
            </div>
          )}

          {loading ? (
            <div className="bg-[#d4d8d9] h-[48px] w-[60%] mb-4 rounded-sm"></div>
          ) : (
            <>
              <h2 className="text-[18px] text-[#032b41] font-bold leading-tight mb-4">
                What's it about?
              </h2>
              <div className="flex gap-4 mb-4">
                {bookInfo?.tags?.map((tag) => (
                  <button className="bg-[#f1f6f4] h-[48px] text-[16px] text-[#032b41] font-medium leading-tight px-4 rounded-sm">
                    {tag}
                  </button>
                ))}
              </div>
            </>
          )}

          {loading ? (
            <div className="bg-[#d4d8d9] h-[220px] w-[100%] mb-4 rounded-sm"></div>
          ) : (
            <p className="text-[16px] text-[#032b41] mb-4">
              {bookInfo.bookDescription}
            </p>
          )}
          {loading ? (
            <div className="bg-[#d4d8d9] h-[220px] w-[100%] mb-4 rounded-sm"></div>
          ) : (
            <>
              <h2 className="text-[18px] text-[#032b41] font-bold leading-tight mb-4">
                About the author
              </h2>
              <p className="text-[16px] text-[#032b41] mb-4">
                {bookInfo.authorDescription}
              </p>
            </>
          )}
        </div>
        <div className="w-[300px]">
          {loading ? (
            <div className="bg-[#d4d8d9] h-[300px] w-[100%] mb-4 rounded-sm"></div>
          ) : (
            <img src={bookInfo.imageLink} alt="" className="w-[300px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
