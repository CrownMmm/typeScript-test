"use strict";
// 通过类型断言的方式进行保护
function trainAnimal(animal) {
    if (animal.fly) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
//  in 语法做类型保护
function trainAnimalSecond(animal) {
    if ('sing' in animal) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
// type of 语法做类型保护
function add(first, second) {
    if (typeof first === 'string' || typeof second === 'string') {
        return "" + first + second;
    }
    return first + second;
}
// 使用instanceof 语法做类型保护（使用class定义数据解构）
var NumberObj = /** @class */ (function () {
    function NumberObj(count) {
        this.count = count;
    }
    return NumberObj;
}());
function addSecond(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
