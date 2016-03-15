// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'twitchersapp'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pq',
    connection: process.env.DATABASE_URL + '?ssl= true',
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
