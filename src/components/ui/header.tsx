"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useState } from "react"

interface HeaderProps {
  dict: any
  lang: string
}

export function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: dict.nav.home || "Home", href: `/${lang}` },
    { name: dict.nav.about || "About", href: `/${lang}/about` },
    { name: dict.nav.cases || "Cases", href: `/${lang}/cases` },
    { name: dict.nav.charity || "Charity", href: `/${lang}/charity` },
    { name: dict.nav.join || "Join Us", href: `/${lang}/join` },
    { name: dict.nav.contact || "Contact", href: `/${lang}/contact` },
  ]

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80 px-4 md:px-16">
        <div className="container flex h-16 items-center mx-auto">
          <div className="mr-4 flex">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Image
                  width={60}
                  height={60}
                  src="/images/logo.jpg"
                  alt="Logo"
                  className="rounded-full"
              />
            </Link>
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
              className="md:hidden ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
          >
            <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                  />
              ) : (
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                  />
              )}
            </svg>
          </button>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors hover:text-foreground/80 ${
                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                    }`}
                >
                  {item.name}
                </Link>
            ))}
          </nav>

          {/* 语言切换器 */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
            <LanguageSwitcher lang={lang} />
          </div>

          {/* 移动端菜单 */}
          {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden shadow-lg">
                <nav className="flex flex-col py-4">
                  {navigation.map((item) => (
                      <Link
                          key={item.href}
                          href={item.href}
                          className={`px-4 py-2 transition-colors hover:bg-gray-100 ${
                              pathname === item.href ? "text-foreground font-medium" : "text-foreground/60"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                  ))}
                  <div className="px-4 py-2 border-t mt-2 pt-4">
                    <LanguageSwitcher lang={lang} />
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}
