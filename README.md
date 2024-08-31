# Team 7

- Mohammad Hmoudah
- Jehad Lefdawi
- Muthana Abu Alez
- Abdalrahman Jallad

# Project Overview
## Project Name
Mart.ps Home Page Enhancement with Microfrontends

## Project Description
This project aims to enhance the Mart.ps home page by utilizing microfrontends to create a more dynamic, modular, and scalable user interface. By leveraging modern front-end technologies like React, Angular, and Lit, each section of the home page is developed as an independent component. These components are seamlessly integrated into a single, cohesive experience through Angular's module federation. The project's purpose is to showcase how microfrontends can be used to break down a complex UI into smaller, manageable parts, ensuring better maintainability, scalability, and collaboration across teams.

## Project Goals
* `Modularity:` Enable the Mart.ps development team to independently develop, test, and deploy individual components of the home page.
* `Scalability:` Allow for easy scaling of the home page by adding or updating components without affecting the entire application.
* `Performance:` Improve page load times and responsiveness by loading only the necessary components.
* `Seamless Integration:` Achieve a seamless user experience by ensuring that the various microfrontend components work together as a unified whole.

## Project Target Audience
`Development Teams:` Teams working on different parts of the Mart.ps platform.
`Project Managers:` Individuals overseeing the development process and ensuring timely delivery.
`Stakeholders:` Mart.ps business stakeholders interested in improving user engagement and retention through a better home page experience.

