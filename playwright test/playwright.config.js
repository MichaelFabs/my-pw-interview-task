require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }]
  ],

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  use: {
    trace: 'only-on-failure',
    screenshot: 'only-on-failure',
    video: 'only-on-failure',
  },

    projects: [
        {
      name: 'api',
      testMatch: '**/api/**/*.spec.js',
      use: {
        baseURL: process.env.PETSTORE_BASE_URL ||
          'https://petstore.swagger.io/v2/'
      }
    },
    {
      name: 'chromium',
      testMatch: '**/ui/**/*.spec.js',
      use: {
        browserName: 'chromium',
        baseURL: process.env.ORANGEHRM_BASE_URL ||
          'https://opensource-demo.orangehrmlive.com'
      }
    },
    {
      name: 'firefox',
      testMatch: '**/ui/**/*.spec.js',
      use: {
        browserName: 'firefox',
        baseURL: process.env.ORANGEHRM_BASE_URL ||
          'https://opensource-demo.orangehrmlive.com'
      }
    },
    {
      name: 'webkit',
      testMatch: '**/ui/**/*.spec.js',
      use: {
        browserName: 'webkit',
        baseURL: process.env.ORANGEHRM_BASE_URL ||
          'https://opensource-demo.orangehrmlive.com'
      }
    }
  ]
});



