

# React Typescript App Practice

```js

- root

  - husky
  - vscode
  - dist

- src
  - components
    - Component1
      - Component1.tsx
      - Component1.styles.ts
      - Component1.test.tsx
    - Component2
      - Component2.tsx
      - Component2.styles.ts
      - Component2.test.tsx
    - ...
  - pages
    - Page1
      - Page1.tsx
      - Page1.styles.ts
      - Page1.test.tsx
    - Page2
      - Page2.tsx
      - Page2.styles.ts
      - Page2.test.tsx
    - ...
  - hooks
    - useCustomHook1.ts
    - useCustomHook2.ts
    - ...
  - context
    - ContextProvider1.tsx
    - ContextProvider2.tsx
    - ...
  - constants
    - constants1.ts
    - constants2.ts
    - ...
  - styles
    - globalStyles.css
    - ...
  - assets
    - images
      - image1.png
      - image2.png
      - ...
  - utils
    - utility1.ts
    - utility2.ts
    - ...
  - App.tsx
  - index.tsx
- config
  - eslint.config.js
  - webpack.config.js
  - tsconfig.json
  - ...
- tests
  - unit
    - Component1.test.tsx
    - Component2.test.tsx
    - ...
  - e2e
    - test1.spec.ts
    - test2.spec.ts
    - ...
- package.json
- prettier.config.js
- .eslintrc.js
- cypress.json
```

## File Breakdwon

- **src**: This directory contains the source code of your application.

  - **components**: This directory houses reusable components that are used across different pages. Component1: Each component can have its own folder containing the component file (Component1.tsx), its corresponding styled-components file (Component1.styles.ts), and its unit test file (Component1.test.tsx). Component2 ...
  - **pages**: Refer to the components that represent individual views or screens within the application.
  - **hook**s: This directory contains custom hooks that provide reusable functionality for your components. Each hook is placed in its own file (useCustomHook1.ts, useCustomHook2.ts, etc.).
  - **context**: This directory contains context providers that manage global state for your application using React Context API. Each context provider is placed in its own file (ContextProvider1.tsx, ContextProvider2.tsx, etc.).
  - **constants**: This directory contains files (constants1.ts, constants2.ts, etc.) where you can define constant values used in your application.
  - **assets**: This directory contains static files used in your application, such as images and styles.
    - **images**: This subdirectory holds images used in your application.
  - **styles**: This directory holds global stylesheets or CSS files.
  - **utils**: This directory contains utility functions or helper modules that can be used across different parts of your application.
  - **App.tsx**: The main entry point of your application, where you define the overall structure and routing.
  - **index.tsx**: The file responsible for rendering the root component and initializing the React application.
  - **config**: This directory contains configuration files for different tools used in your project, such as ESLint configuration (eslint.config.js), Webpack configuration (webpack.config.js), TypeScript configuration (tsconfig.json), etc.
  - **tests**: This directory contains your test files.
    - **unit**: This directory contains unit tests for individual components or utilities. Each test file should focus on testing a specific component or utility in isolation.
  - **Cypress**: This directory houses end-to-end test files using Cypress. Each test file **(\*.spec.ts)** contains end-to-end test scenarios that simulate user interactions and verify the behavior of your application.
  - **package.json**: The file that manages project dependencies and scripts.
  - **prettier.config.js**: The configuration file for Prettier, specifying code formatting rules.
  - **.eslintrc.js**: The configuration file for ESLint, specifying linting rules and plugins.
  - **cypress.json**: The configuration file for Cypress, specifying test configuration options.

- **dist**: app build folder.
