"use client"

import Image from 'next/image'
import Link from 'next/link'

interface FeatureSection {
  title: string
  description: string
  image: string
  link: string
  buttonText: string
  buttonColor: string
}

interface FeatureSectionsProps {
  dict: any
  lang: string
}

export function FeatureSections({ dict, lang }: FeatureSectionsProps) {
  const features: FeatureSection[] = [
    {
      title: dict.home.history.title,
      description: dict.home.history.description,
      image: '/images/chamber-history.jpg',
      link: `/${lang}/about`,
      buttonText: dict.common.readMore,
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: dict.home.charity.title,
      description: dict.home.charity.description,
      image: '/images/charity-activities.png',
      link: `/${lang}/charity`,
      buttonText: dict.common.readMore,
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: dict.home.international.title,
      description: dict.home.international.description,
      image: '/images/international-cooperation.jpg',
      link: `/${lang}/cooperation`,
      buttonText: dict.common.readMore,
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700'
    }
  ]

  return (
      <div className="space-y-8 py-8">
        {features.map((feature, index) => (
            <div
                key={feature.title}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative h-64 w-full overflow-hidden md:h-auto md:w-1/2">
                  <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex w-full flex-col justify-center space-y-4 bg-white p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-blue-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                  <div>
                    <Link
                        href={feature.link}
                        className={`inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition-all ${feature.buttonColor} shadow-md hover:shadow-lg`}
                    >
                      {feature.buttonText}
                      <svg
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
  )
}
