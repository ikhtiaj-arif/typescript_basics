class Person {
  takeNap() {
    console.log("xxxxxxxx");
  }
}

class Studentt extends Person {
  takeNap() {
    console.log("yyyyyy");
  }
}

class Dev extends Person {
  takeNap() {
    console.log("DDDDDDDD");
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Studentt();
const person3 = new Dev();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea():number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rect extends Shape{
    height:number;
    width: number
    constructor(height:number, width:number){
        super()
        this.height = height
        this.width = width
    }
    getArea():number{
        return this.width *  this.height
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rect(10, 12))