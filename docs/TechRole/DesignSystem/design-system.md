
# Design System Guidelines

![DS for Devs](https://stevekinney.net/courses/storybook)

A well-structured design system ensures consistency, scalability, and efficiency in design and development across products. This document outlines governance, token naming conventions, Figma file organization, component naming structure, and a playground environment to test and iterate on components.

## 1. Design System Governance

Design System Governance defines the guidelines, processes, and ownership structure for maintaining and updating the design system. Effective governance ensures the system evolves sustainably, aligns with brand and user experience goals, and remains accessible to all team members.

### Key Responsibilities

- **Ownership:** Identify key team members or a Design System Governance Board responsible for system maintenance and evolution.
- **Versioning:** Track changes and version updates to ensure smooth integration across projects. Use semantic versioning (e.g., v1.2.0).
- **Contribution Process:** Define a clear process for proposing, reviewing, and approving new components or updates.
- **Documentation Standards:** Ensure thorough documentation of components, tokens, usage guidelines, and accessibility standards.
- **Communication:** Schedule regular check-ins with stakeholders to review updates and gather feedback.

## 2. Tokens - Primitive and Semantic Naming

Design tokens are the foundational elements that drive visual consistency across components and themes. Proper naming conventions help differentiate between the types of tokens and their use cases.

### Primitive Tokens

Primitive tokens define the basic values such as colors, typography, spacing, and border radii. These are usually immutable constants that should not be altered within the design system.

#### Examples
- `color-blue-500`
- `font-size-16`
- `spacing-8`

### Semantic Tokens

Semantic tokens provide meaning by mapping primitive tokens to specific design contexts. They allow for easier re-theming and adaptation of the design system across different brands or contexts.

#### Examples
- `color-primary` → mapped to `color-blue-500`
- `font-body` → mapped to `font-size-16`
- `spacing-card-padding` → mapped to `spacing-8`

### Naming Conventions

- **Primitives:** Use descriptive names with numerical values indicating intensity (e.g., `color-gray-700`).
- **Semantics:** Use purpose-driven names based on context (e.g., `color-alert`, `spacing-content-padding`).

## 3. Figma File Structure

A well-organized Figma file structure enhances collaboration and ensures consistency across the design team.

### Recommended Figma File Organization

- **1. Foundation**  
  Contains design tokens such as colors, typography, and grid systems.
  
- **2. Components**  
  Holds individual components, each named according to their function (e.g., `Button`, `Card`, `Input Field`). Components should be organized into folders based on UI patterns (e.g., `Forms`, `Navigation`).
  
- **3. Patterns**  
  Contains collections of components in common patterns (e.g., `Login Form`, `Navbar`). Patterns demonstrate real-world use cases for components.

- **4. Templates**  
  Page layouts showcasing how components and patterns work together in various page structures.

- **5. Playground**  
  A sandbox area where designers can experiment and test new components before integrating them into the main system.

### Figma File Naming Conventions

- **Component File:** `Component-[Component Name]` (e.g., `Component-Button`)
- **Pattern File:** `Pattern-[Pattern Name]` (e.g., `Pattern-Login`)
- **Template File:** `Template-[Template Name]` (e.g., `Template-Homepage`)

## 4. Components Naming and Structure

Component naming and structure play a crucial role in maintaining organization and consistency. Components should be named according to their role and functionality, enabling easy searching and reusability.

### Naming Conventions

- **Atomic Components:** Use singular names for basic components (e.g., `Button`, `Input`).
- **Molecular Components:** Combine atomic components to form a unit with a specific purpose (e.g., `Card`, `ModalHeader`).
- **Organisms:** Use descriptive names that convey purpose and function (e.g., `LoginForm`, `ProductList`).
  
### Component Structure in Code

Organize components in a folder-based hierarchy to separate logic, styling, and tests.

Example folder structure:

Button/
├── Button.js     # Component logic
├── Button.css    # Component styles
└── Button.test.js # Component tests

### Figma Component Structure

- **Variants:** Utilize variants in Figma to handle different states (e.g., `Primary`, `Secondary`, `Disabled` for Buttons).
- **Auto Layout:** Use Figma's Auto Layout for responsive and adaptable component design.

## 5. Playground

The Playground is an essential part of the design system where designers and developers can experiment with new components, patterns, and layouts without impacting the main system. This sandbox environment encourages testing, iteration, and validation before full integration.

### Playground Guidelines

- **Testing New Components:** Try out new components and patterns, adjust styling, and gather feedback.
- **Responsive Testing:** Experiment with component behaviors across different screen sizes and breakpoints.
- **Theme Variations:** Test components with different themes and semantic tokens to ensure adaptability.

---

By following these guidelines, teams can create a robust and scalable design system that enhances collaboration, maintains brand consistency, and improves user experiences across projects.
