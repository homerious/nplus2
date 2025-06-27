"use client"

import { usePathname, useRouter } from "next/navigation"
import { siteConfig } from "@/config/site"

export function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleChange = (newLang: string) => {
    const currentPath = pathname.split("/").slice(2).join("/")
    router.push(`/${newLang}/${currentPath}`)
  }

  return (
    <select
      value={lang}
      onChange={(e) => handleChange(e.target.value)}
      className="h-9 w-[120px] rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background"
    >
      {siteConfig.languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  )
}