import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { siteConfig } from "@/config/site"

// 获取所有支持的语言代码
const locales = siteConfig.languages.map(lang => lang.code)

function getLocale(request: NextRequest) {
  try {
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    // 获取 accept-language
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

    return match(languages, locales, siteConfig.defaultLang)
  } catch (error) {
    console.error('Locale matching error:', error)
    return siteConfig.defaultLang
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  console.log('Middleware triggered for:', request.nextUrl.pathname)
  // 检查是否是根路径或缺少语言代码
  const pathnameIsMissingLocale = locales.every(
      (locale) => !pathname.startsWith(`/${locale}`)
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // 构建新的URL
    const newUrl = new URL(
        `/${locale}${pathname === '/' ? '' : pathname}`,
        request.url
    )

    // 保留任何查询参数
    request.nextUrl.searchParams.forEach((value, key) => {
      newUrl.searchParams.set(key, value)
    })

    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  matcher: [
    // 匹配所有路径但排除不需要重定向的路径
    '/((?!_next|api|favicon.ico).*)',
  ]
}
