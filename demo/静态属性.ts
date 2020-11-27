// getter and setter
class Person4 {
  constructor(private _name: string) {}
  get name() {
    return this._name + 'zhang';
  }
  set name(name: string) {
    const realName = name.split(' ')[0];
    this._name = realName;
  }
}

const person4 = new Person4('ming');
person4.name;
