exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE volunteers(
      id SERIAL PRIMARY KEY NOT NULL,
      first VARCHAR(100),
      last VARCHAR(100),
      email TEXT UNIQUE NOT NULL,
      country_code VARCHAR(5),
      phone VARCHAR(100),
      conference TEXT[] NOT NULL,
      church VARCHAR(200),
      available TEXT[],
      interest TEXT[],
      skill TEXT[],
      message TEXT,
      created_at TIMESTAMP
    )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE volunteers`;
  return knex.raw(dropQuery);
};
