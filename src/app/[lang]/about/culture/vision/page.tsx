// src/app/[lang]/about/vision/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"

interface VisionPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function VisionPage({ params }: VisionPageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const messages = dict.vision

  return (
      <div className=" bg-white">
        {/* 顶部横幅 */}
        <div className="relative h-[40vh] w-full">
          <Image
              src="/images/vision-banner.jpg"
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
            {/* 商业愿景部分 */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 p-8 shadow-lg">
                <div className="relative z-10">
                  <p className="text-lg leading-relaxed text-gray-800">
                    {messages.sections.businessVision.content}
                  </p>
                </div>

                {/* 装饰元素 */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-100/50" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-100/50" />
              </div>
            </div>

            {/* 慈善愿景部分 */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-rose-50 p-8 shadow-lg">
                <div className="relative z-10">
                  <p className="text-lg leading-relaxed text-gray-800">
                    {messages.sections.charitableVision.content}
                  </p>
                </div>

                {/* 装饰元素 */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-100/50" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-rose-100/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
