
# restFul Methods Practices

[RESTful API design](https://www.contentstack.com/blog/tech-talk/effective-restful-api-design-principles/)

- **Use HTTP methods**: Use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. For example, use GET to retrieve a resource, POST to create a new resource, PUT to update an existing resource, and DELETE to delete a resource.

- **Use meaningful URIs**: Use URIs that are easy to understand and provide information about the resources being accessed. For example, use /users to access a collection of users and /users/{id} to access a specific user.

- **Use plural nouns for collections**: Use plural nouns to indicate collections of resources. For example, use /users to access a collection of users.

- **Use HTTP status codes**: Use HTTP status codes to indicate the result of a request. For example, use 200 (OK) to indicate a successful response, 201 (Created) to indicate that a resource has been created, and 404 (Not Found) to indicate that a resource could not be found.

- **Use resource representations**: Use resource representations to provide data about resources in a standard format, such as JSON or XML.

- **Use HATEOAS**: Use HATEOAS (Hypermedia as the Engine of Application State) to provide links to related resources. This makes it easier for clients to navigate the API and discover new resources.

- **Use versioning**: Use versioning to ensure that clients can continue to use older versions of your API while also using the latest version.

- **Use caching**: Use caching to improve performance and reduce the load on your API. This can be especially useful for data that is relatively static.

- **Use authentication and authorization**: Protect your API by requiring authentication and authorization for access. This helps ensure that only authorized users can access sensitive data or functionality.

- **Use error handling**: Use appropriate error handling to provide meaningful error messages to clients when errors occur. This helps clients understand what went wrong and how to fix it.
