import React, { useEffect, useState } from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, isSignedIn }) => {
  const navigate = useNavigate();
  const [audioDuration, setAudioDuration] = useState("");

  useEffect(() => {
    const fetchAudioDuration = async () => {
      try {
        const bookResponse = await fetch(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${book.id}`
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
  }, [book.id]);

  return (
    <div className="relative">
      <div
        className={`absolute top-0 right-0 bg-[#032b41] px-2 py-0.5 rounded-full flex justify-center text-white text-[10px] 
                        ${
                          !isSignedIn && book.subscriptionRequired
                            ? ""
                            : "hidden"
                        }`}
      >
        Premium
      </div>
      <div
        className="px-3 pt-8 pb-3 min-w-[190px] hover:bg-gray-100 cursor-pointer"
        key={book.title}
        onClick={() => navigate(`/book/${book.id}`)}
      >
        <img src={book.imageLink} alt={book.title} className="w-[172px] mb-2" />
        <h1 className="text-[16px] text-[#032b41] leading-tight font-bold mb-2">
          {book.title}
        </h1>
        <h2 className="text-[14px] text-[#6b757b] leading-tight font-light mb-2">
          {book.author}
        </h2>
        <p className="text-[14px] text-[#394547] leading-tight mb-2">
          {book.subTitle}
        </p>
        <div className="flex items-center gap-[10px] text-[#6b757b]">
          <div className="flex items-center gap-1">
            <FaRegClock className="text-[14px]" />
            <p className="text-[13px] leading-tight ">{audioDuration}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaRegStar className="text-[15px]" />
            <p className="text-[13px]">{book.averageRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
