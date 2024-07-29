import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* add external font*/}
      <body className={`${inter.className} antialiased`}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div> 
          <Link className="text-blue-500" href="/dashboard">Dashboard</Link>
        </div>
        {children}
        <h2>Footer</h2>
        </body>
    </html>
  );
}
