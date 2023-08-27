  function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
  }

  function emptyOrOne(rows) {
    if (!rows) {
        return 1;
    }
    return rows;
  }
  
  module.exports = {
    emptyOrRows,
    emptyOrOne
  }
