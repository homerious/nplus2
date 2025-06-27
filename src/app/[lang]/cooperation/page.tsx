import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"

interface CooperationPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function CooperationPage({ params }: CooperationPageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const { cooperation: messages } = dict

  const partnerIds = ['origami', 'grab', 'hashkey', 'monster']

  return (
      <div className="container mx-auto px-4">
        <div className="flex  flex-col">
          <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh] w-full">
              <Image
                  src="/images/cooperation.jpg"
                  alt={messages.title}
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="mb-4 text-5xl font-bold">{messages.title}</h1>
                <p className="text-xl">{messages.subtitle}</p>
              </div>
            </div>

            {/* Partners Section */}
            <div className="container mx-auto px-4 py-16">
              <div className="space-y-20">
                {partnerIds.map((partnerId) => {
                  const partner = messages.partners[partnerId]
                  return (
                      <div key={partnerId} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Partner Header */}
                        <div className="p-6 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                  {partner.name}
                                  {partner.nameEn !== partner.name && (
                                      <span className="ml-2 text-sm text-gray-500">
                              ({partner.nameEn})
                            </span>
                                  )}
                                </h2>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <span>{partner.country}</span>
                                  <span>•</span>
                                  <span>{partner.industry}</span>
                                  <span>•</span>
                                  <span>{partner.period}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Partner Content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative lg:h-auto flex items-center">
                            <Image
                                src={`/images/partners/${partnerId}.jpg`}
                                alt={partner.name}
                                className="object-contain"
                                width={1000}
                                height={1000}
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  objectFit: 'cover',
                                }}
                            />
                          </div>
                          <div className="p-6 space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {messages.sections.companyProfile}
                              </h3>
                              <p className="text-gray-700">{partner.description}</p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {messages.sections.beforeStatus}
                              </h3>
                              <p className="text-gray-700">{partner.beforeStatus}</p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {messages.sections.afterStatus}
                              </h3>
                              <p className="text-gray-700">{partner.afterStatus}</p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                                {messages.sections.results}
                              </h3>
                              <p className="text-blue-800">{partner.results}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
