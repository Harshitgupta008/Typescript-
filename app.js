var username = { name: "harshit", password: 345 };
console.log(username.password);
var countArr = function (numbers) {
    return numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);
};
console.log(countArr([2, 3, 4, 5]));
var user = {
    username: "Harshitgupta",
    password: 9345,
};
var UserName = function (UserData) {
    return UserData.username;
};
var UserName2 = function (UserData) {
    UserData.username = "Harshit gupta";
    return UserData;
};
console.log(UserName(user));
console.log(UserName2(user));
