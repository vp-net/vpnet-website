'use client';

import { CheckIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { ny } from '~/lib/utils'
import { Button } from '../ui/button';


type Interval = 'month' 

export function toHumanPrice(price: number, decimals: number = 2) {
   return Number(price).toFixed(decimals)
}
const demoPrices = [
   {
      id: 'price_1',
      name: 'Lite',
      description: 'A lite plan for budget student',
      features: [
         'Unlimited Access to Basic Servers',
         '30GB Access to High Speed Servers',
         '1 simultaneous device'

      ],
      monthlyPrice: 50,
      isMostPopular: false,
   },
   {
      id: 'price_2',
      name: 'Basic',
      description: 'Enjoy uniterepted gaming with low pings',
      features: [
         'Unlimited Access to Basic Servers',
         '100GB Access to High Speed Servers',
         '2 simultaneous devices',
        
      ],
      monthlyPrice: 100,
      isMostPopular: false,
   },
   {
      id: 'price_5',
      name: 'Standard',
      description:
      'You can do more than gaming',
      features: [
         'Unlimited Access to Basic Servers',
         '300GB Access to High Speed Servers',
         '5 simultaneous devices',
      ],
      monthlyPrice: 250,
      isMostPopular: true,
   },
   {
      id: 'price_6',
      name: 'Premium',
      description: 'Benefit your family and friends',
      features: [
         'Unlimited Access to Basic Servers',
         '750GB Access to High Speed Servers',
         '10 simultaneous devices',
      
      ],
      monthlyPrice: 500,
      isMostPopular: false,
   },
]

export default function PricingSection() {
   const [interval, ] = useState<Interval>('month' as Interval)
   const [isLoading, setIsLoading] = useState(false)
   const [id, setId] = useState<string | null>(null)

   const onSubscribeClick = async (priceId: string) => {
      setIsLoading(true)
      setId(priceId)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate a delay
      setIsLoading(false)
   }

   return (
      <section id="pricing">
         <div className="max-w-screen-4xl flex mx-auto flex-col gap-8 px-10 py-10 md:px-24 lg:pt-24 bg-black">
            <div className="mx-auto text-center pt-14">
    

               <h2 className="pt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl dark:text-white">
                  Affordable pricing for everyone.
               </h2>

               <p className="mt-6 text-xl leading-8 text-white dark:text-white">
                  Our 
                  {' '}
                  <strong>plans</strong>
                  {' '}
                  are tailored fit for your needs. 
               </p>
            </div>

            <div className="flex w-full items-center justify-center space-x-2">
               <div
                  id="interval"

               />
              
               <span className="absolute inline-block whitespace-wrap rounded-full  px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-  dark:text-white">
                  Choose your monthly plans ✨
               </span>
            </div>

            <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {demoPrices.map((price, idx) => (
                  <div
                     key={price.id}
                     className={ny(
                        'relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-5 text-white dark:text-white',
                        {
                           'border-2 border-green-400 ':
                    price.isMostPopular,
                        },
                     )}
                  >
                     <div className="flex items-center">
                        <div className="ml-4">
                           <h2 className="text-base font-bold leading-7">
                              {price.name}
                           </h2>
                           <p className="pt-3 h-12 text-sm leading-5 text-white dark:text-white">
                              {price.description}
                           </p>
                        </div>
                     </div>

                     <motion.div
                        key={`₹{price.id}-₹{interval}`}
                        initial="initial"
                        animate="animate"
                        variants={{
                           initial: {
                              opacity: 0,
                              y: 12,
                           },
                           animate: {
                              opacity: 1,
                              y: 0,
                           },
                        }}
                        transition={{
                           duration: 0.4,
                           delay: 0.1 + idx * 0.05,
                           ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="flex p-5 flex-row gap-1"
                     >
                        <span className="text-4xl font-bold text-white dark:text-white">
                        ₹
                           {
                              
                               toHumanPrice(price.monthlyPrice, 0)}
                           <span className="text-xs">
                              {' '}
                              /
                              {interval}
                           </span>
                        </span>
                     </motion.div>

                     <Button
                        className={ny(
                           'group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter',
                           'hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2',
                        )}
                        onClick={() => void onSubscribeClick(price.id)}
                     >
                        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-green-400  transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-green-400" />
                        {(!isLoading || (isLoading && id !== price.id)) && (
                           <p>Subscribe</p>
                        )}

                        {isLoading && id === price.id && <p>Subscribing</p>}
                        {isLoading && id === price.id && (
                           <Loader className="mr-2 size-4 animate-spin" />
                        )}
                     </Button>

                     <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-green-200/0 via-green-100/30 to-green-200/0" />
                     {price.features && price.features.length > 0 && (
                        <ul className="flex flex-col gap-2 font-normal">
                           {price.features.map((feature: any, idx: any) => (
                              <li
                                 key={idx}
                                 className="flex items-center gap-3 text-xs font-medium text-white dark:text-white"
                              >
                                 <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-white dark:text-white" />
                                 <span className="flex">{feature}</span>
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
