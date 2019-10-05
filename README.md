# emboldened

> A full-stack project for a server side rendering website.

### Stack

- [React](https://github.com/facebook/react)
- [NextJS + Custom Express](https://github.com/zeit/next.js/)
- [Express](https://github.com/expressjs/express)
- [NodeJS](https://github.com/nodejs/node)
- [Postgres](https://www.postgresql.org/)
- [Knex](https://github.com/tgriesser/knex)
- [Docker](https://docs.docker.com/)

### Wireframe

https://www.figma.com/file/USa407muyoA0Fz4X0hdSMq/Wireframe?node-id=0%3A1

## Setup

### Run server (without Docker)

Pre-requisites:

- Node.js(https://nodejs.org/en/download/)

`npm install`  
`npm run dev`

### Docker

Pre-requisites:

- Docker for Desktop(https://www.docker.com/products/docker-desktop); or
- Docker toolbox(https://docs.docker.com/toolbox/overview/)

Run the following `docker-compose` commands in the root of the project:

- `docker-compose build` builds the server application
- `docker-compose up` brings up the services and runs the application

The above commands bring up docker containers where the server application (React and Express) and database (Postgres) run in development mode using nodemon (auto-restart on file change).

[./docker-compose.yaml](./docker-compose.yaml) maps the server port to `localhost:3000` and Postgres database is exposed on `localhost:5432`. The connection string is `postgres://user:pass@localhost:5432/db` (username, password and database name are defined in [./docker-compose.yaml](./docker-compose.yaml)).

## Database Setup & Management

The project uses Postgres with the Node Postgres driver (pg on npm). For persistent data, create an external docker volume:

- `docker volume create --name=pgdata`

[./docker-compose.yml](./docker-compose.yml) mounts the volume to database container.

### Migrations

Knex, SQL query builder for Node.js, is used to connect server to Postgres db and to setup the database. To run migrations using npm scripts in the [./package.json](./package.json):

1.  Run a bash instance inside the `app` container: `docker-compose run app bash`
2.  Followed by: `npm run migrate`
3.  To rollback the migrations, run `./node_modules/.bin/knex --knexfile ./api/knexfile.js migrate:rollback` inside the bash instance

### Database Management: pgAdmin

pgAdmin(https://www.pgadmin.org/download/) is an Open Source administration and management tool for the PostgreSQL database. It includes a graphical administration interface, an SQL query tool, a procedural code debugger and much more.

Create server connection in pgAdmin on `localhost` port `5432`, username, password and database name are defined in [./docker-compose.yaml](./docker-compose.yaml) to manage the database.
