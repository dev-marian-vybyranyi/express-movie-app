# Movie Passport Authentication

This is a standalone Express application demonstrating GitHub authentication using **Passport.js**.

## Prerequisites

- Node.js and NPM installed.
- A GitHub OAuth Application.

## Setup

1. **Register a GitHub OAuth App:**
   - Go to GitHub Settings > Developer settings > OAuth Apps.
   - Create a new OAuth App.
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/auth/github/callback`

2. **Environment Variables:**
   Create a `.env` file in the `moviePassport` directory with your GitHub Viewer credentials:
   ```
   GITHUB_CLIENT_ID=your_client_id_here
   GITHUB_CLIENT_SECRET=your_client_secret_here
   ```

## Installation

1. Navigate to the `moviePassport` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the server:

```bash
npm start
```

The application will run on **port 3000**.
Access it at: [http://localhost:3000](http://localhost:3000)

> **Note:** If you are running `movieFanSite`, ensure it is stopped as both use port 3000 by default.

## Features

- **GitHub Login:** Users can log in using their GitHub account.
- **Session Management:** Uses `express-session` to maintain user sessions.
- **Passport.js:** Demonstrates the `passport-github` strategy.
