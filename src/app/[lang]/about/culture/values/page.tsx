// src/app/[lang]/about/culture/core-values/page.tsx
import Image from 'next/image'
import {getDictionary} from "@/lib/dictionary";

interface CoreValuesPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function CoreValuesPage({ params }: CoreValuesPageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const messages = dict.coreValues
  // 核心价值观部分渲染函数
  const renderValueSection = (section: any, imageUrl: string) => (
      <div className="mb-16">
        <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl">
          <Image
              src={imageUrl}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h2 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
            {section.title}
          </h2>
        </div>

        <p className="mb-8 text-xl text-gray-600 italic">
          {section.intro}
        </p>

        {Object.entries(section.content).map(([key, content]: [string, any]) => (
            <div key={key} className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                {content.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {content.text}
              </p>
            </div>
        ))}
      </div>
  )

  return (
      <div className="min-h-screen bg-white">
        {/* 顶部横幅 */}
        <div className="relative h-[40vh] w-full">
          <Image
              src="/images/core-values-banner.jpg"
              alt={messages.title}
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-black/50" />

          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white">
            {messages.title}
          </h1>
        </div>

        {/* 主要内容区域 */}
        <div className="container mx-auto px-4 py-16">
          {renderValueSection(messages.integrity, '/images/integrity.jpg')}
          {renderValueSection(messages.cooperation, '/images/cooperation.jpg')}
          {renderValueSection(messages.innovation, '/images/innovation.jpg')}
          {renderValueSection(messages.charity, '/images/charity.jpg')}
        </div>
      </div>
  )
}
