"use client";
import { SiteFooter } from '~/components/site-footer'
import { SiteHeader } from '~/components/site-header'
import PricingSection from '../../components/landing/pricing-section'
import React from 'react'


export default function Pricing(){
    return(
        <main>
            <div className=' '>
            <link href ="/Pricing" className="bg-black"></link>
            <SiteHeader/>
            <PricingSection/>
            <div className ="py-5 bg-black">
            <hr className=" m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-green-300 to-green-200/0 bg-black" />
            </div>
            
            <SiteFooter/>
            </div>
            
        </main>
    )
}