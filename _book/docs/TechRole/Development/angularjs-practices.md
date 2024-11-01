Here’s the complete markdown guide combining all the sections into a single document for Angular and TypeScript best practices.

```markdown
# Angular and TypeScript Best Practices

This guide provides best practices for writing efficient, scalable, and maintainable Angular applications using TypeScript. Each section includes relevant use cases and TypeScript examples to illustrate best practices.

---

## 1. Code Structure and Organization

### Use Feature Modules
Organize code into **feature modules** to enable **lazy loading** and separation of concerns. This helps reduce initial load time and keeps modules focused on specific areas of the app.

**Use Case:** Separate an e-commerce app into `ProductModule`, `CartModule`, and `UserModule`.

```typescript
// Feature Module Example
@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
```

### Folder Structure
Adopt a **consistent folder structure**. Use the following structure as a starting point:

```
src/
├── app/
│   ├── core/         # Core services, guards, interceptors
│   ├── shared/       # Shared components, pipes, directives
│   ├── features/     # Feature modules
│   │   ├── product/
│   │   ├── user/
│   │   ├── cart/
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.module.ts
```

---

## 2. TypeScript Best Practices

### Use Strong Typing
Always define the types of variables, parameters, and function return values. This improves code readability and enables compile-time checks.

**Use Case:** Strong typing with an interface for a `User` object.

```typescript
// Define Interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// Use Interface in Components and Services
getUser(): Observable<User> {
  return this.http.get<User>('/api/user/1');
}
```

### Enums for Constant Values
Use **Enums** to handle constant values and improve readability.

**Use Case:** Define user roles.

```typescript
export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
  Guest = 'GUEST',
}

// Usage
if (user.role === UserRole.Admin) {
  // Grant admin access
}
```

### Avoid `any`
Avoid using `any` as it bypasses TypeScript's type-checking. Use `unknown` if a type is truly unknown, and cast when necessary.

---

## 3. Component Best Practices

### Use Smart and Dumb Components
Separate **container components** (smart components) and **presentational components** (dumb components) to maintain clarity.

**Use Case:** `UserProfileContainerComponent` manages state, and `UserProfileComponent` handles only display.

```typescript
// Smart Component
@Component({
  selector: 'app-user-profile-container',
  template: `<app-user-profile [user]="user"></app-user-profile>`,
})
export class UserProfileContainerComponent implements OnInit {
  user: User;
  
  ngOnInit() {
    this.user = this.userService.getUser();
  }
}

// Dumb Component
@Component({
  selector: 'app-user-profile',
  template: `<div>{{ user.name }}</div>`,
})
export class UserProfileComponent {
  @Input() user: User;
}
```

### Use the `OnPush` Change Detection Strategy
For performance optimization, set change detection to `OnPush` for components where inputs don't change frequently.

```typescript
@Component({
  selector: 'app-product',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ product.name }}`,
})
export class ProductComponent {
  @Input() product: Product;
}
```

---

## 4. Service Best Practices

### Use Dependency Injection (DI)
Angular's DI simplifies code testing and reuse. **Inject services** in components and **use dependency providers** at the module level for singleton services.

**Use Case:** Creating a logging service for application-wide usage.

```typescript
@Injectable({
  providedIn: 'root', // Singleton instance
})
export class LoggerService {
  log(message: string) {
    console.log(message);
  }
}
```

### Avoid Using Services in Angular Modules
Inject services in components or feature modules instead of Angular modules to maintain module independence and reduce coupling.

---

## 5. State Management

### Use Reactive Forms
Use **Reactive Forms** for complex forms, enabling more control over validation, updates, and form state.

**Use Case:** Build a registration form with validation.

```typescript
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
```

### Centralize State with NgRx (Optional)
For large applications with complex states, use **NgRx** for state management.

---

## 6. Performance Optimization

### Use Lazy Loading for Modules
Implement **lazy loading** for feature modules to decrease initial load times.

```typescript
// Lazy Loading with Angular Router
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  },
];
```

### Avoid Unnecessary Change Detection
Use `trackBy` with `ngFor` to avoid unnecessary re-rendering of list items.

**Use Case:** Optimizing a list of products.

```html
<div *ngFor="let product of products; trackBy: trackByProductId">{{ product.name }}</div>
```

```typescript
trackByProductId(index: number, product: Product): number {
  return product.id;
}
```

---

## 7. Asynchronous Programming

### Use `async/await` for Promises
Using `async/await` makes code more readable and manageable, especially with multiple asynchronous operations.

**Use Case:** Fetching user and order data.

```typescript
async loadUserData() {
  const user = await this.userService.getUser();
  const orders = await this.orderService.getOrders();
  this.user = user;
  this.orders = orders;
}
```

### Use RxJS for Asynchronous Streams
Leverage **RxJS** operators (e.g., `map`, `filter`, `switchMap`) for handling complex asynchronous flows.

**Use Case:** Fetch product data based on a search query.

```typescript
this.searchInput.valueChanges
  .pipe(
    debounceTime(300),
    switchMap(query => this.productService.searchProducts(query))
  )
  .subscribe(products => this.products = products);
```

---

## 8. Error Handling

### Global Error Handling with Interceptors
Use **HTTP Interceptors** to handle errors globally and show user-friendly messages.

```typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Handle Unauthorized error
        }
        return throwError(error);
      })
    );
  }
}
```

### Use `try/catch` with Async Functions
For `async` functions, use `try/catch` to manage exceptions gracefully.

```typescript
async loadData() {
  try {
    const data = await this.dataService.getData();
    this.data = data;
  } catch (error) {
    console.error('Error loading data', error);
  }
}
```

---

## 9. Documentation and Comments

### Use TypeScript JSDoc for Documentation
Add **JSDoc comments** to functions, classes, and components to provide context and improve readability.

```typescript
/**
 * Fetches user data from the API.
 * @returns Observable<User[]>
 */
getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users');
}
```

### Avoid Excessive Comments
Code should be self-explanatory wherever possible; limit comments to complex or non-obvious sections.

---

## 10. Testing

### Write Unit Tests for Components and Services
Use **Angular TestBed** and **Jasmine** to write unit tests for each component, service, and utility.

**Use Case:** Test a user service that retrieves user data.

```typescript
it('should return expected users (HttpClient called once)', () => {
  const expectedUsers: User[] = [{ id: 1, name: 'John Doe' }];

  httpClientSpy.get.and.returnValue(of(expectedUsers));
  service.getUsers().subscribe(
    users => expect(users).toEqual(expectedUsers, 'expected users'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
```

### Use `async` and `fakeAsync` for Asynchronous Tests
Use `fakeAsync` and `tick` when testing asynchronous operations to simulate passage of time.

