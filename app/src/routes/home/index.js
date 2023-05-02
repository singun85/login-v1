"use strict";

//모듈
const express = require("express")
const router = express.Router();

const ctrl = require("./home.ctrl"); //home.ctrl.js 의 hello,login 값을 가져와

router.get("/", ctrl.output.home); //home.ctrl.js 에 있는 hello 를 불러와
router.get("/login", ctrl.output.login);//home.ctrl.js 에 있는 login 을 불러와
router.post("/login", ctrl.process.login);


module.exports = router; //중요! 각 js 파일에 모듈은 exports 해줘야 다른 경로에서 사용가능!