"use strict";

// express 모듈을 가져온다.
const express = require("express");
// body-parser 모듈을 가져온다.
const bodyparser = require("body-parser");
// express 앱을 생성한다.
const app = express();

// home 라우팅 모듈을 가져온다.
const home = require("./src/routes/home");

// 앱 세팅
// 뷰 파일이 위치할 폴더를 지정한다.
app.set("views", "./src/views");
// 뷰 엔진으로 ejs를 사용한다.
app.set("view engine", "ejs");
// 정적 파일(css, js, img 등)이 위치할 폴더를 지정한다.
app.use(express.static(`${__dirname}/src/public`));
// JSON 형태의 데이터를 받기 위해 body-parser를 사용한다.
app.use(bodyparser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결하기 위해 사용한다.
app.use(bodyparser.urlencoded({ extended: true }));

// 미들웨어를 등록한다.
app.use("/", home);

// 앱을 내보낸다.
module.exports = app;
