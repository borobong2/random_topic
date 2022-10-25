import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
const moment = require('moment/min/moment-with-locales');
const localeList = [
  'af',
  'ar-dz',
  'ar-kw',
  'ar-ly',
  'ar-ma',
  'ar-sa',
  'ar-tn',
  'ar',
  'az',
  'be',
  'bg',
  'bm',
  'bn',
  'bo',
  'br',
  'bs',
  'ca',
  'cs',
  'cv',
  'cy',
  'da',
  'de-at',
  'de-ch',
  'de',
  'dv',
  'el',
  'en-SG',
  'en-au',
  'en-ca',
  'en-gb',
  'en-ie',
  'en-il',
  'en-nz',
  'eo',
  'es-do',
  'es-us',
  'es',
  'et',
  'eu',
  'fa',
  'fi',
  'fo',
  'fr-ca',
  'fr-ch',
  'fr',
  'fy',
  'ga',
  'gd',
  'gl',
  'gom-latn',
  'gu',
  'he',
  'hi',
  'hr',
  'hu',
  'hy-am',
  'id',
  'is',
  'it-ch',
  'it',
  'ja',
  'jv',
  'ka',
  'kk',
  'km',
  'kn',
  'ko',
  'ku',
  'ky',
  'lb',
  'lo',
  'lt',
  'lv',
  'me',
  'mi',
  'mk',
  'ml',
  'mn',
  'mr',
  'ms-my',
  'ms',
  'mt',
  'my',
  'nb',
  'ne',
  'nl-be',
  'nl',
  'nn',
  'pa-in',
  'pl',
  'pt-br',
  'pt',
  'ro',
  'ru',
  'sd',
  'se',
  'si',
  'sk',
  'sl',
  'sq',
  'sr-cyrl',
  'sr',
  'ss',
  'sv',
  'sw',
  'ta',
  'te',
  'tet',
  'tg',
  'th',
  'tl-ph',
  'tlh',
  'tr',
  'tzl',
  'tzm-latn',
  'tzm',
  'ug-cn',
  'uk',
  'ur',
  'uz-latn',
  'uz',
  'vi',
  'x-pseudo',
  'yo',
  'zh-cn',
  'zh-hk',
  'zh-tw',
  'en',
  'ja',
];
let languageCode: string = 'en';
export const languageList = [
  'en',
  'ko',
  'es',
  'fr',
  'ja',
  'de',
  'pl',
  'id',
  'zh-cn',
  'pt',
  'vi',
];
// let strings = new LocalizedStrings({
//   en: {
//     how: 'How do you want your egg today?',
//     boiledEgg: 'Boiled egg',
//     softBoiledEgg: 'Soft-boiled egg',
//     choice: 'How to choose the egg',
//   },
//   kr: {
//     how: 'Come vuoi il tuo uovo oggi?',
//     boiledEgg: 'Uovo sodo',
//     softBoiledEgg: 'Uovo alla coque',
//     choice: "Come scegliere l'uovo",
//   },
// });

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  ko: () => require('../assets/translations/ko/ko.json'),
  // en: () => require('../assets/translations/en/en.json'),
  // es: () => require('../assets/translations/es/es.json'),
  // fr: () => require('../assets/translations/fr/fr.json'),
  // ja: () => require('../assets/translations/ja/ja.json'),
  // de: () => require('../assets/translations/de/de.json'),
  // pl: () => require('../assets/translations/pl/pl.json'),
  // id: () => require('../assets/translations/id/id.json'),
  // 'zh-cn': () => require('../assets/translations/zh-cn/zh-cn.json'),
  // pt: () => require('../assets/translations/pt/pt.json'),
  // vi: () => require('../assets/translations/vi/vi.json'),
};
// const translationHabitGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   ko: () => require('../assets/translations/ko/ko_habits.json'),
//   en: () => require('../assets/translations/en/en_habits.json'),
//   es: () => require('../assets/translations/es/es_habits.json'),
//   fr: () => require('../assets/translations/fr/fr_habits.json'),
//   ja: () => require('../assets/translations/ja/ja_habits.json'),
//   de: () => require('../assets/translations/de/de_habits.json'),
//   pl: () => require('../assets/translations/pl/pl_habits.json'),
//   id: () => require('../assets/translations/id/id_habits.json'),
//   'zh-cn': () => require('../assets/translations/zh-cn/zh-cn_habits.json'),
//   pt: () => require('../assets/translations/pt/pt_habits.json'),
//   vi: () => require('../assets/translations/vi/vi_habits.json'),
// };
// const translationEncourageGetters = {
//   // lazy requires (metro bundler does not support symlinks)
//   ko: () => require('../assets/translations/ko/ko_encourage.json'),
//   en: () => require('../assets/translations/en/en_encourage.json'),
//   es: () => require('../assets/translations/es/es_encourage.json'),
//   fr: () => require('../assets/translations/fr/fr_encourage.json'),
//   ja: () => require('../assets/translations/ja/ja_encourage.json'),
//   de: () => require('../assets/translations/de/de_encourage.json'),
//   pl: () => require('../assets/translations/pl/pl_encourage.json'),
//   id: () => require('../assets/translations/id/id_encourage.json'),
//   'zh-cn': () => require('../assets/translations/zh-cn/zh-cn_encourage.json'),
//   pt: () => require('../assets/translations/pt/pt_encourage.json'),
//   vi: () => require('../assets/translations/vi/vi_encourage.json'),
// };

