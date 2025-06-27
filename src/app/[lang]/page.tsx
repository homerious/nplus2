import { getDictionary } from "@/lib/dictionary"
import {FeatureSections} from "@/components/ui/feature-sections";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  const dict = await getDictionary(lang)

  return (
      <div className="container mx-auto">
        <section
            className="hero-section relative mx-auto flex min-h-[60vh] max-w-full flex-col items-center gap-2 bg-cover bg-center bg-no-repeat py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-white"></div>
          <div className="relative z-10 flex max-w-[980px] flex-col items-center">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter text-white md:text-6xl lg:leading-[1.1] whitespace-nowrap">
              {dict.home.title}
            </h1>
            <p className="max-w-[750px] text-center text-lg text-gray-100 sm:text-xl">
              {dict.home.description}
            </p>
          </div>
        </section>
        <section className="mx-auto flex max-w-[980px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
          <FeatureSections dict={dict} lang={lang}/>
        </section>
      </div>
  )
}
