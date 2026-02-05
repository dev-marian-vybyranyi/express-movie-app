# Movie Fan Site

This is the frontend application for browsing movies. It consumes the **Movie API**.

## Prerequisites

- Node.js and NPM installed.
- **Movie API** must be running on port `3030`.

## Installation

1. Navigate to the `movieFanSite` directory.
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

## Configuration

The application expects the **Movie API** to be available at `http://localhost:3030`.
The API Key is currently hardcoded for demonstration purposes.

## Features

- **Home Page:** Displays a list of most popular movies fetched from the API.
- **Movie Details:** Click on a movie to view detailed information.
- **Search:** Search for movies or people using the search bar.
