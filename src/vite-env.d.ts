/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WEB3FORMS_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }