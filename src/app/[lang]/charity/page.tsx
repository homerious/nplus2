import {getDictionary} from "@/lib/dictionary"
import {Users, Target, Award, TrendingUp, Heart} from "lucide-react"

interface PhilanthropyPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function PhilanthropyPage({params}: PhilanthropyPageProps) {
  const {lang} = await params
  const dict = await getDictionary(lang)
  const {philanthropy: messages} = dict

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r relative h-[60vh] flex items-center justify-center from-green-600 to-blue-600 text-white">
          <div className="absolute inset-0 bg-black/40 bg-cover bg-center" style={{
            backgroundImage: "url('/images/charity.jpg')"
          }}></div>
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

          <div className="container relative mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {messages.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                {messages.subtitle}
              </p>
              <p className="text-lg mb-8 opacity-80 max-w-4xl mx-auto">
                {messages.description}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="bg-white/20 px-6 py-3 rounded-full flex items-center">
                  <Target className="w-5 h-5 mr-2"/>
                  {messages.stats.projects}
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full flex items-center">
                  <Users className="w-5 h-5 mr-2"/>
                  {messages.stats.beneficiaries}
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full flex items-center">
                  <Heart className="w-5 h-5 mr-2"/>
                  {messages.stats.donations}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 进行中项目 */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {messages.sections.ongoing}
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* 萤火虫助学计划 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {messages.ongoingProjects.firefly.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {messages.ongoingProjects.firefly.type}
                    </span>
                      <span className="bg-green-500 px-3 py-1 rounded-full">
                      {messages.ongoingProjects.firefly.status}
                    </span>
                    </div>
                  </div>
                  <div className="text-4xl">🔥</div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {messages.ongoingProjects.firefly.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-500"/>
                      项目成果
                    </h4>
                    <ul className="space-y-2">
                      {messages.ongoingProjects.firefly.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-500"/>
                      项目特色
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {messages.ongoingProjects.firefly.features.map((feature: string, index: number) => (
                          <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800">
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-purple-500"/>
                      下一步计划
                    </h4>
                    <ul className="space-y-2">
                      {messages.ongoingProjects.firefly.nextSteps.map((step: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2 mt-1">→</span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 日本3.11灾后重建专项 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {messages.ongoingProjects.japan311.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {messages.ongoingProjects.japan311.type}
                    </span>
                      <span className="bg-green-500 px-3 py-1 rounded-full">
                      {messages.ongoingProjects.japan311.status}
                    </span>
                    </div>
                  </div>
                  <div className="text-4xl">🏗️</div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {messages.ongoingProjects.japan311.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-yellow-500"/>
                      项目成果
                    </h4>
                    <ul className="space-y-2">
                      {messages.ongoingProjects.japan311.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-500"/>
                      项目特色
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {messages.ongoingProjects.japan311.features.map((feature: string, index: number) => (
                          <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800">
                            {feature}
                          </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-purple-500"/>
                      下一步计划
                    </h4>
                    <ul className="space-y-2">
                      {messages.ongoingProjects.japan311.nextSteps.map((step: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2 mt-1">→</span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 历史项目 */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {messages.sections.completed}
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 绿色乡村农业培训 */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {messages.completedProjects.greenVillage.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {messages.completedProjects.greenVillage.type}
                    </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                      {messages.completedProjects.greenVillage.status}
                    </span>
                    </div>
                  </div>
                  <div className="text-4xl">🌱</div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {messages.completedProjects.greenVillage.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">项目成果：</h4>
                    <ul className="space-y-1">
                      {messages.completedProjects.greenVillage.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">项目影响：</h4>
                    <p className="text-green-700 text-sm">
                      {messages.completedProjects.greenVillage.impact}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">合作伙伴：</h4>
                    <div className="flex flex-wrap gap-2">
                      {messages.completedProjects.greenVillage.partners.map((partner: string, index: number) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {partner}
                      </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 数字金融教育 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {messages.completedProjects.digitalFinance.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                      {messages.completedProjects.digitalFinance.type}
                    </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                      {messages.completedProjects.digitalFinance.status}
                    </span>
                    </div>
                  </div>
                  <div className="text-4xl">💳</div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {messages.completedProjects.digitalFinance.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">项目成果：</h4>
                    <ul className="space-y-1">
                      {messages.completedProjects.digitalFinance.achievements.map((achievement: string, index: number) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-purple-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-100 p-4 rounded-lg">
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">项目影响：</h4>
                      <p className="text-purple-700 text-sm">
                        {messages.completedProjects.digitalFinance.impact}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">合作伙伴：</h4>
                      <div className="flex flex-wrap gap-2">
                        {messages.completedProjects.digitalFinance.partners.map((partner: string, index: number) => (
                            <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">
                        {partner}
                      </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
