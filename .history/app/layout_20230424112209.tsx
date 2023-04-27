import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

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
        <div className="flex">
          {/* Sidebar component */}
          <Sidebar />
          {/* Client provider */}
          <div className="flex-1 bg-[#202123]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
