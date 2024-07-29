import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* add external font*/}
      <body className={`${inter.className} antialiased`}>
        <h1>Dashboard</h1>
        <h1 className="text-blue-500">I'm blue!</h1>
        {children}
        <h2>Footer</h2>
        </body>
    </html>
  );
}
