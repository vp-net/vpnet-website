'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Particles from '../components/particle'

export default function ParticlesDemo() {
   const { theme } = useTheme()
   const [color, setColor] = useState('#000000')

   useEffect(() => {
      setColor(theme === 'dark' ? '#ffffff' : '#ffffff')
   }, [theme])

   return (
      <div className="bg-black relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
         <span className="pointer-events-none text-7xl md:text-8xl lg:text-9xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center  sm:text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 sm:p-4">
            VPNET

         </span>
         <p className="relative z-1  text-1xl md:text-1xl lg:text-1xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Vanish among the stars
          </p>
         <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
         />
      </div>
   )
}


