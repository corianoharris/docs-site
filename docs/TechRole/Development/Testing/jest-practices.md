

# Jest Practices

[Jest Docs](https://jestjs.io/docs/)

- **Write clean and maintainable code**: Write clear, concise, and modular code that is easy to read, understand, and maintain. Use descriptive and meaningful names for your tests and test components.

- **Use beforeEach and afterEach hooks**: Use beforeEach and afterEach hooks to perform setup and cleanup actions before and after each test. This helps in maintaining a clean and consistent state for the test environment.

- **Use describe and it functions to organize tests**: Use describe and it functions to group and organize your tests. This makes it easier to understand the intent of each test suite and to quickly identify failing tests.

- **Use mock functions**: Use Jest's built-in mocking features to create mock functions for dependencies and external resources. This helps in isolating the code being tested and makes the tests faster and more reliable.

- **Use snapshot testing**: Use Jest's snapshot testing feature to test the output of components and functions. This helps in detecting unexpected changes in the code and ensures that the application output remains consistent.

- **Use expect assertions**: Use Jest's expect assertions to ensure that the expected behavior of the application is achieved. Assertions should be specific and clear, and should not be too generic.

- **Use coverage report**s: Use Jest's coverage reports to analyze the code coverage of your tests. This helps in identifying areas of your code that are not being tested adequately.

- **Use test matcher**s: Use Jest's built-in test matchers to create tests that match specific conditions or behaviors. This helps in creating more targeted and focused tests.

- **Use environment variables**: Use environment variables to manage sensitive data or configurations that are specific to the test environment. This helps in keeping the code clean and portable.

- **Use Jest configuration files**: Use Jest configuration files to customize the behavior of the testing framework. This helps in creating a consistent and reliable testing environment, and allows for easy integration with other tools and systems.

- 1. **Setup your test suite in a separate file**: Use your **jest.config.js** file to set up globals and shared code for your test suite. When you start out, you will likely come across code that needs to be shared across different test files. For this, you want to set up a global configuration file.

```js
{
    ...
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js']
    // jest.config.js - rootDir references the root of your project's directory
}
```

- 2. **Use one test file per component**: Make sure you separate and you only include one component/class/module per test file. You want to separate different tests into different files to make them well separated, keep the files slim, and make them easily maintainable.

```js
// ❌ Don't
-components.test.js -
  // ✔️ Do
  Accordion.test.js -
  Button.test.js -
  Icon.test.js;
```

- 3. **Organize your tests with describe and test/it**: Inside each of your test files, organize your test steps into describe and test/it blocks.

```js
// ❌ Don't
it('Test accordion', () => { .. })
it('Test buttons and icons', () => { .. })

// ✔️ Do
describe('Accordion', () => {
    it('Should open and close on click', () => { ... })
    it('Should be able to set the default state', () => { ... })
})

describe('Button', () => {
    it('Should be able to pass a callback function', () => { ... })
    it('Should be able to set to secondary and tertiary', () => { ... })
})
```

- 4.a **Setup and reset commons in beforeEach/afterEach hook**s: Use beforeEach and afterEach hook to set up common code for test cases, and reset all mocks after your tests. Luckily, Jest comes with a couple of setup hooks that you can use to separate common functionality out of your test cases.

```js
// Setup common mocks or function calls in the following hooks
describe('Before and after hooks', () => {
  beforeAll(() => setupOnce());
  beforeEach(() => setupEach());
  afterAll(() => resetOnce());
  afterEach(() => resetEach());
});
```

- 4.b **There are four different hooks in Jest that can be used for repeating or one-time setups**. These are beforeAll, beforeEach, afterAll, and afterEach. The before hooks are usually used for setups, while the after hooks are used for clean-ups. They work similarly, but they are executed differently.

beforeAll: Executes code before all tests once. beforeEach: Executes code before each test. afterAll: Executes code after all tests once. afterEach: Executes code after each test.

```js
describe('How before and after hooks work', () => {
    // Executes once before the two it blocks
    beforeAll(() => { ... })

    // Executes before the 1st it block, then executes a second time before the 2nd block
    beforeEach(() => { ... })

    it('1st it block', () => { ... })
    it('2nd it block', () => { ... })

    // Executes once after the two it blocks
    afterAll(() => { ... })

    // Executes after the 1st it block, then executes a second time after the 2nd block
    afterEach(() => { ... })
})
```

- 5.a **Also test what should not happen**: When writing tests, a common practice is to test what a function should do, or a component should render. But you not only want to test the obvious but also edge cases and negative cases. What should not happen? What should not be returned from a function, or what should not be rendered by a component?

```js
// ❌ Don't
describe('Answer', () => {
  it('should render correctly', () => {
    render(<Answer>42</Answer>);
    expect('42').toBeInTheDocument();
  });
});

// ✔️ Do
describe('Answer', () => {
  it('Should render correctly', () => {
    render(<Answer>42</Answer>);
    expect('42').not.toBeInTheDocument();
  });

  it('Should not render when hidden is set to true', () => {
    render(<Answer hidden={true}>42</Answer>);
    expect('42').not.toBeInTheDocument();
  });
});
```

- 5.b In the above example, we are testing a component that can be hidden given if a certain prop is defined. We also want to test for this case. Or if your component conditionally renders data, you want to test what happens if the data is not rendered. The same goes for functions. Don't only test positive, but negative paths as well.

```js
// ❌ Don't
describe('Validating email addresses', () => {
  it('Should validate email addresses', () => {
    expect(validateEmail('email@email.com')).toBe(true);
    expect(validateEmail('john@doe.net')).toBe(true);
  });
});

// ✔️ Do
describe('Validating email addresses', () => {
  it('Should validate email addresses', () => {
    expect(validateEmail('email@email.com')).toBe(true);
    expect(validateEmail('john@doe.net')).toBe(true);

    expect(validateEmail('email')).toBe(false);
    expect(validateEmail('email@')).toBe(false);
    expect(validateEmail('email@email')).toBe(false);
  });
});
```

- 6. **Make your tests deterministic**: Each test case should be independent of the other and should be able to pass on its own.

```js
// ❌ Don't
describe('Filtering', () => {
    it('Should open up accordion', () => { ... })
    it('Should check best tutorials', () => { ... })
    it('Should filter for best tutorials', () => { ... })
})

// ✔️ Do
describe('Filtering', () => {
    // Mock everything else that is required for the interaction
    it('Should filter for best tutorials', () => { ... })
})
```

- 7. **Don’t rely on network calls**: Being deterministic means you can't rely on network calls. You not only want to ensure that your tests don't depend on each other, but you also want to ensure that your tests are completely isolated from other factors too. This includes:

- No network calls are being made
- There are no dependencies on API calls
- There are no dependencies on environment variables
- There are no dependencies on external dependencies

This means if you need to test any functionality that heavily relies on one of the above, you first need to mock the dependency and ensure that their output is always consistent.

```js
beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')

    // Mocking implementation to ensure consistent outcomes
    useStaticQuery.mockImplementation(() => { ... })
})
```

- 8.  **Don’t duplicate implementation logic**: You should rather have duplicated code in your test suite than logic that makes your tests behave differently, given different inputs. Always test the outcomes, not the implementation.

```js
// ❌ Don't
it('Should return the sum of numbers below 10', () => {
  for (let i = 0; i < 10; i++) {
    const x = i;
    const y = i + 1;

    if (x + y < 10) {
      expect(sum([i, y])).toBe(i + y);
    }
  }
});

// ✔️ Do
it('Should return the sum of numbers below 10', () => {
  expect(sum[(1, 2, 3)]).toBe(6);
  expect(sum[(3, 3)]).toBe(9);
  expect(sum[(4, 6)]).not.toBe(10);
});
```

- 9. **Don’t test implementation logic**: You also don't want to test implementation logic. Whenever you write your unit tests, you care about the outcomes and that the correct values are produced. You care about what is happening, not about how it is happening. Implementations can often change without actually affecting the outcome.

```js
// ❌ Don't
it('Should call reduce on the array', () => { ... })

// ✔️ Do
it('Should return the sum of values', () => { ... })
```

Imagine that the implementation you are testing is getting refactored. You want your test suite to be a safety net that can give you confidence in making changes in your code base without breaking anything, not a burden that you have to update for every little change.

- 10. **Run your tests as part of your deployment**: Run your test suite before each deployment to ensure you didn't accidentally break any functionality. Preferably, you also want to run your unit tests on each pull request to ensure that changes don't break your existing tests.

- 11. **Patch bugs**: Whenever you discover a bug, it is a good practice to patch it with a quick unit test to avoid regressions. That way, you can ensure that these bugs will never return again.