export const translateTest = memoize(
  (key: string, locale?: string) => {
    if (__DEV__ && locale) {
      i18n.locale = locale;
      const result = i18n.t(key);
      i18n.locale = getLanguageTag();
      return result;
    }
    return i18n.t(key);
  },
  (key: string, locale?: string) => (locale ? key + locale : key),
);

export const translate = memoize(
  (key: string, config?: any) => i18n.t(key, config),
  (key: string, config?: any) => (config ? key + JSON.stringify(config) : key),
);

export const getLanguage = () => {
  if (Object.keys(translationGetters).includes(languageCode)) {
    return languageCode;
  }
  return 'en';
};

export const getRealLanguageTag = lang => {
  let languageTag = 'en-US';
  switch (lang) {
    case 'ko':
      languageTag = 'ko-KR';
      break;
    case 'es':
      languageTag = 'es-ES';
      break;
    case 'fr':
      languageTag = 'fr-FR';
      break;
    case 'ja':
      languageTag = 'ja-JP';
      break;
    case 'de':
      languageTag = 'de-DE';
      break;
    case 'pl':
      languageTag = 'pl-PL';
      break;
    case 'id':
      languageTag = 'id-ID';
      break;
    case 'zh-cn':
      languageTag = 'zh-CN';
      break;
    case 'pt':
      languageTag = 'pt-PT';
      break;
    case 'vi':
      languageTag = 'vi'; // TODO TTS??
      break;
    default:
      languageTag = 'en-US';
      break;
  }
  return languageTag;
};

export const getLanguageTag = () => {
  try {
    moment().locale(languageCode).format('L').toString();
    return languageCode;
  } catch (e) {
    return 'en';
  }
  //   const locales = RNLocalize.getLocales();
  //   let languageTag = locales[0].languageTag;
  //   return languageTag.indexOf('-') === -1
  //     ? languageTag
  //     : languageTag.substr(0, languageTag.indexOf('-'));
};

export const translateDynamicArray = (key, ...args) => {
  let text = translate(key);
  if (Array.isArray(text)) {
    return text.map(t => {
      let result = t;
      for (let i = 0; i < args.length; i++) {
        result = result.replace(`@{${i}}`, args[i]);
      }
      return result;
    });
  }
  return [];
};
export const translateDynamic = (key, ...args) => {
  let text = translate(key);
  if (Array.isArray(text)) {
    return '';
  }
  for (let i = 0; i < args.length; i++) {
    text = text.replace(`@{${i}}`, args[i]);
  }
  return text;
};

export const setI18nConfig = async (value = undefined) => {
  // fallback if no available language fits
  //   const fallback = {languageTag: 'en', isRTL: false};

  //   const {languageTag, isRTL} =
  //     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
  //     fallback;
  try {
    let languageTag: string = 'en';
    const isRTL = false;
    const locales = RNLocalize.getLocales();
    languageCode = locales[0].languageCode;
    languageCode = localeList.indexOf(languageCode) >= 0 ? languageCode : 'en';
    console.log('locale', locales[0]);
    if (value) {
      languageCode = value;
      console.log('locale chanage', value);
    } else {
      const lang = await AsyncStorage.getItem('lang');
      if (lang) {
        languageCode = lang;
        console.log('locale chanage', lang);
      }
    }
    if (Object.keys(translationGetters).includes(languageCode)) {
      languageTag = languageCode;
    }

    //   console.log('languageTag', languageTag);
    //   console.log('isRTL', isRTL);
    // clear translation cache
    translate.cache.clear();
    // update layout direction
    I18nManager.allowRTL(false); // RTL 변경 방지
    //I18nManager.forceRTL(isRTL);
    // set i18n-js config
    // if (__DEV__) {
    //   i18n.translations = [
    //     'ko',
    //     'en',
    //     'es',
    //     'fr',
    //     'ja',
    //     'de',
    //     'pl',
    //     'id',
    //     'zh-cn',
    //     'pt',
    //     'vi',
    //   ].reduce((result, locale) => {
    //     result[locale] = {
    //       ...(translationGetters as Record<string, Function>)[locale](),
    //       habits: JSON.stringify(
    //         (translationHabitGetters as Record<string, Function>)[locale](),
    //       ),
    //       encourages: JSON.stringify(
    //         (translationEncourageGetters as Record<string, Function>)[locale](),
    //       ),
    //       recommends: JSON.stringify(
    //         require('../assets/translations/recommend_todolist.json'),
    //       ),
    //       tags: JSON.stringify(require('../assets/translations/taglist.json')),
    //     };
    //     return result;
    //   }, {});
    // } else {
    //   i18n.translations = {
    //     [languageTag]: {
    //       ...(translationGetters as Record<string, Function>)[languageTag](),
    //       habits: JSON.stringify(
    //         (translationHabitGetters as Record<string, Function>)[
    //           languageTag
    //         ](),
    //       ),
    //       encourages: JSON.stringify(
    //         (translationEncourageGetters as Record<string, Function>)[
    //           languageTag
    //         ](),
    //       ),
    //       recommends: JSON.stringify(
    //         require('../assets/translations/recommend_todolist.json'),
    //       ),
    //       tags: JSON.stringify(require('../assets/translations/taglist.json')),
    //     },
    //   };
    // }
    // i18n.locale = languageTag;
  } catch (e) {
    console.log(e);
  }
};

// export default {
//   translate,
//   setI18nConfig,
// };
