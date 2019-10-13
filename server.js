const express = require("express");

// use process.env variables to keep private variables,
require("dotenv").config();

// Next.js
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Express Middleware
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const bodyParser = require("body-parser"); // turns response into usable format
const cors = require("cors"); // allows/disallows cross-site communication
const morgan = require("morgan"); // logs requests

// Backend api
const api = require("./api");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(helmet());
    server.use(cors());
    server.use(bodyParser.json());
    server.use(morgan("short")); // use 'short', 'tiny' or 'combined'

    api(server);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
