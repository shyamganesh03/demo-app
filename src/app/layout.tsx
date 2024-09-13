import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Port Folio',
  description: 'This is an personnel port folio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
