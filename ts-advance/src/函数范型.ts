// 范型 generic 泛指的类型 可以定义一个或者多个
// 可以进行类型推断

function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

function anotherJoin<T>(first: T, second: T): T {
  return first;
}

// 调用join方法时指定T范型具体为string类型
join<string, string>('1', '1');
join<number, number>(1, 1);
join(1, 1);
// Array<T> 等价 T[]
function map<T>(params: Array<T>) {
  return params;
}
map<string>(['123']);
