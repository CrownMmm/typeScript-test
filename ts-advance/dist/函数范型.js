"use strict";
// 范型 generic 泛指的类型 可以定义一个或者多个
// 可以进行类型推断
function join(first, second) {
    return "" + first + second;
}
function anotherJoin(first, second) {
    return first;
}
// 调用join方法时指定T范型具体为string类型
join('1', '1');
join(1, 1);
join(1, 1);
// Array<T> 等价 T[]
function map(params) {
    return params;
}
map(['123']);
