"use client";



import {FeaturesSectionDemo} from "@/components/tabs";
import {GlobeDemo} from "@/ui/globe";
import  {FloatingNavDemo}  from "../ui/nav";
import ParticlesDemo from "@/ui/stuff";
import SiteFooter from "../components/footer"




import React from "react";


export default function Home() {
  return (
    <>
    <main className="bg-[#000000] flex min-h-screen flex-col items-center  ps-3 lg:px-24 sm:ps-1 pe-3 px-24 sm:p-2">
     <FloatingNavDemo/>
     <ParticlesDemo/>
     <GlobeDemo/>
     <h1 className="relative z-1  text-3xl md:text-3xl lg:text-3xl sm:text-1xl ps-3  bg-clip-text text-transparent bg-gradient-to-b  text-neutral-50   text-center font-sans font-bold">Features</h1>
     <FeaturesSectionDemo/>
     
     <h1 className="relative z-1  text-3xl md:text-3xl lg:text-3xl  sm:text-1xl ps-3  bg-clip-text text-transparent bg-gradient-to-b  text-neutral-50    text-center font-sans font-bold">Why Choose Our VPN ?</h1>
     <p className="relative z-1  text-1xl md:text-1xl  sm:text-1xl bg-clip-text text-transparent bg-gradient-to-b  text-neutral-50   text-center font-sans font-bold">
              <br/>Only we offer the best value for your money
          </p>
         
     
      
    </main>
 
    <div className ="py-5 bg-black">
    
            <hr className=" m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-green-300 to-green-200/0 " />
            </div>
   
    <SiteFooter/>

    
    </>
  );
}
