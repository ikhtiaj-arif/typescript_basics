type User={
    name:string;
    age:number;
};

interface IUser{
    name: string;
    age:number;
}
//interface can be extended
interface IextendUser extends IUser {
role: string
}

// const userWithAliasType: User = {
// name: "kksfd",
// age:213
// }

const userWithInterfase: IUser = {
    name: "Interfase",
    age: 12
}
const userWithInterfaseExtend: IextendUser = {
    name: "Interfase",
    age: 12,
    role: "sdf"
}


userWithInterfaseExtend