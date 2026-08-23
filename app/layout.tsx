import './globals.css';
import type { Metadata } from 'next';
import ScrollReset from './ScrollReset';

export const metadata: Metadata = {
  title: 'Harbour & Hearth | Premium Frozen Food Concept',
  description:
    'Harbour & Hearth is a fictional premium frozen food delivery concept exploring stronger brand positioning, product presentation and digital experience.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
