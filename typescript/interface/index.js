"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker = {
    id: 37,
    email: 'bish@gmail.com',
    password: 'fuckme',
    welcome: function () {
        return 'fuck mea';
    },
    createcoupon: function () {
        return 1234;
    }
};
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["STAFF"] = "STAFF";
    Roles["CLIENT"] = "CLIENT";
})(Roles || (Roles = {}));
;
;
var users = [
    {
        id: '123',
        name: 'bishop',
        role: Roles.ADMIN,
        email: 'bish@gmail.com',
        isActive: true
    },
    {
        id: '124',
        name: 'clan',
        role: Roles.STAFF,
        email: 'clam.com',
        isActive: false
    },
    {
        id: '124',
        name: 'clan',
        role: Roles.CLIENT,
        isActive: true
    },
];
function printUserRole(user) {
    user.forEach(function (user) {
        console.log("".concat(user.name, " (").concat(user.role, ") is ").concat(user.isActive));
    });
}
console.log(printUserRole(users));
