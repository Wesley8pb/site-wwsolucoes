import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'WW Soluções | IA no Direito Eleitoral',
  description: 'Cursos e soluções em Inteligência Artificial para o Direito Eleitoral e Cível.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-zinc-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
