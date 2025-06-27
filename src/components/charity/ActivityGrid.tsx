'use client'
import Image from 'next/image'
import Link from 'next/link'

interface Activity {
  id: string
  title: string
  status: string
  dateRange: string
  location: string
  description: string
  thumbnail: string
  link: string
}

interface ActivityGridProps {
  activities: Activity[]
  lang: string
  messages: {
    status: {
      [key: string]: string
    }
    readMore: string
  }
  filter: string
}

export default function ActivityGrid({ activities, lang, messages, filter }: ActivityGridProps) {
  // 筛选活动
  const filteredActivities = filter === 'all'
      ? activities
      : activities.filter(activity => activity.status === filter)

  return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map((activity) => (
            <Link
                key={activity.id}
                href={`/${lang}/charity${activity.link}`}
                className="group transform overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full">
                <Image
                    src={activity.thumbnail}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    style={{ objectPosition: 'top' }}
                />
                <div className="absolute right-3 top-3">
              <span className={`rounded-full px-3 py-1 text-sm font-medium text-white
                ${activity.status === 'upcoming' ? 'bg-blue-500' :
                  activity.status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'}`}>
                {messages.status[activity.status]}
              </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800">
                  {activity.title}
                </h3>
                <div className="mb-4 flex items-center text-sm text-gray-600">
                  <span className="mr-4">{activity.dateRange}</span>
                  <span>{activity.location}</span>
                </div>
                <p className="mb-4 text-gray-600">
                  {activity.description}
                </p>
                <div className="flex items-center text-green-500">
                  <span>{messages.readMore}</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
        ))}
      </div>
  )
}
