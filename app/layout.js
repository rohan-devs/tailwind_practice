import './globals.css'

export const metadata = {
  title: 'learning tailwind',
  description: 'global styles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
