import React, { useEffect } from 'react'

const ForYou = ({user, logout, setNavActiveLink}) => {

    useEffect(() => {
        setNavActiveLink("for-you");
      }, []);

  return (
    <div>
    <h2 className="text-center text-5xl pt-10">For you</h2>
  </div>
  )
}

export default ForYou
