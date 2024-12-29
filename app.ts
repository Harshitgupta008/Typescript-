interface Users {
    name: string;
    password: number;
}

const username: Users = { name: "harshit", password: 345 };

console.log(username.password);

const countArr = (numbers: number[]) => {

    return numbers.reduce((acc, num) => {
        return acc + num;
    }, 0);

}

console.log(countArr([2, 3, 4, 5]));


// type alias (we can create our own custom type)

type User = {
    username: string,
    password: number
    address?: string  // optional type = ?, address|undifine
}

const user: User = {
    username: "Harshitgupta",
    password: 9345,
}

const UserName = (UserData: User): string => {  // this string are return type --> we can give return type (generic, number, string object, []) etc 
    return UserData.username;

}
const UserName2 = (UserData: User): User => {  
    UserData.username = "Harshit gupta"; 
    return UserData;

}
console.log(UserName(user));
console.log(UserName2(user));

