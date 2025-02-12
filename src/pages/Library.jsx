import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import BookCard from "../components/BookCard";
import loginImage from "../assets/loginImage.webp";

const Library = ({
  setNavActiveLink,
  setMobileNavOpen,
  getAllBooksInLibrary,
  user,
  isSignedIn,
  setLoginModalOpen,
  userSubscriptionStatus,
  signedInAsGuest,
}) => {
  const [booksArray, setBooksArray] = useState([]);
  const [booksInfo, setBooksInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNavActiveLink("library");
  }, []);

  function getBooks() {
    getAllBooksInLibrary().then((books) => {
      setBooksArray(books);
    });
  }

  useEffect(() => {
    booksArray.forEach(async (book) => {
      const { data } = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${book.bookId}`
      );

      setBooksInfo((prev) => [...prev, data]);
    });
    setLoading(false);
  }, [booksArray]);

  useEffect(() => {
    setLoading(true);
    getBooks();
  }, [user]);

  return (
    <div className="ml-[196px] max-md:ml-0 max-md:w-full min-h-screen w-[calc(100vw-200px)]">
      <SearchBar setMobileNavOpen={setMobileNavOpen} />
      <div className="w-full max-w-[1070px] pt-10 mx-auto px-6">
        {isSignedIn ? (
          <>
            <h2 className="text-[22px] text-[#032b41] font-bold mb-4">
              Saved Books
            </h2>
            {loading ? (
              <div className="w-[100px] h-[24px] bg-[#d4d8d9] mb-2 rounded-sm"></div>
            ) : (
              <h3 className="text-[16px] font-light text-[#394547] leading-tight mb-4">
                {booksArray.length} {booksArray.length === 1 ? "Item" : "Items"}
              </h3>
            )}
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
                {booksInfo.length > 0 ? (
                  <div
                    id="recommendBooksSlider"
                    className="w-[100%] h-full flex gap-4 overflow-x-scroll scroll no-scrollbar"
                  >
                    {booksInfo.map((book) => (
                      <BookCard
                        book={book}
                        key={book.id}
                        userSubscriptionStatus={userSubscriptionStatus}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-[360px] h-[112px] bg-[#f1f6f4] rounded-xl p-8 flex flex-col items-center gap-2 mx-auto">
                    <h1 className="text-[#042330] text-[18px] leading-tight font-semibold">Save your favorite books!</h1>
                    <h2 className="text-[#394547] text-[16px] leading-tight ">When you save a book, it will appear here.</h2>
                    </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="w-full flex items-center flex-col">
            <img src={loginImage} alt="" className="w-full max-w-[460px]" />
            <h1 className="text-[24px] text-[#032b41] font-bold leading-tight mb-4">
              Log in to your account to see your library.
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
  );
};

export default Library;
