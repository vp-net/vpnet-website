"use client";
import {FeaturesSectionDemo} from "@/components/tabs";
import { SparklesPreview } from "@/ui/sparkles";

import React from "react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
     
    
     <SparklesPreview/>
     <FeaturesSectionDemo/>
     

    </main>
  );
}
