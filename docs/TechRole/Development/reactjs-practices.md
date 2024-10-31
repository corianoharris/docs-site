

# Reactjs Practices

[React Docs](https://react.dev/learn)

- **Use Functional Components**: React's functional components are faster, more efficient, and easier to read than class components. They also have fewer side effects, making them easier to test.

- **Use JSX or TSX**: JSX is a syntax extension for JavaScript that allows you to write HTML-like syntax in your JavaScript code. TSX is a syntax extension for TypeScript that allows you to write HTML-like syntax with type checking of JavaScript code. It helps make your code more readable and easier to maintain.

- **Keep Components Small**: Break down your components into small, reusable pieces. This makes your code more modular, easier to test, and easier to maintain.

- **Use Prop Types if you don't use typescript**: Prop Types are a way to define the expected types of your components' props. They help catch errors early and ensure that your code works as expected.

- **Avoid Stateful Logic in Render**: Stateful logic in the render function can slow down your application. Instead, use lifecycle methods or hooks like useEffect to handle stateful logic.

- **Use Immutable Data Structures**: Immutable data structures are safer and more efficient than mutable data structures because they cannot be changed after they are created. Use libraries like Immutable.js or Immer to make your data structures immutable.

- **Use Keys for Lists**: When rendering lists of components, use a unique key for each item in the list. This helps React optimize rendering and improves performance.

- **Use React Fragments**: React Fragments allow you to group a list of children without adding extra nodes to the DOM. This helps keep your DOM tree clean and efficient.

- U**se Context Sparingly**: Context is a powerful feature of React, but it can be overused. Use it sparingly and only when it is necessary.

- **Test Your Code**: Test your code using tools like Jest and Enzyme. This helps catch errors early and ensures that your code works as expected.

## Best practices for React Hooks

- U**se useState to manage state**: The useState Hook is a simple and effective way to manage state in functional components. Use it to store and update stateful data.

- **Use useEffect to handle side effects**: useEffect is a Hook that allows you to handle side effects like fetching data, subscribing to events, and updating the DOM. Use it to keep your components in sync with the rest of your application.

- **Use custom hooks to share logic**: Custom Hooks allow you to share stateful logic between components. Use them to avoid repeating code and to keep your components small and focused.

- **Use useMemo to memoize expensive computations**: useMemo is a Hook that allows you to memoize expensive computations. Use it to optimize your component's performance and reduce unnecessary re-renders.

- **Use useCallback to memoize callbacks**: useCallback is a Hook that allows you to memoize functions. Use it to prevent unnecessary re-renders and improve your component's performance.

- **Avoid using Hooks inside loops and conditions**: Hooks should be used at the top level of your component. Avoid using them inside loops and conditions, as this can lead to unexpected behavior.

- **Avoid using Hooks inside class components**: Hooks are designed to work with functional components. Avoid using them inside class components, as this can lead to errors and unexpected behavior.

- **Use ESLint rules to enforce best practices**: Use ESLint rules to enforce best practices for working with Hooks. This will help you catch errors early and ensure that your code is consistent and maintainable.

- **Test your Hooks**: Test your Hooks using tools like Jest and Enzyme. This will help you catch errors early and ensure that your Hooks work as expected.

- **Keep your Hooks simple and focused**: Keep your Hooks small and focused on a single responsibility. This will make them easier to reuse and maintain over time.

## React File Structure Best Practices

[Structure and Organize a React Application](https://www.taniarascia.com/react-architecture-directory-structure/)

- **Group files by feature or module**: Organize your files based on the features or modules they belong to. This makes it easier to locate related files and maintain the codebase over time.

- U**se a consistent naming convention**: Use a consistent naming convention for your files and folders to make them easy to find and understand. For example, you could use lowercase filenames with hyphens to separate words (e.g. my-feature.js).

- **Use an index file to export components**: Use an index.js file in each folder to export the components or files in that folder. This makes it easier to import and use components from other parts of your application.

- **Use Separate presentational and container components**: Separate your components into presentational and container components. Presentational components are responsible for rendering the UI, while container components are responsible for managing the state and logic of the application.

- **Put reusable components in a shared folder**: Put reusable components in a shared folder that can be easily imported and used in different parts of your application. This makes it easier to maintain and update these components over time.

- **Use a folder for constants and utilities**: Use a folder to store constants, utility functions, and other shared code that can be used across your application.

- **Consider using a folder for assets**: Consider using a folder to store images, icons, and other assets used in your application. This makes it easier to manage these files and keep your codebase organized.

- **Use a folder for styles**: Use a folder to store your stylesheets and organize them based on the components they apply to. This makes it easier to maintain and update your styles over time.

- **Avoid nesting folders too deeply**: Avoid nesting folders too deeply as this can make it harder to find and understand your files. Stick to a simple and consistent folder structure that is easy to navigate.

- **Use tooling to enforce best practices**: Use tools like ESLint and Prettier to enforce best practices for file naming, structure, and organization. This helps maintain consistency and improves code quality over time.
