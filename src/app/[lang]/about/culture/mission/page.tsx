// src/app/[lang]/about/mission/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"

interface MissionPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function MissionPage({ params  }: MissionPageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const messages = dict.mission

  return (
      <div className="min-h-screen bg-white">
        {/* 顶部横幅 */}
        <div className="relative h-[40vh] w-full">
          <Image
              src="/images/mission-banner.jpg"
              alt={messages.title}
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-black/40" />


          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-5xl font-bold text-white">
            {messages.title}
          </h1>
        </div>

        {/* 主要内容区域 */}
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl space-y-16">
            {/* 基本宗旨 */}
            <section className="relative overflow-hidden rounded-2xl bg-blue-50 p-8">
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-blue-900">
                  {messages.sections.fundamentalPurpose.title}
                </h2>
                <p className="text-lg leading-relaxed text-blue-800">
                  {messages.sections.fundamentalPurpose.content}
                </p>
              </div>
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-100/50" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-100/50" />
            </section>

            {/* 商业合作 */}
            <section className="relative overflow-hidden rounded-2xl bg-green-50 p-8">
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-green-900">
                  {messages.sections.businessCooperation.title}
                </h2>
                <p className="text-lg leading-relaxed text-green-800">
                  {messages.sections.businessCooperation.content}
                </p>
              </div>
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-green-100/50" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-green-100/50" />
            </section>

            {/* 慈善事业 */}
            <section className="relative overflow-hidden rounded-2xl bg-amber-50 p-8">
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-amber-900">
                  {messages.sections.charitableCause.title}
                </h2>
                <p className="text-lg leading-relaxed text-amber-800">
                  {messages.sections.charitableCause.content}
                </p>
              </div>
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-100/50" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-amber-100/50" />
            </section>
          </div>
        </div>
      </div>
  )
}
