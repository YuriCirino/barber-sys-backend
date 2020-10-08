const knex = require("../config/db");
module.exports = {
  async getProviders(req, res) {
        const providers = await knex('providers')
        return res.json(providers)
  },
  async getProvidersById(req, res) {
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
