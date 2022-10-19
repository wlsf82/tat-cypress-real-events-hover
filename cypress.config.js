const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportHeight: 880,
  },
  fixturesFolder: false,
})
