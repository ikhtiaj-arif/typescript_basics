interface Personnn {
    name: string
    age: number
    email: string
}

const Personnn:Personnn[] = [
    { name: "tuni", age:23, email: "tuni@gmil.com" },
    { name: "runi", age:23, email: "runi@gmil.com" },
    { name: "funi", age:23, email: "funi@gmil.com" },
    { name: "guni", age:23, email: "guni@gmil.com" },
    { name: "rony", age:23, email: "rony@gmil.com" },
]

function findEmail(people: Personnn[], email:string): Personnn | null {
    const found = people.find(e => e.email === email)
    return found ?? null
}

console.log(findEmail(Personnn, "tuni@gmil.com"));