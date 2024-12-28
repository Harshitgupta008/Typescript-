interface User {
    name: string;
    password: number;
}

const username: User = { name: "harshit", password: 345 };

console.log(username.password);

const countArr = (numbers:number[]) => {

    return numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);

}

console.log(countArr([2,3,4,5]));
