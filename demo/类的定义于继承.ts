class One {
  name = 'ming';
  getName() {
    return this.name;
  }
}
// 一个类把父类的方法覆盖掉后 可以用super重写这个方法

class Two extends One {
  getTwoName() {
    return 'ming';
  }
  getName() {
    return super.getName() + 'zhang';
    // return 'zhang';
  }
}

const person2 = new Two();
console.log(person2.getName());
console.log(person2.getTwoName());
