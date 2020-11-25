// type annitation 类型注解,我们告诉ts变量是什么类型
// type inflete 类型推断,Ts会自动尝试分析变量类型
// 如果ts 能够自动分析变量类型，我们就不需要做了
// 如果ts 无法分析，我们就要使用类型注解

// let count: number;
// count = 123;

// let countInference = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;

function getTotal(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const total = getTotal(1, 2);

const obj = {
  name: 'dell',
  age: 18,
};