## General System Design Architecture Diagram
![image](https://github.com/user-attachments/assets/70da6a85-8f91-4a4a-938d-50e8405f9ee6)

# Architecture
## Microfrontend Architecture:
The chosen microfrontend architecture for this project is Module Federation. This approach allows for the dynamic loading and sharing of code between multiple applications at runtime. With Module Federation, each microfrontend is developed as an independent module that can be loaded into the host application (an Angular app) on demand. This architecture provides several advantages:

* `Independence:` Each microfrontend is developed, tested, and deployed independently. This allows teams to work in parallel without being tightly coupled.
* `Scalability:` New features and components can be added without affecting the existing codebase, enabling continuous scaling of the Mart.ps home page.
* `Reusability:` Shared code (e.g., libraries, utilities) can be exposed to multiple microfrontends, reducing duplication and promoting consistency across the application.

## Communication Model:
The communication between microfrontends is handled through a combination of shared state management and direct communication:

* `Shared State Management:` The host application manages global state using a shared service, which is accessible to all microfrontends. This is particularly useful for handling cross-cutting concerns like user authentication, cart management, and theming.
* `Direct Communication:` In some cases, microfrontends may need to directly communicate with each other. This is achieved through custom events or shared services. For instance, when a user interacts with a product in the React microfrontend, an event might be emitted to update the cart managed by the Angular host application.

This architecture ensures that Mart.ps can continue to grow and evolve, with each microfrontend contributing to a cohesive and efficient user experience. The combination of Module Federation, a robust communication model, and a flexible deployment strategy supports the project's goals of modularity, scalability, and maintainability.

# Integration Approach
## Integration Method
The chosen method for integrating microfrontends in this project is module federation. Module federation allows the independent development, deployment, and loading of microfrontend components at runtime. This approach facilitates the seamless integration of components developed in different frameworks (React, Angular, and Lit) into a single, cohesive application. By dynamically loading only the required components, module federation minimizes the initial load time and improves overall performance.

## Integration Points
* `Navigation:` Each microfrontend is responsible for a specific section of the home page, such as the header, product showcase, and footer. These sections are integrated into the main application via module federation.
* `Data Sharing:` Shared services and state management techniques are used to ensure consistent data flow between components, particularly in areas like user authentication and shopping cart functionalities.
* `UI Elements:` Common UI elements, such as buttons and modals, are standardized across all microfrontends to maintain a consistent look and feel.

## Integration Challenges
* `Conflicts:` With multiple frameworks in play, there is a risk of conflicts in global styles and JavaScript variables. This is mitigated by using scoped styles and namespaced variables.
* `Security Concerns:` Loading external microfrontends can pose security risks. To address this, Content Security Policy (CSP) headers are enforced, and each component is thoroughly vetted for vulnerabilities.
* `Performance Bottlenecks:` The overhead of loading multiple microfrontends could lead to performance issues. Lazy loading and code splitting are used to ensure that only the necessary components are loaded, reducing the initial load time and improving runtime performance.

# Getting Started
## Prerequisites
Before running the project, ensure you have the following software and tools installed:

Node.js (version 20)
npm (version 10 or higher)
Angular CLI (version 18.2.0)
VS Code or another preferred code editor

## Installation
* Clone the repository
```
git clone https://github.com/CBSE-summer2024/team7.git
```

* Install Lit App Modules
```
cd frontend/alerts-micro
npm i
```

* Install Angular App Modules
```
cd frontend/category-micro
npm i
```

* Install React App Modules
```
cd frontend/products-micro
npm i
```

* Install Host App Modules
```
cd frontend/host-app
npm i
```

## Running the Project
* Run Lit App
```
cd frontend/alerts-micro
npm run start
```

* Run Angular App
```
cd frontend/category-micro
npm run start
```

* Run React App
```
cd frontend/products-micro
npm run start
```

* Run Host App
```
cd frontend/host-app
npm run start
```

* Navigate to Host App using your browser
```
localhost:4200
```

## Project Organization
```
/martps-home-enhancement
|-- /host-app            # Angular host application with module federation setup
|-- /products-micro      # React microfrontend component
|-- /alerts-micro        # Lit microfrontend component
|-- /category-micro      # Angular microfrontend component
```

## Microfrontend Modules
### Angular Host Application:
* Responsible for orchestrating the entire application.
* Uses module federation to dynamically load microfrontends.
* Manages global state and routing across the application.
  
### Angular Microfrontend
* Focuses on the categories list, Ads board and search sections.
* Manga Ads and categories search.
* Ensures a seamless user experience with shared state and services.

### React Microfrontend
* Handles the product showcase section of the home page.
* Manages product data fetching, filtering, and display.
* Integrates with the shopping cart and other shared functionalities.
  
### Lit Microfrontend
* Implements simple alert component.
* Focuses on lightweight and fast rendering of UI components.

# Development Workflow
## Development Tools
The following tools are essential for the development process:
* `Webpack:` Used in the Angular host application for module federation.
* `Prettier:` Code formatter to maintain consistent style.

## Code Style Guide
This project adheres to the following coding conventions:
* `JavaScript/TypeScript:` Follow the Airbnb style guide.
* `SCSS/CSS:` Follow the Sass Guidelines. The project uses both SCSS and CSS, ensuring consistent styling across microfrontends.
* `Component Naming:` Use PascalCase for component names and maintain consistency across the project.
* `Commit Messages:` Use Conventional Commits for clear and structured commit messages.

## Contribution Guidelines
To contribute to the project, follow these steps:

### Create a Branch
* Each contributor should create a new branch from their assigned task.
* Name the branch according to the task, such as 4-task-test.
```
git checkout -b feature/task-name
```

### Make Changes
* Implement your changes while adhering to the project's code style guide.
* Regularly commit your progress to keep the branch updated.

### Submit a Pull Request
* Once your task is complete, create a pull request (PR) from your branch to the dev branch.
* Provide a clear description of the changes made, referencing any relevant issues or tasks.
* Move the task to the `In Review` status.

### Code Review
* Another contributor will review your PR. They will check for adherence to the code style guide, correctness, and overall quality.
* Address any feedback provided during the review process.

### Merge to `dev` Branch
* Once the PR is approved, it will be merged into the dev branch.
* After merging, ensure that the `dev` branch is functioning correctly and no issues were introduced.

### After Finish All Tasks
* Ensure that all components working properly.
* Merge `dev` branch into `main` branch.

# Deployment
Unfortunately, we didn't deploy the project, you can run it locally.

# Resources
## Documentation:
* [Module Federation](https://webpack.js.org/concepts/module-federation/)
* [React Documentation](https://react.dev/learn)
* [Lit Documentation](https://lit.dev/docs/)
* [Angular Documentation](https://v17.angular.io/docs)

## Community Resources:
* [Stack Overflow](https://stackoverflow.com/)
* [Dev.to](https://dev.to/)
