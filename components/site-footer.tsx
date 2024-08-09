"use client";
import { DiscordLogoIcon, TwitterLogoIcon ,} from '@radix-ui/react-icons'
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link'

const footerNavs = [
   {
      label: 'Product',
      items: [
         {
            href: 'https://dashboard.vp-net.org/',
            name: 'VPN',
         },
         {
            href: '/pricing',
            name: 'Pricing',
         },
         {
            href: '/faq',
            name: 'FAQ',
         },
      ],
   },

   {
      label: 'Community',
      items: [
         {
            href: 'https://api.whatsapp.com/message/C3OWYU3XR64CA1?autoload=1&app_absent=0',
            name: 'WhatsApp',
         },
         {
            href: '/',
            name: 'Discord',
         },
     
         {
            href: 'mailto:hello@chatcollect.com',
            name: 'Email',
         },
      ],
   },
   {
      label: 'Legal',
      items: [
         {
            href: '/terms',
            name: 'Terms',
         },

         {
            href: 'https://dashboard.vp-net.org/privacy',
            name: 'Privacy',
         },
      ],
   },
]

const footerSocials = [
   {
      href: 'https://api.whatsapp.com/message/C3OWYU3XR64CA1?autoload=1&app_absent=0',
      name: 'WhatsApp',
      icon: <FaWhatsapp className="size-4" />,
   },
   {
      href: '',
      name: 'Discord',
      icon: <DiscordLogoIcon className="size-4" />,
   },
   {
      href: '',
      name: 'Twitter',
      icon: <TwitterLogoIcon className="size-4" />,
   },
]

export function SiteFooter() {
   return (
      <footer>
         <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
            <div className="gap-4 p-4 px-8 py-16 sm:pb-16 md:flex md:justify-between">
               <div className="mb-12 flex flex-col gap-4">
                  <Link href="/" className="flex items-center gap-2">
                     <img
                        src="/favicon.ico"
                        className="text-primary size-8"
                     />
                     VPNET
                  </Link>
                  <p className="font-extralight flex items-center max-w-xs text-gray-400">Affordable VPN</p>
               </div>
               <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
                  {footerNavs.map(nav => (
                     <div key={nav.label}>
                        <h2 className="mb-6 text-sm font-medium uppercase tracking-tighter text-gray-900 dark:text-white">
                           {nav.label}
                        </h2>
                        <ul className="grid gap-2">
                           {nav.items.map(item => (
                              <li key={item.name}>
                                 <Link
                                    href={item.href}
                                    className="cursor-pointer text-sm font-[450] text-gray-400 duration-200 hover:text-gray-200"
                                 >
                                    {item.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col gap-2 rounded-md border-neutral-700/20 px-8 py-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
               <div className="flex space-x-5 sm:mt-0 sm:justify-center">
                  {footerSocials.map(social => (
                     <Link
                        key={social.name}
                        href={social.href}
                        className="fill-gray-500 text-gray-500 hover:fill-gray-900 hover:text-gray-900 dark:hover:fill-gray-600 dark:hover:text-gray-600"
                     >
                        {social.icon}
                        <span className="sr-only">{social.name}</span>
                     </Link>
                  ))}
               </div>
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  Copyright ©
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  <Link href="/" className="cursor-pointer">
                     VPNET
                  </Link>
                  . All Rights Reserved.
               </span>
            </div>
         </div>
         {/*   <SiteBanner /> */}
      </footer>
   )
}
