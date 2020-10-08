// Update with your config settings.
require("dotenv").config()
const Path = require("path")
const { pathToFileURL } = require("url")
let dir = Path.resolve(__dirname, "..", "migrations").toString()
console.log(dir)

module.exports = {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: Path.resolve("./migrations"),
    },
    useNullAsDefault: true,
    seeds: {
      directory: Path.resolve("./seeds"),
    }
}
