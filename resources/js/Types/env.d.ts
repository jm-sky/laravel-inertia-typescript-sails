/// <reference types="vite/client" />

interface ImportMetaEnv {
  [key: string]: any
  BASE_URL: string
  MODE: string
  DEV: boolean
  PROD: boolean
  SSR: boolean

  /** Stripe API Key */
  readonly VITE_STRIPE_API_KEY: string;

  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
