import { Sarpanch } from "next/font/google"
import "./globals.css"

const sarpanch = Sarpanch({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={sarpanch.className}>{children}</body>
    </html>
  )
}
