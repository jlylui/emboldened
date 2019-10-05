module.exports = app => {
  const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development
  const configuration = require("./knexfile")[environment]; // require environment's settings from knexfile

  const db = require("knex")(configuration);

  // Controllers - aka, the db queries
  const main = require("./controllers/main");

  app.get("/api", (req, res) => {
    return res.status(200).send({
      message: "Welcome"
    });
  });

  app.post("/api/contacts", (req, res) => main.postContactData(req, res, db));
  app.post("/api/volunteers", (req, res) =>
    main.postVolunteerData(req, res, db)
  );
  app.post("/api/partners", (req, res) => main.postPartnerData(req, res, db));
};
