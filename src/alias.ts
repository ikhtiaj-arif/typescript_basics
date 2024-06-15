type userType = {
  name: string;
  isMarried: boolean;
  age: number;
  wife?: string;
};

const user22:userType = {
    name: "aaa",
    age: 32,
    isMarried: true,
    wife: "ee"
}
const user23:userType = {
    name: "aaa",
    age: 12,
    isMarried: false,
   
}

//without alias type declared

const user11: {
  name: string;
  isMarried: boolean;
  age: number;
  wife?: string;
} = {
  name: "aaa",
  age: 32,
  isMarried: false,
};

const user12: {
  name: string;
  isMarried: boolean;
  age: number;
  wife?: string;
} = {
  name: "bb",
  age: 22,
  isMarried: true,
};
