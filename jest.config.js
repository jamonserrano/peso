module.exports = {
	preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["./src/*.ts"],
  coverageReporters: ["text-summary", "lcov"],
  coverageDirectory: "./test/coverage",
	globals: {
		"ts-jest": {
      tsConfig: "./tsconfig.test.json",
      diagnostics: false
		}
	}
};
