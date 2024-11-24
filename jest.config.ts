import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Configuração para TypeScript
  testEnvironment: 'jsdom', // Ambiente necessário para testes com React
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // Mapeia os imports usando "@/"
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Usa ts-jest para transformar arquivos TS/TSX
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'] // Configurações adicionais pós-env
};

export default config;
