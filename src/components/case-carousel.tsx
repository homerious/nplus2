"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CaseItem {
  country: string
  company: string
  type: string
  description: string
}

interface CaseCarouselProps {
  dict: any
  lang: string
}

export function CaseCarousel({ dict, lang }: CaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // 从字典获取案例数据
  const cases: CaseItem[] = dict.home.cases.items || []

  // 自动播放
  useEffect(() => {
    if (!isAutoPlaying || cases.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, cases.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (cases.length === 0) {
    return null
  }

  return (
      <div
          className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {dict.home.cases.title}
          </h3>
          <div className="flex space-x-2">
            <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
                aria-label="上一个案例"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
                aria-label="下一个案例"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
          <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cases.map((caseItem, index) => (
                <div key={index} className="w-full flex-shrink-0 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {caseItem.company}
                        </h4>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {caseItem.type}
                    </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {caseItem.country}
                  </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* 指示器 */}
        <div className="flex justify-center space-x-2 mt-4">
          {cases.map((_, index) => (
              <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                          ? 'bg-blue-600 w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`跳转到第${index + 1}个案例`}
              />
          ))}
        </div>

        {/* 案例计数器 */}
        <div className="text-center mt-2">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {cases.length}
        </span>
        </div>
      </div>
  )
}
