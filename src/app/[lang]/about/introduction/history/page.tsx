// src/app/[lang]/about/introduction/history/page.tsx
import Image from 'next/image'
import {getDictionary} from "@/lib/dictionary";

// 定义页面属性接口
interface HistoryPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function HistoryPage({ params }: HistoryPageProps) {
  // 根据语言选择内容
  const { lang } = await params

  const dict = await getDictionary(lang)
  const messages = dict.history
  return (
      <div className="min-h-screen bg-white">
        {/* 顶部图片区域 */}
        <div className="relative h-[50vh] w-full">
          <Image
              src="/images/chamber-history.jpg"
              alt={messages.title}
              fill
              className="object-cover"
              priority
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />

          {/* 标题 */}
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl font-bold text-white">
            {messages.title}
          </h1>
        </div>

        {/* 主要内容区域 */}
        <div className="container mx-auto px-4 py-12">
          <div className="prose prose-lg mx-auto max-w-4xl">
            {/* 初始段落 */}
            <p className="first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600">
              {messages.initialParagraph}
            </p>

            {/* 商会的初心与使命 */}
            <div className="my-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {messages.mission.title}
              </h2>
              <p className="text-gray-700">{messages.mission.content}</p>
            </div>

            {/* 每天都在书写新的篇章 */}
            <div className="my-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {messages.newChapter.title}
              </h2>
              <p className="mb-6 text-gray-700">{messages.newChapter.mainContent}</p>

              {/* 段落列表 */}
              <div className="space-y-6">
                {messages.newChapter.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-700">
                      {paragraph}
                    </p>
                ))}
              </div>
            </div>

            {/* 创新发展 */}
            <div className="my-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {messages.innovation.title}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {/* 创新支持 */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {messages.innovation.support.title}
                  </h3>
                  <p className="text-gray-700">
                    {messages.innovation.support.content}
                  </p>
                </div>

                {/* 行业生态构建 */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {messages.innovation.ecosystem.title}
                  </h3>
                  <p className="text-gray-700">
                    {messages.innovation.ecosystem.content}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700">{messages.innovation.vision}</p>
            </div>

            {/* 未来展望 */}
            <div className="my-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                {messages.future.title}
              </h2>
              <p className="text-gray-700">{messages.future.content}</p>
            </div>

            {/* 结语 */}
            <div className="my-12 rounded-lg bg-blue-50 p-8 text-center">
              <p className="mb-4 text-2xl font-bold text-blue-600">
                {messages.slogan}
              </p>
              <p className="text-gray-700">{messages.conclusion}</p>
            </div>

          </div>
        </div>
      </div>
  )
}
