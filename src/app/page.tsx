"use client";
import App from "@/components/navbar";
import {FeaturesSectionDemo} from "@/components/tabs";
import {GlobeDemo} from "@/ui/globe";

import React from "react";


export default function Home() {
  return (
    <main className="bg-[#000000] flex min-h-screen flex-col items-center ps-3 pe-2 px-24">
     
     {/* <App/> */}
     <GlobeDemo/>
     <FeaturesSectionDemo/>
     
     
     

    </main>
  );
}
