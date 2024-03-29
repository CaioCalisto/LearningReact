import type { Metadata } from 'next'
import { Inter, Capriola } from 'next/font/google'
import '../styles/globals.scss'

import SidebarMenu from '@/app/shared/layout/sidebar-menu'

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});

export const metadata: Metadata = {
  title: 'My App',
  description: 'Studying nextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${capriola.className}`}>
        <main>
          <header></header>
          <article>{children}</article>
          <aside>
            <SidebarMenu />
          </aside>
          <footer></footer>
        </main>
      </body>
    </html>
  )
}
