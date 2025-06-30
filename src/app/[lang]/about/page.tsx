import {getDictionary} from "@/lib/dictionary"
import Image from "next/image"
import { Globe, TrendingUp, Award} from "lucide-react"

export default async function AboutPage({
                                          params,
                                        }: {
  params: Promise<{ lang: string }>
}) {
  const {lang} = await params
  const dict = await getDictionary(lang)

  return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
            className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/40 bg-cover bg-center" style={{
            backgroundImage: "url('/images/about-hero.jpg')"
          }}></div>
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {dict.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              {dict.about.subtitle}
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 space-y-20">
          {/* 协会简介 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about.introduction.title}
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {dict.about.introduction.description}
                </p>
              </div>

              {/* 组织定位与核心理念 */}
              {/* 组织定位与核心理念 */}
              <div className="space-y-12 mb-12">
                {/* 组织定位与核心理念 - 上半部分 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    {dict.about.introduction.positioning.title}
                  </h3>

                  <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                      {/* 定位 */}
                      <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div
                            className="w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-3xl">🎯</span>
                        </div>
                        <p className="text-black font-bold text-2xl leading-relaxed">
                          {dict.about.introduction.positioning.position}
                        </p>
                        <h4 className="font-bold text-blue-600 text-lg mb-3">
                          {dict.about.introduction.positioning.positionLabel}
                        </h4>
                      </div>

                      {/* 核心理念 */}
                      <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-3xl">💡</span>
                        </div>
                        <p className="text-black text-2xl font-bold leading-relaxed">
                          &#34;{dict.about.introduction.positioning.coreIdea}&#34;
                        </p>
                        <h4 className="font-bold text-green-600 text-lg mb-3">
                          {dict.about.introduction.positioning.coreIdeaLabel}
                        </h4>

                      </div>

                      {/* 愿景 */}
                      <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-3xl">🌟</span>
                        </div>
                        <h4 className="font-bold text-purple-600 text-lg mb-3">
                          {dict.about.introduction.positioning.visionLabel}
                        </h4>
                        <p className="text-black font-bold text-2xl leading-relaxed">
                          {dict.about.introduction.positioning.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 规模与影响力 - 下半部分 */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {dict.about.introduction.scale.title}
                  </h3>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                      {dict.about.introduction.scale.description}
                    </p>
                    {/* 数据展示 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          {dict.about.introduction.scale.countries}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {dict.about.introduction.scale.countriesLabel}
                        </div>
                        <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded"></div>
                      </div>

                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {dict.about.introduction.scale.members}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {dict.about.introduction.scale.membersLabel}
                        </div>
                        <div className="w-12 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
                      </div>

                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-purple-600 mb-2">
                          {dict.about.introduction.scale.projects}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {dict.about.introduction.scale.projectsLabel}
                        </div>
                        <div className="w-12 h-1 bg-purple-600 mx-auto mt-2 rounded"></div>
                      </div>

                      <div
                          className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition-transform">
                        <div className="text-4xl font-bold text-orange-600 mb-2">
                          {dict.about.introduction.scale.beneficiaries}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {dict.about.introduction.scale.beneficiariesLabel}
                        </div>
                        <div className="w-12 h-1 bg-orange-600 mx-auto mt-2 rounded"></div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 领导团队 */}
          <section className="bg-gray-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about.leadership.title}
            </h2>

            {/* 会长介绍 */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div
                    className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    {/* 会长照片占位 */}
                    <div
                        className="w-32 h-32 bg-gray-200 relative rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                          src="/images/team/chenzp.png"
                          alt="会长照片占位"
                          width={344}
                          height={510}
                          className="w-32 h-48 absolute top-0"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {dict.about.leadership.president.name}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">
                      {dict.about.leadership.president.title}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {dict.about.leadership.president.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 核心管理团队 */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {dict.about.leadership.management.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dict.about.leadership.management.members.map((member, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-center mb-4">
                        {/* 团队成员照片占位 */}
                        <div
                            className="w-20 h-20 bg-gray-200 relative
overflow-hidden rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Image
                              src={member.image}
                              alt="会长照片占位"
                              width={344}
                              height={510}
                              className="w-20 h-32 absolute top-0"
                          ></Image>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-gray-500 mb-1">{member.englishName}</p>
                        <p className="text-sm text-blue-600 font-semibold">{member.position}</p>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* 三大行动领域 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about.actionAreas.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 商业生态构建 */}
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{dict.about.actionAreas.business.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{dict.about.actionAreas.business.title}</h3>
                </div>
                <ul className="space-y-3">
                  {dict.about.actionAreas.business.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>

              {/* 公益影响力 */}
              <div className="bg-green-50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{dict.about.actionAreas.charity.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{dict.about.actionAreas.charity.title}</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700">{dict.about.actionAreas.charity.focus}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700">{dict.about.actionAreas.charity.highlights}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700">{dict.about.actionAreas.charity.framework}</p>
                  </div>
                </div>
              </div>

              {/* 未来孵化 */}
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{dict.about.actionAreas.future.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{dict.about.actionAreas.future.title}</h3>
                </div>
                <ul className="space-y-3">
                  {dict.about.actionAreas.future.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 协会优势 */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              {dict.about.advantages.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {dict.about.advantages.items.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <TrendingUp className="h-8 w-8 text-white"/>}
                      {index === 1 && <Globe className="h-8 w-8 text-white"/>}
                      {index === 2 && <Award className="h-8 w-8 text-white"/>}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-700 text-sm">{advantage.description}</p>
                  </div>
              ))}
            </div>
          </section>
        </div>
      </div>
  )
}
