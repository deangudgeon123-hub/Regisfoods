import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regis Foods | Premium Frozen Food Delivered',
  description:
    'Concept redesign for Regis Foods, a family-run frozen food delivery business serving Southern England and Wales.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
