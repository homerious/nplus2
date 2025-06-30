/* ts-ignore */
import { getDictionary } from "@/lib/dictionary"
import Image from "next/image"
interface CaseStudiesPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const { caseStudies: messages } = dict
  const flags = {
    PH: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzUGgwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzUGgwKSI+PHBhdGggZmlsbD0iIzAwNTJiNCIgZD0iTTAgMGg1MTJ2MjU2bC0yNjUgNDUuMnoiLz48cGF0aCBmaWxsPSIjZDgwMDI3IiBkPSJNMjEwIDI1NmgzMDJ2MjU2SDB6Ii8+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTAgMHY1MTJsMjU2LTI1NnoiLz48cGF0aCBmaWxsPSIjZmZkYTQ0IiBkPSJNMTc1LjMgMjU2TDE0NCAyNDEuM2wxNi43LTMwLjNsLTM0IDYuNWwtNC4zLTM0LjNsLTIzLjYgMjUuMkw3NSAxODMuMmwtNC4zIDM0LjNsLTM0LTYuNWwxNi43IDMwLjNMMjIuMyAyNTZsMzEuMiAxNC43TDM3IDMwMWwzNC02LjVsNC4yIDM0LjNsMjMuNy0yNS4ybDIzLjYgMjUuMmw0LjMtMzQuM2wzNCA2LjVsLTE2LjctMzAuM3ptLTEwNy0xNTUuOGwxMC40IDE0LjVsMTctNS40bC0xMC42IDE0LjRsMTAuNCAxNC41bC0xNy01LjZMNjggMTQ3bC4yLTE3LjlsLTE3LTUuNmwxNy01LjR6bTAgMjY0LjhsMTAuNCAxNC42bDE3LTUuNGwtMTAuNiAxNC4zbDEwLjQgMTQuNmwtMTctNS43TDY4IDQxMS44bC4yLTE3LjlsLTE3LTUuNmwxNy01LjR6bTE0OC40LTEzMi40TDIwNi4zIDI0N2wtMTctNS40bDEwLjUgMTQuNGwtMTAuNCAxNC42bDE3LTUuN2wxMC42IDE0LjRsLS4xLTE3LjlsMTctNS42bC0xNy4xLTUuNHoiLz48L2c+PC9zdmc+',
    IN: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzSW4wIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzSW4wKSI+PHBhdGggZmlsbD0iI2VlZSIgZD0ibTAgMTYwbDI1Ni0zMmwyNTYgMzJ2MTkybC0yNTYgMzJMMCAzNTJ6Ii8+PHBhdGggZmlsbD0iI2ZmOTgxMSIgZD0iTTAgMGg1MTJ2MTYwSDBaIi8+PHBhdGggZmlsbD0iIzZkYTU0NCIgZD0iTTAgMzUyaDUxMnYxNjBIMFoiLz48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjcyIiBmaWxsPSIjMDA1MmI0Ii8+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSI0OCIgZmlsbD0iI2VlZSIvPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjQiIGZpbGw9IiMwMDUyYjQiLz48L2c+PC9zdmc+',
    ID: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzSWQwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzSWQwKSI+PHBhdGggZmlsbD0iI2VlZSIgZD0ibTAgMjU2bDI0OS42LTQxLjNMNTEyIDI1NnYyNTZIMHoiLz48cGF0aCBmaWxsPSIjYTIwMDFkIiBkPSJNMCAwaDUxMnYyNTZIMHoiLz48L2c+PC9zdmc+',
    MY: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzTXkwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzTXkwKSI+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTAgMjU2TDI1NiAwaDI1NnY1NS43bC0xOS41IDMzbDE5LjUgMzMuN3Y2Ni44bC0yMi4xIDM3LjdMNTEyIDI1NnY2Ni44bC0yMC4yIDM4LjVsMjAuMiAyOC4zdjY2LjdsLTI1NC41IDI4LjJMMCA0NTYuM3YtNjYuN2wyNi0zNS4xbC0yNi0zMS43eiIvPjxwYXRoIGZpbGw9IiNkODAwMjciIGQ9Ik0yNTYgMjU2aDI1NnYtNjYuOEgyMjIuOXptLTMzLjEtMTMzLjZINTEyVjU1LjdIMjIyLjl6TTUxMiA1MTJ2LTU1LjdIMFY1MTJ6TTAgMzg5LjZoNTEydi02Ni44SDB6Ii8+PHBhdGggZmlsbD0iIzAwNTJiNCIgZD0iTTAgMGgyNTZ2MjU2SDB6Ii8+PGcgZmlsbD0iI2ZmZGE0NCI+PHBhdGggZD0iTTE3MC4yIDIxOS4xYTYzLjMgNjMuMyAwIDEgMSAzMC4xLTExOWE3OCA3OCAwIDEgMCAwIDExMS40YTYzIDYzIDAgMCAxLTMwIDcuNnoiLz48cGF0aCBkPSJtMTg4IDExMS4zbDExLjMgMjMuNWwyNS40LTUuOWwtMTEuNCAyMy41bDIwLjQgMTYuMmwtMjUuNCA1LjdsLjEgMjZsLTIwLjMtMTYuMmwtMjAuNCAxNi4ybC4xLTI2bC0yNS40LTUuN2wyMC40LTE2LjJsLTExLjQtMjMuNWwyNS40IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=',
    TH: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzVGgwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzVGgwKSI+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0iTTAgMGg1MTJ2ODlsLTc5LjIgMTYzLjdMNTEyIDQyM3Y4OUgwdi04OWw4Mi43LTE2OS42TDAgODl6Ii8+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTAgODloNTEydjc4bC00Mi42IDkxLjJMNTEyIDM0NXY3OEgwdi03OGw0MC05Mi41TDAgMTY3eiIvPjxwYXRoIGZpbGw9IiMwMDUyYjQiIGQ9Ik0wIDE2N2g1MTJ2MTc4SDB6Ii8+PC9nPjwvc3ZnPg==',
    SG:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzU2cwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzU2cwKSI+PHBhdGggZmlsbD0iI2VlZSIgZD0ibTAgMjU2bDI1Ny43LTUxTDUxMiAyNTZ2MjU2SDB6Ii8+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0iTTAgMGg1MTJ2MjU2SDB6Ii8+PGcgZmlsbD0iI2VlZSI+PHBhdGggZD0iTTE1NS44IDEzMy42QTc4IDc4IDAgMCAxIDIxNyA1Ny41YTc4LjIgNzguMiAwIDAgMC0xNi43LTEuOGE3OCA3OCAwIDEgMCAxNi43IDE1NGE3OCA3OCAwIDAgMS02MS4yLTc2LjFNMjU2IDYxLjJsNS41IDE3aDE4bC0xNC42IDEwLjVsNS42IDE3TDI1NiA5NS4ybC0xNC41IDEwLjVsNS42LTE3bC0xNC41LTEwLjVoMTcuOXoiLz48cGF0aCBkPSJtMjEyLjYgOTQuNmw1LjYgMTdIMjM2bC0xNC40IDEwLjVsNS41IDE3bC0xNC41LTEwLjVsLTE0LjQgMTAuNWw1LjUtMTdsLTE0LjUtMTAuNWgxNy45em04Ni44IDBsNS41IDE3aDE3LjlsLTE0LjUgMTAuNWw1LjUgMTdsLTE0LjQtMTAuNWwtMTQuNSAxMC41bDUuNS0xN2wtMTQuNC0xMC41aDE3Ljh6bS0xNi43IDUwLjFsNS41IDE3aDE3LjlsLTE0LjUgMTAuNWw1LjUgMTdsLTE0LjQtMTAuNWwtMTQuNSAxMC41bDUuNS0xN2wtMTQuNC0xMC41aDE3Ljl6bS01My40IDBsNS41IDE3aDE4bC0xNC41IDEwLjVsNS41IDE3bC0xNC41LTEwLjVsLTE0LjQgMTAuNWw1LjUtMTdsLTE0LjUtMTAuNWgxNy45eiIvPjwvZz48L2c+PC9zdmc+',
    KR: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzS3IwIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzS3IwKSI+PHBhdGggZmlsbD0iI2VlZSIgZD0iTTAgMGg1MTJ2NTEySDBaIi8+PHBhdGggZmlsbD0iIzMzMyIgZD0ibTM1MCAzMzVsMjQtMjRsMTYgMTZsLTI0IDIzem0tMzkgMzlsMjQtMjRsMTUgMTZsLTIzIDI0em04NyA4bDIzLTI0bDE2IDE2bC0yNCAyNHptLTQwIDM5bDI0LTIzbDE2IDE1bC0yNCAyNFptMTYtNjNsMjQtMjNsMTUgMTVsLTIzIDI0em0tMzkgNDBsMjMtMjRsMTYgMTZsLTI0IDIzem02My0yMjFsLTYzLTYzbDE1LTE1bDY0IDYzem0tNjMtMTVsLTI0LTI0bDE2LTE2bDIzIDI0em0zOSAzOWwtMjQtMjRsMTYtMTVsMjQgMjN6bTgtODdsLTI0LTIzbDE2LTE2bDI0IDI0Wm0zOSA0MGwtMjMtMjRsMTUtMTZsMjQgMjRaTTkxIDM1OGw2MyA2M2wtMTYgMTZsLTYzLTYzem02MyAxNmwyMyAyNGwtMTUgMTVsLTI0LTIzem0tNDAtMzlsMjQgMjNsLTE2IDE2bC0yMy0yNHptMjQtMjRsNjMgNjNsLTE2IDE2bC02My02M3ptMTYtMjIwbC02MyA2M2wtMTYtMTZsNjMtNjN6bTIzIDIzbC02MyA2M2wtMTUtMTZsNjMtNjN6bTI0IDI0bC02MyA2M2wtMTYtMTZsNjMtNjN6Ii8+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0iTTMxOSAzMTlMMTkzIDE5M2E4OSA4OSAwIDEgMSAxMjYgMTI2Ii8+PHBhdGggZmlsbD0iIzAwNTJiNCIgZD0iTTMxOSAzMTlhODkgODkgMCAxIDEtMTI2LTEyNnoiLz48Y2lyY2xlIGN4PSIyMjQuNSIgY3k9IjIyNC41IiByPSI0NC41IiBmaWxsPSIjZDgwMDI3Ii8+PGNpcmNsZSBjeD0iMjg3LjUiIGN5PSIyODcuNSIgcj0iNDQuNSIgZmlsbD0iIzAwNTJiNCIvPjwvZz48L3N2Zz4=',
    VN: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PG1hc2sgaWQ9ImNpcmNsZUZsYWdzVm4wIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iI2ZmZiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2NpcmNsZUZsYWdzVm4wKSI+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+PHBhdGggZmlsbD0iI2ZmZGE0NCIgZD0ibTI1NiAxMzMuNmwyNy42IDg1SDM3M0wzMDAuNyAyNzFsMjcuNiA4NWwtNzIuMy01Mi41bC03Mi4zIDUyLjZsMjcuNi04NWwtNzIuMy01Mi42aDg5LjR6Ii8+PC9nPjwvc3ZnPg==',
  }
  const caseOrder = ['gcash', 'paytm', 'amartha', 'momo', 'grab', 'truemoney', 'sea', 'kakaopay']

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r relative flex items-center justify-center  h-[60vh] from-blue-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black/40 bg-cover bg-center" style={{
            backgroundImage: "url('/images/about-hero.jpg')"
          }}></div>
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

          <div className=" relative mx-auto px-4 py-16">

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {messages.subtitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {messages.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  {messages.stats.countries}
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  {messages.stats.users}
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  {messages.stats.donations}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 整体成果数据 */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {messages.overallResults.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {messages.overallResults.business.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {messages.overallResults.business.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-green-600">
                  {messages.overallResults.social.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {messages.overallResults.social.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  {messages.overallResults.recognition.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {messages.overallResults.recognition.items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">🌍</span>
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 案例列表 */}
        <div className="container mx-auto px-4 pb-16">
          <div className="space-y-8">
            {caseOrder.map((caseId: string, index: number) => {
              const caseStudy = messages.cases[caseId]

              return (
                  <div key={caseId} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* 案例头部 */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">
                            <Image
                              width={100}
                              height={100}
                              src={flags[caseStudy.flag]}
                              alt={caseStudy.country}
                            ></Image>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                              {index + 1}. {caseStudy.country} - {caseStudy.company}
                            </h3>
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {caseStudy.type}
                        </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 案例内容 */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 合作内容 */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                            🤝
                          </span>
                              {messages.sections.cooperation}
                            </h4>
                            <ul className="space-y-2">
                              {caseStudy.cooperation.map((item: string, idx: number) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                            📊
                          </span>
                              {messages.sections.results}
                            </h4>
                            <ul className="space-y-2">
                              {caseStudy.results.map((result: string, idx: number) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-green-500 mr-2">✅</span>
                                    <span className="text-gray-700 font-medium">{result}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* 公开来源 */}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">
                          📋
                        </span>
                            {messages.sections.sources}
                          </h4>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-2">
                              {caseStudy.sources.map((source: string, idx: number) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1">📄</span>
                                    <span className="text-gray-700 text-sm">{source}</span>
                                  </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hidden">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                {messages.cta.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {messages.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {messages.cta.learnMore}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  {messages.cta.contact}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
