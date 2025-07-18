# Country API 

## Overview

A Country API that allows you to add, remove and view countries. 

## Getting Started

### Prerequisites

- Node.js
- NPM
- A cloud-based database hosting platform, such as Supabase 
  
### Installation

1. Clone the repository

    - Run `git clone https://github.com/yourusername/country-api.git` in the CLI of your choice

2. Navigate to the project directory

    - Navigate to the project with `cd country-api`

3. Install dependencies

    - Run `npm install` to install all dependencies for the project

4. Setup your database

  - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
  - Retrieve the database URL & copy it
  - Create a `.env` file in the root directory with the following:
  
    ```
    DB_URL=<your_database_url>
    ```
    
  - Replace `<your_database_url>` with the database URL you just copied
  - Run `npm run setup-db` to setup the database

5. Setup your port
- Add a `PORT` key assigned to the port of your choice in your `.env` file. 3000 is recommended for this project

```
PORT=<port-of-your-choice>
```

6. Run the server
- Run `npm run dev` to run the server in development mode
- Run `npm start` to run the server in production mode

## API Endpoints

All available API endpoints with their methods and descriptions.

### Base URL
`http://localhost:<port>/countries` (or your deployed URL)

### API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| GET    | /countries                | Retrieves all countries          |
| GET    | /countries/:name            | Retrieves a single country      |
| POST   | /countries                | Creates a new country           |
| DELETE | /countries/:name            | Deletes a country               |

## Get all countries

### Example Request

To retrieve all countries, you can use the following GET request:

`GET /countries`

`curl -X GET http://localhost:<port>/countries`

### Example Response

A successful response will return a JSON array of countries objects, similar to the following:
      
    ```json
    [
        {
          "id": 1,
          "name": "country1",
          "capital": "capital1",
          "population": 1,
          "languages": "language1",
          "fun_fact": "fact1",
          "map_image_url": "url1"
        },
        {
          "id": 2,
          "name": "country2",
          "capital": "capital2",
          "population": 2,
          "languages": "language2",
          "fun_fact": "fact2",
          "map_image_url": "url2"
        },
    ]
    ```