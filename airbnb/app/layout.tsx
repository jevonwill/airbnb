import './globals.css'
import { Inter, Nunito_Sans } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JevonBnB',
  description: 'AirBnB Clone',
}

const font = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
