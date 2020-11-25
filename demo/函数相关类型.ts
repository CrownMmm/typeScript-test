// function hello() {}
// const hello1 = function () {};
// const hello2 = () => {};

// function add(first: number, second: number): number {
//   return first + second;
// }

// const total1 = add(1, 2);

//void 函数返回值为空（无返回值）
// function sayHello(): void {
//   console.log('hello');
// }

//never 永远不会执行到最后
// function errorEmitter(): never {
//   // throw new Error();
//   while (true) {}
//   console.log(123);
// }

// 函数的参数解构后面要跟上类型注解
function add({ first, second }: { first: number; second: number }) {
  return first + second;
}

function getNumber1({ first }: { first: number }) {
  return first;
}

const total2 = add({ first: 1, second: 2 });
const count = getNumber1({ first: 1 });
