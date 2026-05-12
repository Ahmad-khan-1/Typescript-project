export {};

type Product = {
  name: string;
  id: number;
  data_of_birtt: number;
};

const productNo1: Product = {
  name: "ahmad",
  id: 13343,
  data_of_birtt: 22323,
};
type ProductFunction = (product: Product) => void;

//!we can write it as
// type Product = {
//   name: string;
//   id: number;
// };
//type ProductFunction = (product: Product) => void;

interface ProductType {
  name: string;
  id: number;
}

type Product2 = (product: ProductType) => void;

const getProduct: Product2 = (product) => {
  console.log(product.name);
};

const ProductOne: ProductType = {
  name: "ahjd",
  id: 1222,
};

//!instead of this we can write it as
//const productOne = {
// name: "Macbook",
// stock: 46,
// price: 999999,
// photo: "samplephotourl",

// };

getProduct(ProductOne);
