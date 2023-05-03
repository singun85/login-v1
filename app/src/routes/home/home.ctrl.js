"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index"); //router 에 입력된 콜백 함수 render경로를 실행해.
    },
    login: (req,res) => { //(요청)도메인에 /login 요청이  들어왔을때
        res.render("home/login"); //(응답)router 에 입력된 콜백 함수 render경로를 실행해.
    },
    register: (req,res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};
module.exports ={ //중요! 각 js 파일에 모듈은 exports 해줘야 다른 경로에서 사용가능!
    output,
    process,
}