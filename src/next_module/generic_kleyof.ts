type personTyppe={
    name:string
    age: number
    address:string
}

type newType = 'name' | 'age' | 'address' //manual

const a: newType= "address"

type newTypeUsingKey = keyof personTyppe

const aa: newTypeUsingKey= "age" 