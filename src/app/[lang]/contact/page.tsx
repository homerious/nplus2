// src/app/[lang]/contact/page.tsx
import Image from 'next/image'
import { getDictionary } from "@/lib/dictionary"
import ContactForm from '@/components/contact/ContactForm'

interface ContactPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params

  const dict = await getDictionary(lang)
  const { contact: messages } = dict

  return (
      <div className="container mx-auto px-4">
        <div className="flex  flex-col">
          <div className="min-h-screen bg-gray-50">
            {/* 顶部横幅 */}
            <div className="relative h-[60vh] w-full">
              <Image
                  src="/images/contact/banner.jpg"
                  alt={messages.title}
                  fill
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="mb-4 text-5xl font-bold">{messages.title}</h1>
                <p className="text-xl">{messages.subtitle}</p>
              </div>
            </div>

            {/* 主要内容区域 */}
            <div className="container mx-auto px-4 py-16">
              <div>
                {/* 左侧联系信息和处理流程 */}
                <div className="space-y-12">
                  {/* 联系方式 */}
                  <div className="rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                      {messages.contactInfo.title}
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 hidden">
                        <div className="rounded-full bg-blue-100 p-3">
                          <Image
                              src="/images/contact/line-icon.svg"
                              alt="Line"
                              width={24}
                              height={24}
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{messages.contactInfo.line.label}</p>
                          <p className="text-lg font-medium">{messages.contactInfo.line.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-blue-100 p-3">
                          <Image
                              src="/images/contact/email-icon.svg"
                              alt="Email"
                              width={24}
                              height={24}
                              style={{ maxWidth: 'initial' }}
                          />
                        </div>
                        <div style={{wordBreak: 'break-word'}}>
                          <p className="text-sm text-gray-600">{messages.contactInfo.email.label}</p>
                          <p className="text-lg font-medium">{messages.contactInfo.email.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 处理流程 */}
                  <div className="rounded-xl bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                      {messages.process.title}
                    </h2>
                    <div className="space-y-6">
                      {messages.process.steps.map((step: any, index: number) => (
                          <div key={index} className="flex">
                            <div className="mr-4 flex flex-col items-center">
                              <div
                                  className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                                {index + 1}
                              </div>
                              {index < messages.process.steps.length - 1 && (
                                  <div className="h-full w-0.5 bg-blue-600"/>
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 右侧咨询表单 */}
                <div className="rounded-xl bg-white p-8 shadow-lg mt-12">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    {messages.form.title}
                  </h2>
                  <p className="mb-6 text-gray-600">
                    {messages.form.description}
                  </p>
                  <ContactForm messages={messages}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
