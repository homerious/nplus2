// src/app/[lang]/about/introduction/message/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"

interface PresidentMessagePageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function PresidentMessagePage({ params }: PresidentMessagePageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const { presidentMessage: messages } = dict

  return (
      <div className="bg-white">
        {/* 页面标题区 */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-xl text-gray-700">{messages.pageTitle}</h1>
          </div>
        </div>

        {/* 主要内容区 */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* 左侧会长信息 */}
            <div className="lg:w-1/3">
              <div className="sticky top-8 space-y-6">
                <div className="overflow-hidden rounded-full">
                  <Image
                      src="/images/president.jpg"
                      alt={messages.presidentInfo.title}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600">{messages.presidentInfo.organization}</div>
                  <h2 className="text-2xl font-bold">{messages.presidentInfo.title}</h2>
                  <p className="text-gray-700">{messages.presidentInfo.description}</p>
                </div>
              </div>
            </div>

            {/* 右侧致辞内容 */}
            <div className="lg:w-2/3">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold">{messages.messageTitle}</h2>
                <div className="text-sm text-gray-500">{messages.messageDate}</div>

                <p className="my-6 text-lg leading-relaxed whitespace-pre-line">
                  {messages.greeting}
                </p>

                <p className="my-4">{messages.content.intro}</p>
                <p className="my-4">{messages.content.history}</p>
                <p className="my-4">{messages.content.charity}</p>
                <p className="my-4">{messages.content.challenge}</p>
                <p className="my-4">{messages.content.future}</p>
                <p className="my-4">{messages.content.commitment}</p>
                <p className="my-4">{messages.content.collaboration}</p>

                <p className="my-4">{messages.closing.thanks}</p>
                <p className="my-4">{messages.closing.farewell}</p>

                <div className="mt-12 text-right">
                  <p className="font-bold">{messages.closing.signature.name}</p>
                  <p>{messages.closing.signature.title}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
  )
}
