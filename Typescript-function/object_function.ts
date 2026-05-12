export {};
interface Product {
  name: string;
  id: number;
  data_of_birtt: number;
}

function showProduct({ name, id, data_of_birtt }: Product) {
  console.log(id);
  console.log(name);
}

// function showProduct(prodcut: Product) {
//   console.log(prodcut.id);
//   console.log(prodcut.name);
// }

showProduct({
  name: "Ahmad",
  id: 12323,
  data_of_birtt: 1323,
});

type Product2 = {
  prduct_name: string;
  product_id: number;
  product_type: string;
};

type showthisProduct = (product: Product2) => void;
