// interface 和type类似 可以接收额外属性

interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher1 extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string;
}
// type Person1 = {
//   name: string;
// };

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher1, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'hello';
  },
  teach() {
    return '123';
  },
};

getPersonName(person);
setPersonName(person, 'zhang');

// implements 应用接口
class User1 implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say1: SayHi = (word: string) => {
  return word;
};
