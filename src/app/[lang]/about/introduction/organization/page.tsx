// src/app/[lang]/about/introduction/organization/page.tsx
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'

interface MemberProps {
  positionKey: string
  name: {
    zh: string
    'zh-hant': string
    en: string
  },
  photo: string
}

interface PageProps {
  params: Promise<{
    lang: string
  }>
}

const OrganizationPage = async ({ params }: PageProps) => {
  const { lang } = await params

  const dict = await getDictionary(lang)

  const members: MemberProps[] = [
    {
      positionKey: "president",
      name: {
        zh: '刘志宏',
        'zh-hant': '劉志宏',
        en: 'Liu Zhihong'
      },
      photo: '/images/members/president.jpg'
    },
    {
      positionKey: "vicePresident",
      name: {
        zh: '陈福国',
        'zh-hant': '陳福國',
        en: 'Chen Fuguo'
      },
      photo: '/images/members/vice-president.jpg'
    },
    {
      positionKey: "executiveDeputyDirector",
      name: {
        zh: '蔡民生',
        'zh-hant': '蔡民生',
        en: 'Cai Minsheng'
      },
      photo: '/images/members/deputy-director.jpg'
    },
    {
      positionKey: "executiveDirector",
      name: {
        zh: '林嘉诚',
        'zh-hant': '林嘉誠',
        en: 'Lin Jiacheng'
      },
      photo: '/images/members/executive-director.jpg'
    },
    {
      positionKey: "fundManager",
      name: {
        zh: '陈叔生',
        'zh-hant': '陳叔生',
        en: 'Chen Shusheng'
      },
      photo: '/images/members/fund-manager.jpg'
    },
    {
      positionKey: "marketResearchDirector",
      name: {
        zh: 'Katsuki Kenichi',
        'zh-hant': 'Katsuki Kenichi',
        en: 'Katsuki Kenichi'
      },
      photo: '/images/members/market-research.jpg'
    },
    {
      positionKey: "operationsDirector",
      name: {
        zh: '陈国',
        'zh-hant': '陳國',
        en: 'Chen Guo'
      },
      photo: '/images/members/operations.jpg'
    },
    {
      positionKey: "chiefConsultant",
      name: {
        zh: '张博',
        'zh-hant': '張博',
        en: 'Zhang Bo'
      },
      photo: '/images/members/chief-consultant.jpg'
    },
    {
      positionKey: "financialMember",
      name: {
        zh: '刘福生',
        'zh-hant': '劉福生',
        en: 'Liu Fusheng'
      },
      photo: '/images/members/finance-1.jpg'
    },
    {
      positionKey: "financialMember",
      name: {
        zh: '黄怡婷',
        'zh-hant': '黃怡婷',
        en: 'Huang Yiting'
      },
      photo: '/images/members/finance-2.jpg'
    },
  ]
  return (
      <div className="min-h-screen bg-white">
        {/* 页面标题 */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-3xl font-bold">
              {dict.organization.title}
            </h1>
            <p className="mt-2 text-center text-gray-600">
              {dict.organization.subTitle}
            </p>
          </div>
        </div>

        {/* 组织架构图 */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
                <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    {/* 照片容器 */}
                    <div className="relative h-48 w-48 overflow-hidden rounded-full">
                      <Image
                          src={member.photo}
                          alt={'member'}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* 职位信息 */}
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {dict.organization.positions[member.positionKey]}
                      </h3>
                      <p className="mt-4 text-lg font-medium text-blue-600">
                        {member.name[lang]}
                      </p>
                    </div>

                    {/* 装饰性边框 */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-colors duration-300 group-hover:border-blue-500" />
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default OrganizationPage
