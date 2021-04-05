'use strict';
// 라우터

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
const session = require('express-session');
const FileStore = require('session-file-store')(session);

router.use(session({
  secret: 'chkfxkfktm',
  resave: false,
  saveUninitialized: true,
  store: new FileStore(),
  cookie: {
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
  }
}));

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/logout", ctrl.output.logout)

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;
