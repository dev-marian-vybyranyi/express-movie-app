# Movie API

This is the backend API for the Express Movie App. It serves movie data via a RESTful API.

## Prerequisites

- Node.js installed
- NPM installed

## Installation

1. Navigate to the `movieApi` directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the API

Start the server:

```bash
npm start
```

The API will run on **port 3030**.

## Authentication

All API requests (except the home page) require a valid API key passed as a query parameter.

- **Key:** `123456789`
- **Example:** `/most_popular?api_key=123456789`

## Endpoints

### Movies

- **GET `/most_popular`**
  - Returns a list of most popular movies.
  - Query Params:
    - `page` (optional): Page number (default: 1).
    - `api_key`: Required.

- **GET `/movie/top_rated`**
  - Returns a list of top-rated movies.
  - Query Params:
    - `page` (optional): Page number (default: 1).
    - `api_key`: Required.

- **GET `/movie/:movieId`**
  - Returns details for a specific movie.
  - Params: `movieId` - The ID of the movie.
  - Query Params: `api_key`: Required.

- **POST `/movie/:movieId/rating`**
  - Submit a rating for a movie.
  - Headers: `Content-Type: application/json`
  - Body: `{ "value": <rating> }` (Rating must be between 0.5 and 10).
  - Query Params: `api_key`: Required.

- **DELETE `/movie/:movieId/rating`**
  - Delete a movie rating.
  - Headers: `Content-Type: application/json`
  - Query Params: `api_key`: Required.

### Search

- **GET `/search/movie`**
  - Search for movies by title or overview.
  - Query Params:
    - `query`: Search term.
    - `api_key`: Required.

- **GET `/search/person`**
  - Search for people by name.
  - Query Params:
    - `query`: Search term.
    - `api_key`: Required.
