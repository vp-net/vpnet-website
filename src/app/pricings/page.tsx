"use client";
import SiteFooter from '@/components/footer'
import { FloatingNavDemo } from '@/ui/nav'
import PricingSection from '@/ui/pricings'
import React from 'react'


export default function pricing(){
    return(
        <main>
            <link href ="/Pricing" className="bg-black"></link>
            <FloatingNavDemo/>
            <PricingSection/>
            <div className ="py-5 bg-black">
            <hr className=" m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-green-300 to-green-200/0 bg-black" />
            </div>
            
            <SiteFooter/>
            
        </main>
    )
}