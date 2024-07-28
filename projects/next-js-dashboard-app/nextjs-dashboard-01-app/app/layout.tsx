import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>My App</h1>
        {children}
        <h2>Footer</h2>
      </body>
    </html>
  );
}
