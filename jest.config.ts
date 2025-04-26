import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'vue'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}

export default config;
