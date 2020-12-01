// getter and setter
// class Person4 {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + 'zhang';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person4 = new Person4('ming');
// person4.name;

// 单例模式
class Single {
  // 作为私有属性仅在类内调用 并挂在到类上
  private static instance: Single;
  // 私有的 构造器 禁止外部实例化
  private constructor(public name: string) {}

  // static 把这个方法挂在类上 而不是实例上
  // 执行时先判断有没有instance 没有的话直接返回私有属性创建Single
  // 否则直接返回instance 从而实现单例模式
  static getInstance() {
    if (!this.instance) {
      this.instance = new Single('ming');
    }
    return this.instance;
  }
}

const test1 = Single.getInstance();
const test2 = Single.getInstance();
