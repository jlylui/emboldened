exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE partners(
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(100),
        email TEXT UNIQUE NOT NULL,
        organisation VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP
      )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE partners`;
  return knex.raw(dropQuery);
};
