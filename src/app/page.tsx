"use client";


import {FeaturesSectionDemo} from "@/components/tabs";
import {GlobeDemo} from "@/ui/globe";
import { FloatingNavDemo } from "@/ui/nav";
import { GlowingStarsBackgroundCardPreview } from "@/ui/payment-cards";
import ParticlesDemo from "@/ui/stuff";





import React from "react";


export default function Home() {
  return (
    <main className="bg-[#000000] flex min-h-screen flex-col items-center  ps-3 lg:px-24 sm:ps-1 pe-3 px-24 sm:p-2">
     <FloatingNavDemo/>
     <ParticlesDemo/>
     <GlobeDemo/>
     <h1 className="relative z-1  text-3xl md:text-3xl lg:text-3xl sm:text-1xl ps-3  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Features</h1>
     <FeaturesSectionDemo/>
     <h1 className="relative z-1  text-3xl md:text-3xl lg:text-3xl  sm:text-1xl ps-3  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Why Choose Our VPN ?</h1>
     <p className="relative z-1  text-1xl md:text-1xl  sm:text-1xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              <br/>Only we offer the best value for your money
          </p>
     
     <div className=" flex-direction:column">
     {/* <GlowingStarsBackgroundCardPreview/> */}
 
     </div>
  
     
     
     <footer className = "bg-[#35ed2e]  flex min-w-screen flex-row items-center  py-7">vyjgvjg</footer>

     
     

    </main>
  );
}
