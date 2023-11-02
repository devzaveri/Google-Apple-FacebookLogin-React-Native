import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import Constants from '../../Constants';
import RNRestart from 'react-native-restart';
import {I18nManager, InteractionManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import all locales
import en from './en';
import es from './es';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  es,
};

const currentLocale = I18n.currentLocale();

// Is it a RTL language?
// export const isRTL =
//   currentLocale.indexOf('en') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
// I18nManager.allowRTL(false);
// export function strings(name, params = {}) {
//   I18n.locale = I18n.currentLocale();
//   return I18n.t(name, params);
// }

export function setAppLanguage(language) {
  let lng = Constants.commonConstant.english;
  if (language.includes(Constants.commonConstant.Spanish)) {
    lng = Constants.commonConstant.Spanish;
    I18nManager.forceRTL(false);
    console.log(lng);
    // RNRestart.Restart();
    I18n.locale = lng;
  } else {
    I18nManager.forceRTL(false);
    // RNRestart.Restart();
    I18n.locale = lng;
    console.log(lng);
  }
}

export async function changeLanguage(language) {
  Constants.commonConstant.isLanguageChanging = true;
  await AsyncStorage.setItem(
    Constants.asyncStorageKeys.languageCode,
    language,
  ).then(() => {
    setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        I18n.locale = language;
        if (language.includes(Constants.commonConstant.Spanish)) {
          Constants.commonConstant.Spanish;
          I18nManager.forceRTL(false);
          RNRestart.Restart();
        } else {
          I18nManager.forceRTL(false);
          RNRestart.Restart();
        }
        Constants.commonConstant.currentLanguage = language;
        Constants.commonConstant.isLanguageChanging = false;
        RNRestart.Restart();
      });
    }, 200);
  });
}

export default I18n;