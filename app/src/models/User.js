"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login(req, res) {
    const client = this.body
    // console.log(client);
    const { id, pw } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && pw === client.pw) {
        req.session.is_logined = true;
        req.session.nickname = client.id;
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

}

module.exports = User;