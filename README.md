# Express Movie App Collection

This repository contains a collection of Express.js projects demonstrating various web development concepts, including API development, frontend integration, and authentication.

## Projects

### 1. Movie API (`movieApi`)

A RESTful API that serves movie data stored in local JSON files.

- **Port:** 3030
- **Key Features:** API key validation, CRUD operations for ratings, search functionality.
- [Read more](./movieApi/README.md)

### 2. Movie Fan Site (`movieFanSite`)

A frontend web application that consumes the Movie API to display movies.

- **Port:** 3000
- **Key Features:** Server-side rendering with EJS, API integration (`request` module), search UI.
- **Dependency:** Requires `movieApi` to be running.
- [Read more](./movieFanSite/README.md)

### 3. Movie Passport Auth (`moviePassport`)

A standalone application demonstrating authentication with Passport.js (GitHub Strategy).

- **Port:** 3000
- **Key Features:** GitHub OAuth login, session management, secure headers with Helmet.
- **Note:** Cannot run simultaneously with `movieFanSite` on the same port.
- [Read more](./moviePassport/README.md)

## Getting Started

1. **Install Dependencies:**
   Navigate into each project folder and run:

   ```bash
   npm install
   ```

2. **Run the API:**

   ```bash
   cd movieApi
   npm start
   ```

3. **Run a Frontend:**
   Open a new terminal window and run either the Fan Site or the Passport app:
   ```bash
   cd movieFanSite
   npm start
   ```
   _OR_
   ```bash
   cd moviePassport
   npm start
   ```
