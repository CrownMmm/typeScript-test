// 基础类型 boolean number string void undfined symbol null

// 当声明和赋值不再同一行的时候 typescript会直接将类型推断为 any 所以需要手动添加类型注解
let count2: number;
count2 = 123;

// 对象类型 {} Class function []
// 函数入参需要声明，返回值通常可以根据类型推断返回
const func = (str: string) => {
  return parseInt(str, 10);
};

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

const date = new Date();

//其他的
interface Person {
  name: 'string';
}
const rawData = '{"name":"ming"}';
const newData: Person = JSON.parse(rawData); //json.parse 返回any

// temp 为数字类型或字符串类型
let temp: number | string = 123;
temp = '456';
