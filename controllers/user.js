const knex = require("../config/db");
module.exports = {
  async getUsers(req, res) {
    const results = await knex("users");
    return res.json(results);
  },
  async postUsers(req, res) {
    const { name, email, description, password, img_url, } = req.body;
    await knex("users").insert({
      name,
      email,
      description,
      password,
      img_url:"https://picsum.photos/400",
      admin:false
    }).then((result)=> res.json({sucess:true, message:"ok"})).catch(err => {console.log(err);res.json({sucess:false,message:"erro"})});
     
  },
};
