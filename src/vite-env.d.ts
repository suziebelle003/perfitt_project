/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL: any;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
