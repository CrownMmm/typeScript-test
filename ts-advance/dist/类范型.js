"use strict";
// interface Item {
//   name: string;
// }
// class DataManager<T extends number | string> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }
// const data = new DataManager<number>([1]);
// data.getItem(0);
// const data = new DataManager([
//   {
//     name: 'dell',
//   },
// ]);
// interface Test {
//   name: string;
// }
// const data = new DataManager<string>([]);
// 用范型作为一个具体的类型注解
function hello(params) {
    return params;
}
var func = hello;
