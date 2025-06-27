import Link from 'next/link'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

export default async function AboutPage({
                                          params,
                                        }: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  const dict = await getDictionary(lang)

  return (
      <div className="relative min-h-screen">
        {/* 背景图片 */}
        <div className="absolute inset-0 -z-10 ">
          <Image
              src="/images/about-bg.jpg"
              alt="Background"
              fill
              className="object-cover opacity-10"
              priority
          />
        </div>

        {/* 主要内容 */}
        <div className="container mx-auto animate-fadeIn px-4 py-16">
          <h1 className="animate-slideDown mb-12 text-center text-4xl font-bold">
            {dict.about.title}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* 商会简介板块 */}
            <div className="animate-slideUp group relative overflow-hidden rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
              {/* 装饰性背景 */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-80" />

              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                {dict.about.introduction.title}
              </h2>
              <ul className="space-y-4">
                {[
                  { href: 'introduction/history', text: dict.about.introduction.history },
                  { href: 'introduction/organization', text: dict.about.introduction.organization },
                  { href: 'introduction/message', text: dict.about.introduction.message },
                ].map((item) => (
                    <li
                        key={item.href}
                        className="transform transition-all duration-300 hover:translate-x-2"
                    >
                      <Link
                          href={`/${lang}/about/${item.href}`}
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                      >
                        <span className="text-blue-500">→</span>
                        <span>{item.text}</span>
                      </Link>
                    </li>
                ))}
              </ul>
            </div>


            {/* 商会文化板块 */}
            <div className="animate-slideUp [animation-delay:200ms] group relative overflow-hidden rounded-xl bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
              {/* 装饰性背景 */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-50 to-orange-50 opacity-80" />

              <h2 className="mb-6 text-2xl font-semibold text-gray-800">
                {dict.about.culture.title}
              </h2>
              <ul className="space-y-4">
                {[
                  { href: 'culture/values', text: dict.about.culture.values },
                  { href: 'culture/mission', text: dict.about.culture.mission },
                  { href: 'culture/vision', text: dict.about.culture.vision },
                ].map((item) => (
                    <li
                        key={item.href}
                        className="transform transition-all duration-300 hover:translate-x-2"
                    >
                      <Link
                          href={`/${lang}/about/${item.href}`}
                          className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                      >
                        <span className="text-blue-500">→</span>
                        <span>{item.text}</span>
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}
