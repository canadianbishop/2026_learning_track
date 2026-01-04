var users;
(function (users) {
    users[users["adimin"] = 0] = "adimin";
    users[users["user"] = 1] = "user";
    users[users["client"] = 2] = "client";
})(users || (users = {}));
var firstUser = users.adimin;
console.log(firstUser);
