require('dotenv').config()
const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex