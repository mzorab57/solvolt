import React from 'react'
import { ShuffleHero } from './ui/shuffle-grid'

export const Story = () => {
  return (
    <div id="story" className=" bg-white flex justify-center items-center pt-28">
              <div className="h-12 w-full z-30 absolute -bottom-[3rem] bg-gradient-to-b  from-black via-black/15 to-transparent "></div>

      <ShuffleHero />
    </div>
  )
}
