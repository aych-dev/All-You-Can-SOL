import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';
import Wallet from './utils/Wallet';

export const metadata: Metadata = {
  title: 'AYCS',
  description: 'All You Can SOL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wallet>
      <div className='flex flex-col h-screen max-h-screen'>
        <NavBar />
        <div className='flex-grow overflow-y-auto bg-customPage text-customText'>
          {children}
        </div>
      </div>
    </Wallet>
  );
}
