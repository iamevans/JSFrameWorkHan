"use strict";
var A02Type;
(function (A02Type) {
    // Type
    let name = 'NolBu';
    let age = 30;
    let check = true;
    // name = 30;
    // age = '20';
    console.log(`${name}, ${age}, ${check}`);
    // any type. 어떤 타입의 값이든 모두 대입 가능. 자바스크립트의 호환 문제
    let noType = 10;
    noType = 'Hungbu';
    noType = true;
    console.log(noType);
    // null, undefined type
    let nullType = null;
    let unType = undefined;
    // let num: number = null;      // "strictNullChecks": false 가능
    // union type
    let address = null;
    address = 'Seoul';
    let strNum = 'HungBu';
    strNum = 20;
    console.log(`${address}, ${strNum}`);
})(A02Type || (A02Type = {}));
//# sourceMappingURL=A02_Type.js.map