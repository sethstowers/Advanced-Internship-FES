import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaRegClock,
  FaRegStar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";

const ForYou = ({ user, setNavActiveLink, isSignedIn }) => {
  const [selectedBook, setSelectedBook] = useState({});
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  async function getSelectedBook() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );
    setSelectedBook(data[0]);
    setLoading(false);
  }

  async function getRecommendBooks() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );
    setRecommendedBooks(data);
    setLoading(false);
    console.log(data[3].audioLink);
  }

  async function getSuggestedBooks() {
    setLoading(true);
    const { data } = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    setSuggestedBooks(data);
    setLoading(false);
  }

  function getAllBooks() {
    getSelectedBook();
    getRecommendBooks();
    getSuggestedBooks();
  }

  useEffect(() => {
    setNavActiveLink("for-you");
    getAllBooks();
  }, []);

  return (
    <div className="pt-[120px] ml-[200px] w-[calc(100vw-200px)]">
      <div className="w-full max-w-[1070px] mx-auto px-6">
        <h2 className="text-[22px] text-[#032b41] font-bold mb-4">
          Selected Just for You
        </h2>
        {loading ? (
          <div className="w-[680px] h-[188px] p-6 bg-[#d4d8d9] rounded-sm mb-6"></div>
        ) : (
          <div
            className="w-[680px] h-[188px] p-6 bg-[#fbefd6] rounded-sm flex gap-6 cursor-pointer mb-6"
            onClick={() => navigate(`/book/${selectedBook.id}`)}
          >
            <p className="text-[16px] text-[#032b41] max-w-[233px] leading-tight">
              {selectedBook.subTitle}
            </p>
            <div className="w-[1px] bg-[#bac8ce] h-full"></div>
            <div className="flex justify-between w-full">
              <img src={selectedBook.imageLink} alt="" className="w-[140px]" />
              <div className="w-[194px]">
                <h1 className="text-[16px] text-[#032b41] font-bold leading-tight mb-2">
                  {selectedBook.title}
                </h1>
                <p className="text-[#394547] text-[14px] leading-tight mb-4">
                  {selectedBook.author}
                </p>
                <div className="flex items-center gap-2">
                  <button className="bg-black rounded-full w-10 h-10 flex justify-center items-center">
                    <FaPlay className="text-white text-[16px]" />
                  </button>
                  <p className="text-[14px] text-[#032b41] font-medium">
                    3 mins 23 secs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <h2 className="text-[22px] text-[#032b41] leading-tight font-bold mb-4">
          Recommended for You
        </h2>
        <h2 className="text-[16px] text-[#394547] leading-tight mb-4 font-light">
          We think you'll like these
        </h2>

        {loading ? (
          <div className={`h-[400px]`}>
            <div
              id="recommendBooksSlider"
              className="w-[100%] h-full flex gap-4 overflow-x-scroll scroll no-scrollbar"
            >
              {new Array(5).fill("").map((book, index) => (
                <div
                  className="px-3 pt-8 pb-3 min-w-[190px] flex flex-col"
                  key={index}
                >
                  <div className="w-[172px] h-[200px] bg-[#d4d8d9] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[172px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[140px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[172px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[100px] mb-2 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`h-[400px]`}>
            <div
              id="recommendBooksSlider"
              className="w-[100%] h-full flex gap-4 overflow-x-scroll scroll no-scrollbar"
            >
              {recommendedBooks.map((book) => (
                <BookCard book={book} key={book.id} isSignedIn={isSignedIn} />
              ))}
            </div>
          </div>
        )}

        <h2 className="text-[22px] text-[#032b41] leading-tight font-bold mb-4">
          Suggested Books
        </h2>
        <h2 className="text-[16px] text-[#394547] leading-tight mb-4 font-light">
          Browse those books
        </h2>
        {loading ? (
          <div className={`h-[400px]`}>
            <div
              id="recommendBooksSlider"
              className="w-[100%] h-full flex gap-4 overflow-x-scroll scroll no-scrollbar"
            >
              {new Array(5).fill("").map((book, index) => (
                <div
                  className="px-3 pt-8 pb-3 min-w-[190px] flex flex-col"
                  key={index}
                >
                  <div className="w-[172px] h-[200px] bg-[#d4d8d9] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[172px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[140px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[172px] mb-2 rounded-sm"></div>
                  <div className="bg-[#d4d8d9] h-[20px] w-[100px] mb-2 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={`h-[400px] mb-8`}>
            <div
              id="recommendBooksSlider"
              className="w-[100%] h-full flex gap-4 overflow-x-scroll scroll no-scrollbar"
            >
              {suggestedBooks.map((book) => (
                <BookCard book={book} key={book.id} isSignedIn={isSignedIn} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForYou;
