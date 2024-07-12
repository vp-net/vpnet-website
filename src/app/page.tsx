"use client";
import App from "@/components/navbar";
import {FeaturesSectionDemo} from "@/components/tabs";
import {GlobeDemo} from "@/ui/globe";

import React from "react";


export default function Home() {
  return (
    <main className="bg-[#000000] flex min-h-screen flex-col items-center pt-24  ps-5 lg:px-24 sm:ps-2 pe-3 px-24 sm:p-3">
     
     {/* <App/> */}
     <GlobeDemo/>
     <h1 className="relative z-1  text-3xl md:text-3xl lg:text-3xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Features</h1>
     <FeaturesSectionDemo/>
     
     
     

    </main>
  );
}
