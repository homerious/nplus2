import { getDictionary } from "@/lib/dictionary"
import { NewsSection } from "@/components/news-section"
import { CaseCarousel } from "@/components/case-carousel"
import Link from "next/link"
import Image from "next/image"

export default async function Home({
                                     params,
                                   }: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/home-hero-bg.jpg')",
              }}
          />

          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Image
                width={100}
                height={100}
                className="w-32 h-32 rounded-full mx-auto mb-6 drop-shadow-lg"
                src="/images/logo.jpg"
            >

            </Image>
            <h1 className="text-4xl md:text-4xl font-bold text-white mb-6 leading-loose drop-shadow-lg">
              {dict.home.hero.name}
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {dict.home.hero.slogan}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              {dict.home.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                  href={`/${lang}/join`}
                  className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl"
              >
                {dict.home.buttons.joinNow}
              </Link>
              <Link
                  href={`/${lang}/about`}
                  className="inline-flex items-center rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/20 shadow-lg hover:shadow-xl"
              >
                {dict.home.buttons.latestNews || "了解更多"}
              </Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-16">
          {/* 全球影响力 */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {dict.home.impact.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {dict.home.impact.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-gray-700">{dict.home.impact.stats.countries}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">3万+</div>
                <div className="text-gray-700">{dict.home.impact.stats.members}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">50万+</div>
                <div className="text-gray-700">{dict.home.impact.stats.beneficiaries}</div>
              </div>
            </div>
          </section>

          {/* 核心支柱 */}
          <section className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {dict.home.pillars.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed text-center">
              {dict.home.pillars.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dict.home.pillars.items.cooperation.title}</h3>
                <p className="text-gray-600">{dict.home.pillars.items.cooperation.description}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dict.home.pillars.items.innovation.title}</h3>
                <p className="text-gray-600">{dict.home.pillars.items.innovation.description}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{dict.home.pillars.items.development.title}</h3>
                <p className="text-gray-600">{dict.home.pillars.items.development.description}</p>
              </div>
            </div>
          </section>

          {/* 最新动态模块 */}
          <NewsSection dict={dict} lang={lang} />

          {/* 合作案例轮播 */}
          <section>
            <CaseCarousel dict={dict} lang={lang} />
          </section>
        </div>
      </div>
  )
}
