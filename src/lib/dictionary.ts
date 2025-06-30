const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
  'zh-hant': () => import("./dictionaries/zh-hant.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
  ko: () => import("./dictionaries/ko.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    return dictionaries.en()
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}
