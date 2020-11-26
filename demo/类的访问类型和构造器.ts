// private protected public 访问类型
// public 允许我在类的内外调用
// private 允许在类内使用
// protected 允许在类内和继承的子类中使用
// class Father {
//   public name: string;
//   sayHi() {
//     this.name;
//     console.log('hi');
//   }
// }

// class Son extends Father {
//   public sayBye() {
//     this.name;
//   }
// }

// const father = new Father();
// father.name = 'ming';

// console.log(father.name);
// father.sayHi();

// constructor
class Person3 {
  // public name: string;
  constructor(public name: string) {
    // this.name = name;
  }
}
const person3 = new Person3('ming');
console.log(person3.name);
