class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `the person named ${this.name} will sleep ${hours}`;
  }
}

class Student extends Parent {
  roll: string;

  constructor(name: string, age: number, address: string, roll: string) {
    super(name, age, address);
    this.roll = roll
  }

  // makeSleep(hours:number):string {
  //     return `the person named ${this.name} will sleep ${hours}`
  // }
}

const student1 = new Student("babul", 12, "dakadbd", "122");
student1.makeSleep(8)

class Teacher extends Parent {
//   name: string;
//   age: number;
//   address: string;
  designation: string; 

  constructor(name: string, age: number, address: string, designation: string) {
  super(name, age,address)
 
    this.designation = designation;
  }
//   makeSleep(hours: number): string {
//     return `the person named ${this.name} will sleep ${hours}`;
//   }

  takeClasses(classCount: number): string {
    return `this ${this.name} will take ${classCount} class`;
  }
}
