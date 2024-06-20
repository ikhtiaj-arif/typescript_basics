// //mocking

// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Data fetch failed");
//     }
//   });
// };

// const getPromiseData = async ():Promise<string> => {
//     const data = await makePromise()
//   return data
// }

// const result11 = makePromise()

// interface dataType{
//     data:string
// }
// // type dataType={
// //     data:string
// // }


// const makePromise2 = (): Promise<dataType> => {
//     return new Promise<dataType>((resolve, reject) => {
//       const data: dataType = {data:"Data fetched"};
//       if (data) {
//         resolve(data);
//       } else {
//         reject("Data fetch failed");
//       }
//     });
//   };

//   const getPromiseData2 = async ():Promise<dataType> => {
//     const data = await makePromise2()
//   return data
// }

// const result112 = makePromise2()

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
// const getTodo = async(): Promise<ITodo>=> {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//         return await res.json()
    
// }

// const getTodoData = async():Promise<void> => {
//     const result = await getTodo();
//     console.log(result);
// }

// getTodoData()