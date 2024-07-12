"use client";
import App from "@/components/navbar";
import {FeaturesSectionDemo} from "@/components/tabs";
import { SparklesPreview } from "@/ui/sparkles";

import React from "react";


export default function Home() {
  return (
    <main className="bg-[#000000] flex min-h-screen flex-col items-center px-24">
     
     <App/>
     <SparklesPreview/>
     <FeaturesSectionDemo/>
     
     

    </main>
  );
}
