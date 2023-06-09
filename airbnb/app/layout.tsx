import './globals.css'
import { Inter, Nunito_Sans } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import RentModal from './components/Modals/RentModal'
import getCurrentUser from './actions/getCurrentUser'
import SearchModal from './components/Modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JevonBnB',
  description: 'AirBnB Clone',
}

const font = Nunito_Sans({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        
        {children}
      </body>
    </html>
  )
}
