'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {GlobeDemo} from '../globe-icon';
import React from 'react';

export default function Globe() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
   return (
      <section
         
         className="relative mx-auto mt-32 max-w-7xl px-2 text-center md:px-8"
      >
         <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:00ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
         >
            <GlobeDemo />
            </div>
      
      </section>
   )
}