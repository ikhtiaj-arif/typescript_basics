



// const rollNumbers: Array<number> = [1, 2, 45, 56, 3];
// const rollNumbers2: Array<string> = ["12", "12", "34"];
// const rollNumbers3: Array<boolean> = [true, false];

type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [1, 2, 45, 56, 3];
const rollNumbers2: GenericArray<string> = ["12", "12", "34"];
const rollNumbers3: GenericArray<boolean> = [true, false];



type nameRollTYp = { name: string; roll: number }

const nameAndRoll: GenericArray<nameRollTYp> = [
  { name: "sdf", roll: 123 }, { name: "sdf", roll: 123 },
];
