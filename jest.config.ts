const Configuration = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  coveragePathIgnorePatterns: [
    '.*\\.(interface|module|schema|entity|repository|dto).ts',
    'index.ts',
    'main.ts',
  ],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps', '<rootDir>/libs'],
}

export default Configuration
