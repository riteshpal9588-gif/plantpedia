import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'PlantPedia',
  description: 'PlantPedia is an educational platform for discovering plants, trees, flowers, herbs, and medicinal species.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-[#f9f7f1] text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
