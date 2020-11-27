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
// class Person3 {
//   // 传统写法
//   // public name: string;
//   // constructor(public name: string) {
//   // this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {

//   }
// }
// const person3 = new Person3('ming');
// console.log(person3.name);

class Person3 {
  constructor(public name: string) {}
}
class Person33 extends Person3 {
  constructor(public age: number) {
    super('ming');
  }
}

const person33 = new Person33(28);
console.log(person33.age, person33.name);
