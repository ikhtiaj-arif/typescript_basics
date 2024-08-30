let final:number[] = [];
function compare(arr1: number[], arr2: number[]) {

   return arr1.filter(el => arr2.includes(el))
  console.log(final);

}

console.log(compare([1, 2, 3, 4, 5, 6], [2,4, 3, 5, 8]))
