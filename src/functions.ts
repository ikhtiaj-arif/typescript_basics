//normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 4];

const newArr = arr.map((item: number) => item * item);

const objPer: {
  name: string;
  balance: number;
  // addBalance(mny:number):number
  addBalance(mny: number): void;
} = {
  name: "mzz",
  balance: 5,
  addBalance(mny: number) {
    // return this.balance+mny
    console.log(`total money is ${this.balance + mny}`);
  },
};

const myFriends = ["rok", "adam", "joney"];
const newFriends = ["monika", "sam", "rosy"];

//spread operator
myFriends.push(...newFriends);
// console.log(myFriends);

//rest operator
const greetFriends = (...friends: string[]): void => {
  //   console.log(friends);
//   friends.forEach((friend) => console.log(`hi ${friend},`));
};
greetFriends("jon", "mon", "don");

//array and object destructuring

const oneFriend = {
    fullName: "tomato apple",
    age: 23
}

const {fullName} = oneFriend