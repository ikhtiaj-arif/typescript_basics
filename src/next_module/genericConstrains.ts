//arrow function
const createArray = <T extends {name:string, age:number}>(info: T) => {
    const dd = "dsf"
    const newData = {...info, dd}
    return newData;
  };

const myInfo = {
    name: "sdf",
    age: 12,
    ss:null,
    dd:true
}

const res = createArray(myInfo)