type Product<P, Pr, Q> = [P, Pr, Q];

const products: Product<string, number, number>[] = [
  ["Cup", 2, 30],
  ["Plate", 2, 10],
  ["Chare", 2, 6],
  ["Spoon", 2, 100],
];


// function calculatePrice<T extends any[]>(arg: T[]): T[] {
//   const final:number[] = []
//    arg.map((item: T) => {
//       const price = item[2]; 
//       const q = item[1]; 
//       const cost = price*q
//       console.log(price, q); 

//       final.push(cost);
//   });
//   return final;
// }


function calculatePricee<T extends [any, number, number]>(arg: T[]): number[] {
  const final: number[] = [];

  arg.map((item: T) => {
      const price = item[2];
      const q = item[1];
      const cost = price * q;
      console.log(price, q);

      // Push just the calculated cost to `final`
      final.push(cost);
  });
  console.log(final);
  return final;
}

calculatePricee(products);
