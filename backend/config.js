const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.DB_DATABASE,
      connectTimeout: 60000
    },
    listPerPage: 10,
};

module.exports = config;
