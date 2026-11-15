## Project Overview and installation

This project contains automated API and UI tests using Playwright and JavaScript.

-   API Testing: Petstore API
-   UI Testing: OrangeHRM demo application
-   Browsers: Chromium (Default), Firefox and WebKit

### Project Structure

```bash
tests/
|
|__api/
|   |__API test file
|   
|__ui
    |__UI test file

playwright.config.js
package.json
package-lock.json
```


### Installation

Cone this repository and install the dependencies:

```bash
npm install
npx playwright install
```

### Running Tests

Run API test:

```bash
npm run test:api
```

Run UI test (Chromium):
```bash
npm run test:ui
```

Run UI test (Firefox):
```bash
npm run test:firefox
```

Run UI test (Webkit):
```bash
npm run test:webkit
```
Run all tests:
```bash
npm test
```

Run test headed to see browsers
```bash
npm run test:headed
```

### Test Reports

After running the tests, generate and view reports
```bash
npm run report
```

Screenshots, videos, and traces are configured to be retained when tests fail. These can be set to also retain every test run when the three `use:` parameters are set to `on` in `plawright.config.js`, which is useful for test investigation.

### Notes

The API and UI tests are organised separately to make the project easier to navigate and maintain.