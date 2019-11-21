module.exports = {
	preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["./src/*.ts"],
  coverageReporters: ["text-summary"],
	globals: {
		"ts-jest": {
      tsConfig: "./tsconfig.test.json",
      diagnostics: false
		}
	}
};
