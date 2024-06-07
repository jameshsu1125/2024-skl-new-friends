/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCKING: string;
  readonly VITE_API_PATH: string;
  readonly VITE_FACEBOOK_ID: string;
  readonly VITE_TITLE: string;
  readonly VITE_SUBSCRIPTION: string;
  readonly VITE_GA_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
