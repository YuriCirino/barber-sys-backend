require('dotenv').config()
const express =  require('express')
const knex = require('./config/db')
const db = require('./config/db')
const routes = require('./config/routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const port  = process.env.PORT;

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(port,()=>console.log(`Listening at http://localhost:${port}`))


