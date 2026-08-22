import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regis Foods | Quality Frozen Food Delivered',
  description:
    'Regis Foods is a family run frozen food delivery business serving the south of England and Wales with fish, shellfish, meat, poultry and gourmet specialities.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
