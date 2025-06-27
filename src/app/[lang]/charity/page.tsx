'use client'
import { useState } from 'react'

function ClientWrapper({ messages, activities, lang }) {
  const [currentFilter, setCurrentFilter] = useState('all')

  return (
      <>
        <ActivityFilter
            tabs={messages.tabs}
            onFilterChange={setCurrentFilter}
            currentFilter={currentFilter}
        />
        <ActivityGrid
            activities={activities}
            lang={lang}
            messages={messages}
            filter={currentFilter}
        />
      </>
  )
}

// src/app/[lang]/charity/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"
import ActivityFilter from '@/components/charity/ActivityFilter'
import ActivityGrid from '@/components/charity/ActivityGrid'

interface CharityPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function CharityPage({ params }: CharityPageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const { charity: messages } = dict

  return (
      <div className="container mx-auto px-4">
        <div className="flex  flex-col">
          <div className="min-h-screen bg-gray-50">
            {/* 顶部横幅 */}
            <div className="relative h-[50vh] w-full">
              <Image
                  src="/images/charity/banner.jpg"
                  alt={messages.title}
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/70 to-blue-500/70"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="mb-4 text-5xl font-bold">{messages.title}</h1>
                <p className="text-xl">{messages.subtitle}</p>
              </div>
            </div>

            {/* 主要内容区域 */}
            <div className="container mx-auto px-4 py-12">
              <ClientWrapper
                  messages={messages}
                  activities={messages.activities}
                  lang={lang}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

