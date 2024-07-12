"use client";
import App from "@/components/navbar";
import {FeaturesSectionDemo} from "@/components/tabs";
import {GlobeDemo} from "@/ui/globe";

import React from "react";


export default function Home() {
  return (
    <main className="bg-[#000000] flex min-h-screen flex-col items-center pt-10 ps-3 pe-3 px-24 sm:p-3">
     
     {/* <App/> */}
     <GlobeDemo/>
     <FeaturesSectionDemo/>
     
     
     

    </main>
  );
}
