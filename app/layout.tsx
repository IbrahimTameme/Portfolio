import "./globals.css";
export const metadata = {
  title: 'First-Road',
  description: 'شركة برمجيات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className=" bg-body-color font-mainFont">
        {children}
      </body>
    </html>
  )
}
