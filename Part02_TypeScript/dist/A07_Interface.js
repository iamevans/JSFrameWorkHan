"use strict";
var A07Interface;
(function (A07Interface) {
    // Object
    let objOne = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return `${this.name} / ${this.age}`;
        }
    };
    console.log(objOne.toString());
    let objTwo = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return `${this.name} / ${this.age}`;
        }
    };
    console.log(JSON.stringify(objTwo));
    let objThree = {
        'one': 'apple',
        'two': 'banana',
        'three': 'lemon',
        'four': 'watermelon'
    };
    console.log(JSON.stringify(objThree));
    let objFive = {};
    objFive['one'] = 10;
    objFive['two'] = 20;
    objFive[10] = 30; // key는 string | number만 지정가능. number는 string으로 캐스팅됨
    console.log(JSON.stringify(objFive));
})(A07Interface || (A07Interface = {}));
//# sourceMappingURL=A07_Interface.js.map