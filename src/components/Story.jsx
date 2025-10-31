import React from 'react'
import { ShuffleHero } from './ui/shuffle-grid'

export const Story = () => {
  return (
    <div className=" bg-white flex justify-center items-center">
              <div className="h-12 w-full z-30 absolute -bottom-[5rem] bg-gradient-to-b  from-black via-black/15 to-transparent -translate-y-8"></div>

      <ShuffleHero />
    </div>
  )
}
