import type { Config } from "jest";

const config: Config = {
  bail: true, // If one test fail, all next tests are stopped.
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
