

# Cypress Practices

[Cypress Docs](https://devdocs.io/cypress/)

- W**rite clean and maintainable code**: Write clear, concise, and modular code that is easy to read, understand, and maintain. Use descriptive and meaningful names for your tests and test components.

- **Use Cypress commands instead of traditional DOM queries**: Cypress provides a rich set of commands to interact with web elements, which is much easier to use and provides better error handling than traditional DOM queries.

- **Use fixtures for data**: Use fixtures to store test data instead of hardcoding data in the test scripts. This helps in making the test data easily maintainable and reusable.

- **Use custom commands**: Create custom commands to encapsulate commonly used functionality or interactions with your application. This reduces code duplication and increases maintainability.

- **Use aliases**: Use aliases to store references to web elements and then reuse them across multiple tests. This reduces the time required to search for the same element again and again.

- **Use timeouts effectively**: Set appropriate timeouts for Cypress commands to avoid unnecessary delays in the test execution. It is important to set an appropriate timeout for each command to ensure that the test runs smoothly.

- **Use proper assertions**: Use proper assertions to ensure that the expected behavior of the application is achieved. Assertions should be specific and clear, and should not be too generic.

- **Use Cypress Studio for visual testing**: Use Cypress Studio to visually record and replay tests. This helps in creating tests quickly and also makes it easy to update them when the application changes.

- **Use beforeEach and afterEach hooks**: Use beforeEach and afterEach hooks to perform setup and cleanup actions before and after each test. This helps in maintaining a clean and consistent state for the test environment.

- **Use Cypress Dashboard for test reporting**: Use Cypress Dashboard to monitor test results and analyze trends. This helps in identifying issues and taking corrective actions quickly.

- 1. **Use data Attributes When Selecting Elements**: You want to create selectors that can be specifically targeted for testing purposes so that no CSS or JavaScript update can break your test suite, just because a selector has been changed. The best option here is to use custom data attributes. Avoid using class names, ids, tags, or common attribute selectors. Use custom data selectors to isolate your test from your CSS and JS.

```js
// ✅ Do
cy.get('[data-cy="link"]');
cy.get('[data-test-id="link"]');

// ❌ Don't
cy.get('button'); // Too generic
cy.get('.button'); // Coupled with CSS
cy.get('#button'); // Coupled with JS
cy.get('[type="submit"]'); // Coupled with HTML
```

- 2. **Set a Base Url**: Setting a base URL globally is also a great practice. It can not only make your tests cleaner, it also makes it easier to switch the test suite between different environments, such as a localhost and a production site. Set a base URL to avoid unnecessary reloads and easily switch between different environments.
-

```js
// ✅ Do set a base URL in your cypress.json config
cy.visit('webtips/cypress');

// ❌ Don't
cy.visit('https://webtips.dev/webtips/cypress');
cy.visit('http://localhost/webtips/cypress');
```

- 3. **Avoid Using cy.wait with a Number**: The problem with this is that you end up waiting more than necessary. If you use cy.wait with 5000 milliseconds to wait for a network request, but the request finishes in 500 milliseconds, then you increased the run time of your test suite by 4500 milliseconds for no reason. Instead, use cy.wait with an alias to ensure that the condition you are waiting on is met, so you can proceed safely. You can also use assertions in place of cy.wait to ensure that certain conditions are met before moving on. Only use cy.wait with an alias to avoid waiting more than necessary.

```js
// ✅ Do
cy.intercept('POST', '/login').as('login');
cy.wait('@login'); // Waiting for the request explicitly

// ❌ Don't
cy.wait(5000);
```

- 4. **Tests Should be Able to Pass Independently**: Relying on the state of a previous test leads to a brittle test suite that can break the rest of your test cases if initial conditions are not met. Decouple your tests and either combine multiple steps that rely on each other into one, or create shared code that you can reuse.

```js
// ❌ Don't
it('Should log the user in', () => { ... });
it('Should be able to change settings', () => {
    cy.get('[data-cy="email"]').type('email@updated.com');
});

it('Should show updated settings', () => {
    cy.contains('[data-cy="profile"]', 'email@updated.com');
});
```

- 5. **Control State Programmatically**: Whenever you need to set the state for your application so you can test under the right conditions, always try to set the state programmatically, rather than using the UI. This means your state will be decoupled from the UI. You will also see a performance improvement, as setting the state programmatically is faster than using the UI of your application. we can use cy.request to directly communicate with an API to log a user in, rather than using the UI to do the same. The same applies to other actions, such as adding test data for your application to get it into the right state.

```js
// ✅ Do
cy.request('POST', '/login', {
  email: 'test@email.com',
  pass: 'testPass',
});

// ❌ Don't
cy.get('[data-cy="email"]').type('test@email.com');
cy.get('[data-cy="pass"]').type('test@email.com');
cy.get('[data-cy="submit"]').click();
```

- 6. **Avoid Single Assertions**: Avoid using single assertions, to prevent unnecessary state resets that affects performance.

```js
// ✅ Do
it('Should have an external link pointing to the right domain', () => {
    cy.get('.link')
      .should('have.length', 1)
      .find('a')
      .should('contain', 'webtips.dev');
      .and('have.attr', 'target', '_blank');
});

// ❌ Don't
it('Should have a link', () => {
    cy.get('.link')
      .should('have.length', 1)
      .find('a');
});

it('Should contain the right text', () => {
    cy.get('.link').find('a').should('contain', 'webtips.dev');
});

it('Should be external', () => {
    cy.get('.link').find('a').should('have.attr', 'target', '_blank');
});
```
