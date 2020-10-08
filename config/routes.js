const express = require("express");
const routes = express.Router();
const user = require('../controllers/user')
const provider = require('../controllers/provider')

routes.get("/users", user.getUsers);
routes.post('/users',user.postUsers);
routes.get("/providers",provider.getProviders)
module.exports = routes;
