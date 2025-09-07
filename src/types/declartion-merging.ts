export type MyEnvs = {
  PORT: string;
  NODE_ENV: "development" | "production";
  BASE_URL: string;
  APP_DEBUG: string;
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends MyEnvs {}
  }
}
