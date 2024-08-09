'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {GlobeDemo} from '../globe-icon';
import React from 'react';

export default function Globe() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
   return (
 <>
         <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:100ms] [perspective:1000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_40%,transparent)]"
         >
            <GlobeDemo />
            </div>
      
            </>
   )
}