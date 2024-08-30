// type AlphaNumeric = string | number;
// function add(param: AlphaNumeric, param2: AlphaNumeric) {
//   if (typeof param === "number" && typeof param2 === "number") {
//     return param + param2;
//   } else {
//    return param.toString() + param2.toString();
//   }
// }

// //in guard

// type NormalUser = {
//   name: string;
// };

// type AdminUser = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUser | AdminUser) {
//   if ("role" in user) {
//     return `Admin ${user.role}`;
//   } else {
//     return `normal user`;
//   }
// }

// const normalUser1: NormalUser = { name: "lalu" };
// const adminUser1: AdminUser = { name: "lalu22", role: "admin" };

// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// //instance guard

// class Animal {
//   name: string;
//   species: string;

//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }

//   makeSound() {
//     console.log("asdf afdasd");
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log("bark");
//   }
// }
// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMew() {
//     console.log("mew");
//   }
// }


// function isDog(animal:Animal):animal is Dog{
//   return animal instanceof Dog
// }

// function getAnimal(animal: Animal){
//     if(isDog(animal)){
//       animal.makeBark()
//     }
//     else if(animal instanceof Cat){
//       animal.makeMew()
//     }
//     else{
//       animal.makeSound()
//     }
// }

// const animal11 = new Dog("Ger", "dog");
// const animal12 = new Cat("per", "cat");

// getAnimal(animal11)
