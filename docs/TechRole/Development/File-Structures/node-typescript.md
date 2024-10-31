

# Node App Practice

```js
- src/
  - controllers/
    - UserController.ts
    - ProductController.ts
    - ...
  - routes/
    - userRoutes.ts
    - productRoutes.ts
    - ...
  - models/
    - User.ts
    - Product.ts
    - ...
  - views/
    - user/
      - profile.mustache
      - settings.mustache
      - ...
    - product/
      - details.mustache
      - create.mustache
      - ...
    - layouts/
      - mainLayout.mustache
  - services/
    - UserService.ts
    - ProductService.ts
    - ...
  - middlewares/
    - authentication.ts
    - validation.ts
    - ...
  - utils/
    - helpers.ts
    - constants.ts
    - ...
  - tests/
    - UserController.test.ts
    - ProductController.test.ts
    - ...
  - app.ts
  - server.ts
  - ...
```

# File Breakdown

- **src**: The root folder of your application's source code.

  - **controllers**: Contains controller modules responsible for handling the business logic of different entities or resources. Each controller typically corresponds to a specific entity or resource and contains methods for handling requests and responses.

  - **routes**: Holds route modules that define the API endpoints for different resources. Each route file defines the routes and maps them to the corresponding controller methods.

  - **models**: Contains model modules representing the data structures or schemas for different entities. Each model typically corresponds to a database table or a specific entity in your application.

  - **views**: Contains the Mustache templates used for rendering HTML pages. Templates can be organized into subfolders based on entities or resource types. The layouts subfolder holds the layout templates that define the overall structure of your pages.

  - **services**: Holds service modules that encapsulate complex business logic and interact with multiple controllers or models. Services help to keep the controllers lean and maintain separation of concerns.

  - **middlewares**: Contains middleware modules responsible for handling request processing tasks, such as authentication, validation, error handling, etc.

  - **utils**: Holds utility modules or helper functions that can be used across the application.

  - **tests**: Contains test files for the controllers, where you can write tests using Mocha and Chai to verify the behavior of your application.

  - **app.ts**: The main Express application file where you configure and set up the Express app, including middleware, routes, template engine setup, and any other necessary configurations.

  - **server.ts**: The entry point of your application where you start the Express server and listen for incoming requests.
