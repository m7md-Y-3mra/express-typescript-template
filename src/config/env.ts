import { getEnvOrDefault, getEnvValue } from "@/utils/env-utils";

export const ENV = getEnvOrDefault("NODE_ENV", "development");
export const PORT = getEnvOrDefault("PORT", "3000");
export const BASE_URL = getEnvOrDefault("BASE_URL", "http://localhost:3000");
export const APP_DEBUG = getEnvValue("APP_DEBUG") === "true";
