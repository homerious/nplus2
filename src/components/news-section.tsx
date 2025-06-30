"use client"

import { Calendar, MapPin, Users } from "lucide-react"

interface NewsSectionProps {
  dict: any
  lang: string
}

export function NewsSection({ dict, lang }: NewsSectionProps) {
  return (
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            {dict.home.news.title}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-3">
                  {dict.home.news.eventTitle}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {dict.home.news.eventDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span>{dict.home.news.eventDate || "2025年春季"}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <span>{dict.home.news.eventLocation || "亚洲多地"}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-purple-500" />
                    <span>{dict.home.news.eventParticipants || "1000+ 参会者"}</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    {dict.home.news.eventTheme || "峰会主题"}
                  </h4>
                  <p className="text-blue-800 text-sm mb-3">
                    {dict.home.news.eventThemeText || "商业向善，共创未来"}
                  </p>

                  <h4 className="font-semibold text-blue-900 mb-2">
                    {dict.home.news.eventTopics || "核心议题"}
                  </h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• {dict.home.news.topic1 || "跨国产业合作"}</li>
                    <li>• {dict.home.news.topic2 || "公益创新模式"}</li>
                    <li>• {dict.home.news.topic3 || "青年绿色发展"}</li>
                  </ul>
                </div>

                <div className="flex justify-center sm:flex-row gap-3 mt-6">
                  <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-700 shadow-md hover:shadow-lg">
                    {dict.home.news.registerButton || "立即报名"}
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-white px-6 py-3 text-sm font-medium text-blue-600 transition-all hover:bg-blue-50 shadow-md hover:shadow-lg">
                    {dict.home.news.learnMoreButton || "了解更多"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
