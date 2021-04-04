'use strict';

// 컨트롤러

const User = require("../../models/User");


const output = {
  home: (req, res) => {
    res.render("home/index", { data: req.session.nickname });
  },

  login: (req, res) => {
    res.render("home/login");
  },

  logout: (req, res) => {
    req.session.destroy((err) => {
      res.redirect("/login");
    })
  },

  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login(req, res);
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};


module.exports = {
  output,
  process
}