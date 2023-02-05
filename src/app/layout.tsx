import './globals.css'
import {Poppins} from '@next/font/google'

const poppins = Poppins({
  weight: ['300','500','600', ],
  subsets: ['latin']

})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
