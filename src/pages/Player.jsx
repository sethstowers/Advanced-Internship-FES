import React from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {
    const {id} = useParams()
  return (
    <div className="pt-[120px] ml-[200px] w-[calc(100vw-200px)] pb-10">
      <div className="w-full max-w-[1070px] mx-auto px-6 flex gap-4">
        player {id}
        </div>
    </div>
  )
}

export default Player
