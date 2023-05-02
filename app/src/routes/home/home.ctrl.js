"use strict";



const output = {
    home: (req, res) => {
        res.render("home/index"); //router 에 입력된 콜백 함수 render경로를 실행해.
    },
    login: (req,res) => { //(요청)도메인에 /login 요청이  들어왔을때
        res.render("home/login"); //(응답)router 에 입력된 콜백 함수 render경로를 실행해.
    },
};

const users = {
    id: ["cokaking", "singun", "pppip"],
    psword: ["1234", "12345", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg:"로그인에 실패하였습니다.",
        });
    },
};
module.exports ={ //중요! 각 js 파일에 모듈은 exports 해줘야 다른 경로에서 사용가능!
    output,
    process,
}