const age:number = 22;

const isAdult = age >= 18 ? "adult": "Non Adult"

console.log(isAdult);

//nullish coalescing operator
//null and undefined

const isAuthenticUser = undefined;
const userName = isAuthenticUser ?? "Guest";
console.log(userName);