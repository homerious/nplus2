// src/app/[lang]/charity/[slug]/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"
import { notFound } from "next/navigation"

interface CharityDetailPageProps {
  params: Promise<{
    lang: string
    slug: string
  }>
}

export default async function CharityDetailPage({ params }: CharityDetailPageProps) {
  const { lang, slug } = await params

  const dict = await getDictionary(lang)
  const detail = dict.charityDetail[slug]

  if (!detail) {
    notFound()
  }

  return (
      <div className="container mx-auto px-4">
        <div className="flex  flex-col">
          <div className=" bg-gray-50">
            {/* 顶部图片 */}
            <div className="relative h-[40vh] w-full">
              <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 bg-black/30"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">{detail.title}</h1>
              </div>
            </div>

            {/* 活动信息和内容 */}
            <div className="container mx-auto px-4 py-12">
              <div className="rounded-lg bg-white p-8 shadow-md">
                {/* 基本信息 */}
                <div className="mb-8 border-b pb-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">活动时间</h3>
                      <p className="mt-1">{detail.date}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">活动地点</h3>
                      <p className="mt-1">{detail.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">活动主题</h3>
                      <p className="mt-1">{detail.theme}</p>
                    </div>
                  </div>
                </div>

                {/* 详细内容 */}
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{__html: detail.content}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
