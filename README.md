# TypeScript for Playwright

This guide covers the TypeScript fundamentals you will use most often while writing Playwright tests.

## 1. Why TypeScript in Playwright?

Playwright supports TypeScript out of the box, which helps you:

- catch errors before running tests
- write clearer page and selector code
- use strong typing for locators, data, and test fixtures
- improve editor autocomplete and refactoring

## 2. Basic syntax

### Variables

```ts
const browserName = 'chromium';
let retries = 1;

const isHeadless: boolean = true;
const timeout: number = 30000;
const url: string = 'https://example.com';
```

### Arrays and objects

```ts
const browsers = ['chromium', 'firefox', 'webkit'];

const config = {
  headless: true,
  baseURL: 'https://example.com',
  timeout: 30000,
};
```

### Type annotations

```ts
function openPage(url: string): string {
  return url;
}

const pageTitle: string = 'Home Page';
const isVisible: boolean = true;
```

## 3. Functions

Functions are used to organize Playwright test logic.

```ts
async function navigateToHomePage(page: any, url: string) {
  await page.goto(url);
}
```

### Optional parameters

```ts
function waitForElement(selector: string, timeout?: number) {
  console.log(`Waiting for ${selector} with timeout ${timeout ?? 5000}`);
}
```

## 4. Async and await

Playwright heavily uses async/await because browser actions are asynchronous.

```ts
test('opens a page', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toContain('Example');
});
```

Key idea:

- `async` marks a function as asynchronous
- `await` pauses execution until a promise resolves
- This is common for `page.goto`, `locator.click`, and assertions

## 5. Playwright-specific examples

### Locators

```ts
const loginButton = page.locator('button:has-text("Login")');
await loginButton.click();
```

### Assertions

```ts
await expect(page.locator('h1')).toHaveText('Welcome');
```

### Reusable helper functions

```ts
import { expect, type Page } from '@playwright/test';

async function login(page: Page, username: string, password: string) {
  await page.goto('https://example.com/login');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Dashboard')).toBeVisible();
}
```

## 6. Interfaces and types

TypeScript lets you define precise object shapes.

```ts
interface User {
  username: string;
  password: string;
}

const user: User = {
  username: 'admin',
  password: 'secret',
};
```

This is useful when passing test data, API payloads, or page objects.

## 7. Common Playwright patterns

### Example test

```ts
import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

### Example with loops

```ts
const products = ['Laptop', 'Phone', 'Tablet'];

for (const product of products) {
  console.log(`Searching for ${product}`);
}
```

## 8. Best practices

- prefer `const` for values that do not change
- use `let` only when a value must be reassigned
- add explicit types for function parameters and return values
- use `async`/`await` instead of callbacks for Playwright flows
- keep selectors and repeated steps in helper functions

## 9. Quick checklist

Before writing Playwright tests in TypeScript, remember:

- variables can be typed with `string`, `number`, `boolean`
- async browser actions use `await`
- tests are written with `test()` and `expect()`
- helper functions make tests more readable and reusable

## 10. Next step

Start by creating a small Playwright test file and practice with:

```ts
import { test, expect } from '@playwright/test';

test('basic example', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toBeVisible();
});
```

Once you are comfortable with these basics, you can move on to fixtures, custom commands, and page object models.
