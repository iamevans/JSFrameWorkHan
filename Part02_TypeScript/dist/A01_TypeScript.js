"use strict";
class HelloWorld {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getInfo() {
        console.log('Hello World Class');
    }
}
let nolbu = new HelloWorld('NolBu', 30);
console.log(nolbu.getName());
//# sourceMappingURL=A01_TypeScript.js.map