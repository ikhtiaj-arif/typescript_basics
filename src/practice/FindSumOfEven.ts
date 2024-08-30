const arrOfNum: number[] = [1, 2, 3, 4, 5, 6,99, 10];

function sumOfEven<T extends number>(arg: T[]):number {
    let sum = 0; 
  arg.forEach((item: T) => {
    if(item % 2 === 0){
        sum += item
    }
  });
  return sum;
}

console.log(sumOfEven(arrOfNum));
