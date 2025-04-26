declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'preview'
    readonly APP_BASE_URL: string
  }
}

interface ImportMetaEnv {
  readonly MODE: 'development' | 'production' | 'preview'
  readonly APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
