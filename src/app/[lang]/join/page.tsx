import { getDictionary } from "@/lib/dictionary"
import { Building2, Heart, Landmark, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

interface JoinUsPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function JoinUsPage({ params }: JoinUsPageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { joinUs: messages } = dict

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black/40 bg-cover bg-center" style={{
            backgroundImage: "url('/images/innovation.jpg')"
          }}></div>
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
          <div className=" relative container mx-auto px-4 py-16">
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
                  <Users className="w-5 h-5 mr-2" />
                  {messages.stats.members}
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  {messages.stats.countries}
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-full flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  {messages.stats.projects}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2025-2030年合作机遇 */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {messages.opportunities.title}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {messages.opportunities.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 绿色金融 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {messages.opportunities.greenFinance.title}
                    </h3>
                    <p className="opacity-90">
                      {messages.opportunities.greenFinance.description}
                    </p>
                  </div>
                  <div className="text-4xl">
                    {messages.opportunities.greenFinance.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">✨：</h4>
                <ul className="space-y-3">
                  {messages.opportunities.greenFinance.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI普惠 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {messages.opportunities.aiInclusion.title}
                    </h3>
                    <p className="opacity-90">
                      {messages.opportunities.aiInclusion.description}
                    </p>
                  </div>
                  <div className="text-4xl">
                    {messages.opportunities.aiInclusion.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">✨：</h4>
                <ul className="space-y-3">
                  {messages.opportunities.aiInclusion.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 青年创业基金 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {messages.opportunities.youthFund.title}
                    </h3>
                    <p className="opacity-90">
                      {messages.opportunities.youthFund.description}
                    </p>
                  </div>
                  <div className="text-4xl">
                    {messages.opportunities.youthFund.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">✨：</h4>
                <ul className="space-y-3">
                  {messages.opportunities.youthFund.details.map((detail: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 加入方式 */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {messages.howToJoin.title}
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                {messages.howToJoin.welcome}
              </p>
              <p className="text-lg text-blue-600 font-semibold">
                {messages.howToJoin.ecosystem}
              </p>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 企业合作 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <div className="text-center mb-6">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {messages.howToJoin.types.enterprise.title}
                  </h3>
                  <p className="text-gray-600">
                    {messages.howToJoin.types.enterprise.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">👍：</h4>
                  <ul className="space-y-3">
                    {messages.howToJoin.types.enterprise.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 公益组织 */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border-2 border-red-100 hover:border-red-300 transition-colors">
                <div className="text-center mb-6">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {messages.howToJoin.types.ngo.title}
                  </h3>
                  <p className="text-gray-600">
                    {messages.howToJoin.types.ngo.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">👍：</h4>
                  <ul className="space-y-3">
                    {messages.howToJoin.types.ngo.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-red-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 政府机构 */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="text-center mb-6">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Landmark className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {messages.howToJoin.types.government.title}
                  </h3>
                  <p className="text-gray-600">
                    {messages.howToJoin.types.government.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">👍：</h4>
                  <ul className="space-y-3">
                    {messages.howToJoin.types.government.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 协会优势展示 */}
        <div className="bg-gray-50 py-16 hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                为什么选择寰宇商善协会
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  商业+公益闭环设计
                </h3>
                <p className="text-gray-600">
                  每笔商业利润5%用于公益，实现商业价值与社会责任的完美结合
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  亚洲本土化深度网络
                </h3>
                <p className="text-gray-600">
                  8+国家分会运营，确保项目精准落地，深度融入当地文化
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  数据化透明管理
                </h3>
                <p className="text-gray-600">
                  定期发布影响力报告，所有项目公开透明，确保资金使用效率
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {messages.cta.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {messages.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  {messages.cta.contact}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  {messages.cta.learnMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
