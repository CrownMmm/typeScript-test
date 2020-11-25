// const numberArr = [1, 2, 3];
// const numberArr:number[] = [1, 2, 3];

// 数组
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['1', 'a', 'ss'];
const undefinedArr: undefined[] = [undefined, undefined];

// 类型别名  对象数组 type alias
type User = { name: string; age: number };

const objectArr: User[] = [
  {
    name: 'ming',
    age: 22,
  },
];

class Teacher {
  name: string;
  age: number;
}
// 当class 数据解构与起保持一致时可用
const objectArr1: Teacher[] = [
  {
    name: 'ming',
    age: 22,
  },
];

// 元组 tuple  强行规定数组长度，数组内每一项的内容为固定的类型
const teacherInfo: [string, string, number] = ['ming', 'male', 12];

// csv
const personlist: [string, string, number][] = [
  ['ss', 'female', 25],
  ['ming', 'male', 18],
  ['hh', 'female', 38],
];
