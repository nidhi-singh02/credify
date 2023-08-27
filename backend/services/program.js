const db = require('./db');

async function registerschema(schema) {
  let msg = false;
  try {
  const result = await db.query(
    `INSERT into SCHEMAS_USE (username, structure) values ('${schema.username}','${schema.structure}')`
  );
  if (result.affectedRows) {
    msg = true;
  }
  return [result, msg]
  } catch {
    return [[], msg]
  }
}

async function create(username, name, startdate, enddate, place, credentials) {
    try {
    const result = await db.query(
      `INSERT into PROGRAM (username, name, startdate, enddate, place) values ('${username}','${name}','${startdate}','${enddate}','${place}')`
    );
    if (!result.affectedRows) {
        throw new Error("something wrong")
    }
    // time to associate schemas to the program
    console.log(`${credentials}`)
    for (i=0; i<`${credentials}`.length; i++) {
    const rows = await db.query(
        `INSERT into PROGRAM_SCHEMAS (program_id, schema_id) VALUES ('${result.insertId}','${credentials[i]}')`
    )
    if (!rows.affectedRows) {
        throw new Error("something wrong")
    }
    }
    return [result, true]
    } catch (e) {
      return [e, false]
    }
}

module.exports = {
  registerschema,
  create
}  
