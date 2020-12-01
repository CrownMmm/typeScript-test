// readonly 限制public属性只读

// class Only {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// get name() {
//   return this._name;
// }
// }

// const only = new Only('ming');
// only.name = 'mingming';
// console.log(only.name);

// 许多类共用一个方法时 可以提取出一个抽象类 也可以使用具体的属性和方法
// 抽象类 只能被继承不能被实例化
// abstract class Geom {
//   width: number;
//   radius: number;
//   getType() {
//     return 'hello';
//   }
//   // 方法也可以实现抽象 子类继承时必须自己实现抽象方法
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square {}

// class Triangle {}

interface Job {
  name: string;
}

interface Coder extends Job {
  codeAge: number;
}

interface Student extends Job {
  age: number;
}
const coder = {
  name: 'ming',
  codeAge: 1,
};

const student = {
  name: 'zhang',
  age: 23,
};

const getUserInfo = (user: Job) => {
  console.log(user.name);
};

getUserInfo(coder);
getUserInfo(student);
