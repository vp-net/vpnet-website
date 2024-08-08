"use client";
import Image from 'next/image'

export default function ClientSection() {
   return (
      <section
         id="clients"
         className="mx-auto max-w-7xl px-2 text-center md:px-8"
      >
         <div className="py-10">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
               <h2 className="text-center text-sm font-semibold text-gray-300">
                  PLAY THE TOP RATED GAME WITH LOW LATENCY
                  <br />
               </h2>
               <div className="mt-6">
                  <ul className="flex pt-6 flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                     <li>
                        <Image
                           alt="Valorent"
                           src="/valorent.jpg"
                           className="h-8 w-12 px-2 "
                           width={28}
                           height={8}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Valorent"
                           src="/valorent.jpg"
                           className="h-8 w-12 px-2 "
                           width={28}
                           height={8}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Fortnite"
                           src="/valorent.jpg"
                           className="h-8 w-12 px-2 "
                           width={28}
                           height={8}
                        />
                     </li>

                     <li>
                        <Image
                           alt="Game"
                           src="/valorent.jpg"
                           className="h-8 w-12 px-2 "
                           width={28}
                           height={8}
                        />
                     </li>
                     <li>
                        <Image
                           alt="Game"
                           src="/valorent.jpg"
                           className="h-8 w-12 px-2 "
                           width={28}
                           height={8}
                        />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}
