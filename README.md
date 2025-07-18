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

4. Set up database

  - Create a database instance on [Supabase](https://supabase.com/) (or other cloud-based database hosting platforms)
  - Retrieve the database URL & copy it
  - Create a `.env` file in the root directory with the following:
  
    ```
    DB_URL=<your_database_url>
    ```
    
  - Replace `<your_database_url>` with the database URL you just copied
  - Run `npm run setup-db` to setup the database

5. Set up your port

- Add a `PORT` key assigned to the port of you choice in your `.env` file (port 3000 is recommended)

```
PORT=<port-of-your-choice>
```

6. Trial run the server

- Run `npm run dev` to run the server in development mode
- Run `npm run start` or `npm start` to run the server in produciton mode 

### Running the application

1 . Navigate to the project directory

    - Navigate to the project with `cd country-api`

2. Run the server with Node.js

    - Run the server on node.js with `node index.js`

### Database Schema

`Country Table`

country_id: Primary Key
name: String, not null
capital: String, not null
population: Integer, not null