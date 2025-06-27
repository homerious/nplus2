import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { getDictionary } from "@/lib/dictionary"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(props: {
  params: Promise<{lang: string}>
}): Promise<Metadata> {
  const { lang } = await props.params
  const dict = await getDictionary(lang)

  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL('https://your-domain.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'zh-CN': '/zh',
        'zh-TW': '/zh-hant',
      },
    },
  }
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  const dict = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header dict={dict} lang={lang} />
          <main className="flex-1">{children}</main>
          <Footer dict={dict} />
        </div>
      </body>
    </html>
  )
}
