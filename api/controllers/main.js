const postRegistrationData = (req, res, db) => {
  const created_at = new Date();
  db("registrations")
    .insert({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      country_code: req.body.country_code,
      phone: req.body.phone,
      conference: req.body.conference,
      message: req.body.message,
      created_at
    })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ dbError: "db error", code: err.code, error: err.detail });
    });
};

const postContactData = (req, res, db) => {
  const created_at = new Date();
  db("contacts")
    .insert({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      country_code: req.body.country_code,
      phone: req.body.phone,
      message: req.body.message,
      created_at
    })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ dbError: "db error", code: err.code, error: err.detail });
    });
};
const postVolunteerData = (req, res, db) => {
  const created_at = new Date();
  db("volunteers")
    .insert({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      country_code: req.body.country_code,
      phone: req.body.phone,
      conference: req.body.conference,
      church: req.body.church,
      available: req.body.available,
      interest: req.body.interest,
      skill: req.body.skill,
      message: req.body.message,
      created_at
    })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ dbError: "db error", code: err.code, error: err.detail });
    });
};

const postPartnerData = (req, res, db) => {
  const created_at = new Date();
  db("partners")
    .insert({
      name: req.body.name,
      email: req.body.email,
      organisation: req.body.organisation,
      message: req.body.message,
      created_at
    })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ dbError: "db error", code: err.code, error: err.detail });
    });
};

module.exports = {
  postRegistrationData,
  postContactData,
  postVolunteerData,
  postPartnerData
};
