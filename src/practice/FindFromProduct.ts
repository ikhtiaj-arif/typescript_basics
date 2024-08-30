interface IProduct {
  id: string;
  name: string;
  price: number;
  category: string;
}

const product1: IProduct = {
  id: "123f",
  name: "Banana",
  price: 12,
  category: "Fruit",
};
const product2: IProduct = {
  id: "123f",
  name: "Mango",
  price: 20,
  category: "Fruit",
};
const product3: IProduct = {
  id: "123f",
  name: "Headphone",
  price: 20,
  category: "Electronic",
};
const product4: IProduct = {
  id: "123f",
  name: "Speaker",
  price: 20,
  category: "Electronic",
};

const listProduct = [product1, product2,product3, product4]

// console.log(listProduct);

type Criterion<T> = {
    key: keyof T;
    value:any
}

function findByValue <T>(item:T[], criterion: Criterion<T>): T[] {
    const {key, value} = criterion;

return item.filter(i => i[key] === value)
}

console.log(findByValue(listProduct, {key: "category", value: "Fruit"}));