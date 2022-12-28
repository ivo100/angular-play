import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'xffrer',
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})
