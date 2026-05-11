export {};
let obj: {
  name: string;
  phoneN0: number;
  address: {
    house: number;
    street: number;
  };
} = {
  name: "Ahmad",
  phoneN0: 24,
  address: {
    house: 24,
    street: 25,
  },
};
console.log(obj.address);

type Obj = {
  name: string;
  password: number;
  isLoggin?: boolean;
};
interface Obj1 {
  name: string;
  password: number;
  isLoggin?: boolean;
}

interface Obj4 extends Obj1 {
  email: string;
}

const obj6: Obj4 = {
  name: "Ahmad",
  password: 12344,
  email: "nome26111@gmail.com",
};

const obj1: Obj = {
  name: "ahmda",
  password: 123,
  isLoggin: true,
};
const obj2: Obj = {
  name: "aman",
  password: 13323,
};

const obj3: Obj1 = {
  name: "ahmda",
  password: 123,
  isLoggin: true,
};
