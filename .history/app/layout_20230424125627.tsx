import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { SessionProvider } from '@/components/SessionProvider'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={}>
        <div className="flex">
          {/* Sidebar component */}
          <div className="side bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <Sidebar />
          </div>
          
          {/* Client provider */}
          <div className="flex-1 bg-[#31334B]">
            {children}
          </div>
        </div>
        </SessionProvider>
      </body>
    </html>
  )
}
