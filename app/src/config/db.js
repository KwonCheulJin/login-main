"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-server.cnavwlpkhfyu.ap-northeast-2.rds.amazonaws.com",
  user: "chel0001",
  password: "chkftm135)",
  database: "login_server"
});

db.connect();

module.exports = db;