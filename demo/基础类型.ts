//  基础类型  null, undefined, symbol, boolean, void
const counts: number = 123;
const myname: string = 'ming';
//  对象类型
class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'dell',
  age: 18,
};

const numbers1: number[] = [1, 2, 3];
const numbers2: string[] = ['1', '2', '3'];
const numbers3: boolean[] = [true, false, true];

const dell: Person = new Person();

const getNumber: () => number = () => {
  return 123;
};

const getBoolean: () => boolean = () => {
  return true;
};
