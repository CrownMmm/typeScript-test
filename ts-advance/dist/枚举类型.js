"use strict";
// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };
// 枚举类型
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 0] = "OFFLINE";
    Status[Status["ONLINE"] = 1] = "ONLINE";
    Status[Status["DELETED"] = 2] = "DELETED";
})(Status || (Status = {}));
console.log(Status);
// function getResult(status: any) {
//   if (status === Status.OFFLINE) {
//     return 'offline';
//   } else if (status === Status.ONLINE) {
//     return 'online';
//   } else if (status === Status.DELETED) {
//     return 'deleted';
//   }
//   return 'error';
// }
// const result = getResult(Status.OFFLINE);
// console.log(result);
