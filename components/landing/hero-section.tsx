'use client';

import CallToActionSection from '~/components/landing/cta-section'
import { useRef } from 'react'



export default function HeroSection() {
   const ref = useRef(null)
   return (
          <>
              <CallToActionSection />
         </>
   )
}
