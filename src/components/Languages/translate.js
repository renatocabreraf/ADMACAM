import { createIntl, createIntlCache } from "react-intl";

const defaultLocale = "es-ES"
const supportedLocalesAndFallbackMap = {
  "en-US": "en-US",
  "es-ES": "es-ES"
}

export function getUserLocale() {
  if (localStorage.getItem("locale")) {
    return localStorage.getItem("locale")
  } else {
    return defaultLocale
  }
}

function getTranslationLocale(locale) {
  if (supportedLocalesAndFallbackMap.hasOwnProperty(locale)) {
    return supportedLocalesAndFallbackMap[locale]
  }
  else if (locale.indexOf('-') > -1) {
    const index = locale.indexOf('-')
    const languageCode = locale.substring(0, index)
    return supportedLocalesAndFallbackMap.hasOwnProperty(languageCode) ? supportedLocalesAndFallbackMap[languageCode] : defaultLocale;
  }
  else {
    return defaultLocale
  }
}

async function loadTranslations(locale) {
    const translationLocale = getTranslationLocale(locale)
    let stringsModule

    try {
      stringsModule = await import(`./${translationLocale}.json`)
    } catch (error) {
      console.error(`Failed to laod ${translationLocale}, falling back to es-ES`)
      stringsModule = await import('./es-ES.json')
    }

    return stringsModule.default
}

const cache = createIntlCache()
let intl

export async function getMessages() {
  const locale = getUserLocale()

  if (intl && (intl.locale === getUserLocale())) {
    return intl.messages
  }

  const messages = await loadTranslations(locale)

  if (!messages) {
    console.error(`Unable to load ${locale} strings`)
    return {}
  }

  intl = createIntl(
    {
      locale: locale,
      messages: messages
    },
    cache
  )

  return messages
}

export const translate = (id, values) => {
  return intl.formatMessage({id}, values)
}