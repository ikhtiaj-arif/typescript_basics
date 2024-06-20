


interface xxxInterface <T> {
    name: string,
    salary: T
}

const slsl1: xxxInterface<boolean> ={
    name: "fsdf",
    salary: true
}
const slsl2: xxxInterface<number> ={
    name: "fsdf",
    salary: 123
}
const slsl3: xxxInterface<{base:string, amount:number}> ={
    name: "fsdf",
    salary: {
        base:"sdfsdf",
        amount: 123134
    }
}