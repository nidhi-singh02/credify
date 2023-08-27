const db = require('./db');
const helper = require('../helper');

async function create(user) {
  let msg = false;
  try {
  const result = await db.query(
    `INSERT into USER (username, password, did, persona) values ('${user.username}','${user.password}','${user.did}','${user.persona}')`
  );
  if (result.affectedRows) {
    msg = true;
  }
  } catch {
    return msg
  }
  return msg
}

async function list() {
    const rows = await db.query(
        `SELECT username, did, persona FROM USER`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
  create,
  list
}
