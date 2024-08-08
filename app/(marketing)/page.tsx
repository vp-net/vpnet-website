
import ClientSection from '~/components/landing/client-section'
import HeroSection from '~/components/landing/hero-section'
import Particles from '~/components/ui/particles'
import { SphereMask } from '~/components/ui/sphere-mask'
import { FeaturesSectionDemo } from '~/components/ui/tabs'
import Image from '~/components/landing/image'
import Globe from "~/components/landing/globex"


export default async function Page() {
   return (
      <>
       
         <HeroSection />
         <SphereMask />
        
       
         <h1 className="text-center w-full h-full animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-2xl font-extralight leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-.6xl md:text-2xl lg:text-2xl dark:from-white dark:to-white/40">
            Features
         </h1>
         <FeaturesSectionDemo />
         <ClientSection />
         <Image />
     
         <Globe/>
         <h1 className="text-center w-full h-full animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3  font-extralight leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-1xl md:text-2xl lg:text-2xl dark:from-white dark:to-white/40">
            Your Privacy Is Our Priority <br/> We Never Share Your Data
         </h1>
 
       
        
             <div className ="py-5 bg-black">
    
            <hr className=" m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-green-300 to-green-200/0 " />
            </div>
   
         <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         />
         
         </>
    
   
   )
}
