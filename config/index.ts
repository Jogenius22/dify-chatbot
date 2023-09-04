import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.APP_ID}`
export const API_KEY = `${process.env.API_KEY}`
export const API_URL = `${process.env.API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Sleepi Chatbot',
  description: 'Bot Description',
  copyright: 'Copyright',
  privacy_policy: 'Privacy Policy',
  default_language: 'en',
}

export const isShowPrompt = false
export const promptTemplate = 'You are an AI assistant.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
