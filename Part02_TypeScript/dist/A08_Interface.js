"use strict";
var A08Interface;
(function (A08Interface) {
    // 인터페이스에서 정의한 멤버변수는 접근제한자가 public이어야 한다.
    class TestClass {
        constructor(name, check) {
            this.name = name;
            this.check = check;
        }
        onPlus(x, y) {
            return x + y;
        }
        toString() {
            return `[TestClass] name: ${this.name}, check: ${this.check}`;
        }
    }
    let testOne = new TestClass('NolBu', true);
    console.log(testOne.onPlus(10, 20));
    console.log(testOne.toString());
})(A08Interface || (A08Interface = {}));
//# sourceMappingURL=A08_Interface.js.map