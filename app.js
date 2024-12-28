var username = { name: "harshit", password: 345 };

console.log(username.password);

var countArr = function (numbers) {
    return numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);
};
console.log(countArr([2, 3, 4, 5]));
