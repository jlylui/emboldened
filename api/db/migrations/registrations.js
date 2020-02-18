exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE registrations(
      id SERIAL PRIMARY KEY NOT NULL,
      first VARCHAR(100),
      last VARCHAR(100),
      email TEXT NOT NULL,
      country_code VARCHAR(5),
      phone VARCHAR(100),
      conference TEXT[] NOT NULL,
      heard_from TEXT[] NOT NULL,
      message TEXT,
      created_at TIMESTAMP
    )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE registrations`;
  return knex.raw(dropQuery);
};
