# Playwright Test Suite

A Playwright-based end-to-end testing framework for automated browser testing.

## Overview

This project contains automated test cases using Playwright, a modern testing framework that supports cross-browser testing with Chromium, Firefox, and WebKit. It's designed to perform functional testing of web applications with comprehensive test coverage.

## Project Structure

```
├── tests/                    # Test files
│   └── example.spec.ts      # Example test specifications
├── playwright-report/        # HTML test reports
├── test-results/            # Test result artifacts
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies and metadata
└── README.md                # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone or navigate to the project directory:
```bash
cd IT23756700
```

2. Install dependencies:
```bash
npm install
```

This will install:
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript types for Node.js

## Configuration

The Playwright configuration is defined in `playwright.config.ts` with the following settings:

- **Test Directory**: `./tests`
- **Parallel Execution**: Tests run in parallel by default
- **Retries**: Automatic retry on CI environments (2 retries)
- **Reporters**: HTML reporter for detailed test reports
- **Trace**: Enabled on first retry for debugging

### Supported Browsers

- **Chromium** (enabled by default)
- Firefox (commented out, can be enabled)
- WebKit/Safari (commented out, can be enabled)

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in a specific file:
```bash
npx playwright test tests/example.spec.ts
```

### Run tests in headed mode (view browser):
```bash
npx playwright test --headed
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

### Run a specific test by name:
```bash
npx playwright test -g "test name"
```

## Test Reports

After running tests, an HTML report is automatically generated. To view the report:

```bash
npx playwright show-report
```

The report will open in your default browser and display:
- Test execution status
- Detailed test results
- Screenshots and videos (if configured)
- Trace information for debugging

## Test Examples

The test suite includes functional tests for web applications, such as:
- **Pos_Fun_0001**: Convert simple statements
- **Pos_Fun_0002**: Handle interrogative sentences
- **Pos_Fun_0003**: Process polite requests

Each test follows the standard Playwright pattern:
1. Navigate to the target URL
2. Locate elements using selectors
3. Perform user actions (fill, click, etc.)
4. Assert expected outcomes

## Writing New Tests

To add new tests, create a `.spec.ts` file in the `tests/` directory:

```typescript
import { test, expect } from '@playwright/test';

test('test name', async ({ page }) => {
  await page.goto('https://example.com');
  // Add your test steps here
  await expect(page.locator('selector')).toBeVisible();
});
```

## Debugging

Use the Playwright Inspector to debug tests interactively:

```bash
npx playwright test --debug
```

This opens the Playwright Inspector, allowing you to:
- Step through tests
- Inspect elements
- Evaluate expressions
- View test execution logs

## CI/CD Integration

The configuration supports Continuous Integration environments:
- Tests automatically retry on CI (2 retries)
- Single worker mode on CI for stability
- Forbids `test.only()` to prevent accidental single test execution

Set the `CI` environment variable to enable CI-specific behavior:
```bash
CI=true npx playwright test
```

## License

ISC

## Author

[Kavinth M /IT23756700]

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-test)
- [Best Practices](https://playwright.dev/docs/best-practices)