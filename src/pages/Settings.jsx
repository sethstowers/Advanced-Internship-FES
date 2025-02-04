import React, { useEffect } from 'react'

const Settings = ({setNavActiveLink}) => {
     useEffect(() => {
        setNavActiveLink("settings");
      }, []);
  return (
    <div>
    <h2 className="text-center text-5xl pt-[120px]">Settings</h2>
  </div>
  )
}

export default Settings
