import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '~/components/theme-provider'
import { Toaster } from '~/components/ui/sonner'
import { ny } from '~/lib/utils'
import '~/styles/globals.css'

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans',
})
export const metadata: Metadata = {
   title: 'VPnet',
   description: 'Vpn on ur finger tips',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={ny(
               'bg-background min-h-screen font-sans antialiased',
               fontSans.variable,
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               disableTransitionOnChange
            >
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   )
}
