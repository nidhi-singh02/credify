const user = require("../services/user")

exports.createDID = async (req, res, next) => {
    console.log(req.body)
    let { username, password, did, persona } = req.body
    console.log("data:",username, password, did, persona)
    // TODO: ideally create a wallet here.
    let created;
    try{
     created = await user.create({"username": username, "password": password, "did": did, "persona": persona})
    }catch(err){
      console.log("Error",err)
    }
    if (created == true) {
      res.status(200).json({ user : username , message : "DID created successfully"})
    } else {
      res.status(400).json({ message: "very bad request" })
    }
};

exports.listDIDs = async (req, res, next) => {
  console.log("listing users")
  res.status(200).json(await user.list())
}
