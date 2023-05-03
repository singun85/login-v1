"use strict";

class UserStorage {
    static #users = {
        id: ["cokaking", "singun", "pppip"],
        psword: ["1234", "12345", "123456"],
        name: ["환수","주은","우솝"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;