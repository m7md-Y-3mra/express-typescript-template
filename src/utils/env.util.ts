import { MyEnvs } from "@/types";

export const getEnvValue = <K extends keyof MyEnvs>(envName: K): MyEnvs[K] | undefined =>
  process.env[envName];

export const getEnvOrDefault = <K extends keyof MyEnvs>(
  envName: K,
  defaultValue: MyEnvs[K],
): MyEnvs[K] => getEnvValue(envName) ?? defaultValue;

export const getEnvOrThrow = <K extends keyof MyEnvs>(envName: K): MyEnvs[K] => {
  const value = getEnvValue(envName);
  if (value === undefined || value === null || value === "") {
    throw new Error(`${String(envName)} environment variable is required`);
  }
  return value;
};
