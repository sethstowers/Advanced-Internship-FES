import React, { useEffect } from "react";

const Library = ({ setNavActiveLink }) => {
  useEffect(() => {
    setNavActiveLink("library");
  }, []);

  return (
    <div>
    <h2 className="text-center text-5xl pt-10">Library</h2>
  </div>
  )
};

export default Library;
