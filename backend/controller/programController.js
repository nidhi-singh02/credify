const program = require("../services/program")

exports.createProgram = async (req, res, next) => {
  console.log(req.body)
  let { username, name, startdate, enddate, place, credentials } = req.body
  // TODO: let the program manager use this portal to
  // generate a new schema for a new program
  let [id, created] = await program.create(username, name, startdate, enddate, place, credentials)
  console.log(id, created)
  if (created == true) {
    res.status(200).json({ program: name, created: id, message : "Program created successfully"})
  } else {
    res.status(400).json("program could not be created")
  }
};

exports.createSchema = async (req, res, next) => {
  console.log(req.body)
  let { username, structure } = req.body
  // TODO: create the schema
  let [stored, created] = await program.registerschema(username, structure)
  if (created == true) {
    res.status(200).json({"created": stored, message: "schema created"})
  } else {
    res.status(400).json("schema creation failed")
  }
}

exports.listallSchemas = async (req, res, next) => {
  console.log("requested all the schemas")
  let [result, created] = await program.listschemas()
  if (created == true) {
    res.status(200).json(result)
  } else {
    res.status(400).json("unable to query programs")
  }
}

exports.listPrograms = async (req, res, next) => {
  console.log("requested all the programs")
  let [result, created] = await program.listall()
  if (created == true) {
    res.status(200).json(result)
  } else {
    res.status(400).json("unable to query programs")
  }
};
