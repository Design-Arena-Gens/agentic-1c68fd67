import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flet Shqip',
  description: 'M?soni dhe flisni shqip me shqiptimin e duhur',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-primary-50 to-white text-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-700">Flet Shqip</h1>
            <p className="text-gray-600 mt-2">Fraza t? p?rditshme, shqiptim natyral.</p>
          </header>
          {children}
          <footer className="mt-12 text-sm text-gray-500">
            ? {new Date().getFullYear()} Flet Shqip
          </footer>
        </div>
      </body>
    </html>
  );
}
