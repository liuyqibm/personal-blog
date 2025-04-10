# Personal Blog

This is a responsive personal blog application built with Java for the backend and React for the frontend. The project is structured to separate concerns between the server-side and client-side code.

## Project Structure

```
personal-blog
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           └── blog
│   │   │   │               ├── BlogApplication.java
│   │   │   │               ├── controller
│   │   │   │               │   └── BlogController.java
│   │   │   │               ├── model
│   │   │   │               │   └── Article.java
│   │   │   │               └── service
│   │   │   │                   └── BlogService.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       └── static
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── example
│   │                   └── blog
│   │                       └── BlogApplicationTests.java
│   └── pom.xml
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── PostList.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Features

- **Backend**: Built with Spring Boot, providing RESTful APIs for managing blog articles.
- **Frontend**: Developed using React, featuring a responsive design with a navigation bar, article list, and footer.
- **Database**: Configurable through `application.properties` for easy integration with various databases.

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- Node.js and npm

### Backend Setup

1. Navigate to the `backend` directory.
2. Run `mvn clean install` to build the project.
3. Start the application using `mvn spring-boot:run`.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the development server using `npm run dev`.

### Accessing the Application

Once both the backend and frontend are running, you can access the blog at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.