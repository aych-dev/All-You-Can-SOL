import './globals.css';
import NavBar from './components/NavBar';
import { Wallet } from '@/app/components/Wallet';
import type { Metadata } from 'next';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'AYCS',
  description: 'All You Can SOL',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col h-screen max-h-screen'>
          <Wallet>
            <NavBar />
            <div className='flex-grow overflow-y-auto bg-customPage text-customText'>
              {children}
            </div>
            <Footer />
          </Wallet>
          <ToastContainer position='bottom-right' />
        </div>
      </body>
    </html>
  );
}
