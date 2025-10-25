# Pug Todo App

A simple, server-rendered Todo application built with Node.js, Express and Pug (formerly Jade). This project demonstrates a minimal CRUD Todo list with server-side templating using Pug and a lightweight Express backend.

## Features

- Create, read, update and delete todos (CRUD)
- Server-rendered UI using Pug templates
- Minimal dependencies, easy to run locally
- Simple styling (plain CSS) suitable for learning and extension

## Tech stack

- Node.js (>= 14)
- Express
- Pug (templating engine)
- Optional: nodemon for development

## Prerequisites

- Node.js and npm installed: https://nodejs.org/
- (Optional) git to clone the repository

## Getting started

1. Clone the repo
   git clone https://github.com/rjdiips/Pug-Todo-App.git
   cd Pug-Todo-App

2. Install dependencies
   npm install

3. Run in development
   npm run dev
   - If `npm run dev` is not defined, use:
     npx nodemon ./bin/www
   or
     node ./bin/www

4. Open the app in your browser
   http://localhost:3000
   - If the app uses a different port, check console output or the `PORT` environment variable.

## Typical project structure

- /bin/www — server startup script (Express default)
- /routes — Express route handlers
- /views — Pug templates
- /public — static assets (CSS, client JS, images)
- app.js — Express application setup

(Actual structure may vary — inspect the repo for exact layout.)

## Usage

- Add a new todo using the form on the main page.
- Edit or mark todos as completed (if the UI provides edit/complete controls).
- Delete a todo to remove it from the list.

## Configuration

- PORT: set via environment variable (defaults to 3000 if not provided)
- No database: this app may use an in-memory store or simple JSON file for persistence depending on implementation. For production use, integrate a proper database (SQLite, MongoDB, Postgres, etc.).

## Development tips

- Use nodemon for automatic restarts during development:
  npm install --save-dev nodemon
  Add a script in package.json:
  "dev": "nodemon ./bin/www"

- Add ESLint / Prettier for consistent code style.

## Tests

No tests included by default. Add a test framework (Jest, Mocha) and write unit/integration tests for routes and helper functions as needed.

## Deployment

- For simple deployments, push to a platform that supports Node.js (Heroku, Render, Railway, Vercel with serverless adapters, etc.).
- Ensure environment variables (PORT, NODE_ENV, etc.) are set correctly.
- Add a process manager (PM2) for production if running on your own server.

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch: git checkout -b feature/describe
3. Make changes and run locally
4. Open a pull request describing your changes

Please include tests and update the README when adding features.

## Troubleshooting

- "Port already in use": change PORT environment variable or stop the process using the port.
- "Cannot find module": run npm install to ensure dependencies are installed.
- If views fail to render, check that Pug is installed and app.js configures view engine correctly:
  app.set('view engine', 'pug')

## Roadmap / Ideas

- Persist todos to a database (MongoDB / SQLite)
- Add user authentication and per-user todo lists
- Add due dates, priorities and filtering
- Add client-side interaction (AJAX) for a single-page feel
