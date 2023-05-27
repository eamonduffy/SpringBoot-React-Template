# SpringBoot-React-Template

This repository contains a template project for building a web application using Spring Boot (Java) for the backend and React.js for the frontend. The project is organized into separate directories for the backend and frontend components.

## Backend

The backend directory contains the server-side code written in Spring Boot. It follows a GraphQL architecture for handling API requests. Here's an overview of the files and directories within the backend:

-   `src/main/java/com/duffy/backend`: The Java source code for the backend.
    -   `controllers`: Contains the controller classes that define the GraphQL endpoints.
    -   `models`: Contains the data models used in the application, including the `Tutorial` and `Author` classes.
    -   `repositories`: Contains the repository interfaces for data access.
    -   `services`: Contains the service classes that handle the business logic and data operations.
-   `src/main/resources`: Contains the application configuration files and resources.
    -   `application.properties`: Configures various settings for the Spring Boot application, such as database connection details.

## Frontend

The frontend directory contains the client-side code written in React.js. It handles the user interface and communicates with the backend API. Here's an overview of the files and directories within the frontend:

-   `src/components`: Contains the reusable React components used in the application.
-   `src/pages`: Contains the main pages of the application, such as the tutorial listing and tutorial details pages.
-   `src/services`: Contains the client-side API service files responsible for making requests to the backend.
-   `src/App.js`: The main entry point for the React application.
-   `src/index.js`: Renders the root component and sets up the React application.

## Getting Started

To run the application locally, follow these steps:

1. Ensure you have Java, Maven, and Node.js installed on your system.
2. Clone this repository: `git clone https://github.com/eamonduffy/SpringBoot-React-Template.git`
3. Navigate to the backend directory: `cd SpringBoot-React-Template/backend`
4. Build and run the Spring Boot backend: `mvn spring-boot:run`
5. Open another terminal and navigate to the frontend directory: `cd ../frontend`
6. Install the frontend dependencies: `npm install`
7. Start the frontend development server: `npm start`
8. Open your web browser and visit `http://localhost:3000` to see the application.

Feel free to explore and modify the code in both the backend and frontend directories to fit your specific requirements.

For more detailed instructions and information about the project, refer to the README files in each directory.
