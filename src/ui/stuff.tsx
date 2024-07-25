'use client'

import { useTheme} from 'next-themes'
import { useEffect, useState } from 'react'
import Particles from '../components/particle'

export default function ParticlesDemo() { 
   const { theme } = useTheme()
   const [color, setColor] = useState('#000000')

   useEffect(() => {
      setColor(theme === 'dark' ? '#ffffff' : '#ffffff')
   }, [theme])

   return (
      <div className="bg-black relative flex h-screen w-full flex-col sm:place-items-center items-center justify-center overflow-hidden">
         <span className="relative pointer-events-none text-7xl md:text-8xl lg:text-9xl whitespace-pre-wrap bg-gradient-to-b  text-neutral-50  bg-clip-text text-center  sm:text-2xl font-semibold leading-none  sm:p-4">
            VPNET

         </span>
         <p className="relative z-1  text-1xl md:text-1xl lg:text-1xl  bg-clip-text  bg-gradient-to-b text-neutral-50  text-center font-sans font-bold">
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


