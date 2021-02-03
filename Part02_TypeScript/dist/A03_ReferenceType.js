"use strict";
var A03ReferenceType;
(function (A03ReferenceType) {
    // array
    let numAry = [10, 11, 100];
    let strAry = ['A', 'B', 'C'];
    console.log(`Array=> ${numAry} / ${numAry[0]}`);
    console.log(`strAry=> ${strAry} / ${strAry[0]}`);
    // tuple
    let nolbuTp = ['NolBu', 30];
    console.log(`tuple=> ${nolbuTp} / ${nolbuTp[0]}`);
    // enum
    let Week;
    (function (Week) {
        Week[Week["Mon"] = 0] = "Mon";
        Week[Week["Tue"] = 1] = "Tue";
        Week[Week["Wed"] = 2] = "Wed";
    })(Week || (Week = {}));
    ;
    let one = Week.Mon;
    let two = Week[0];
    console.log(one, two);
    console.log("");
    // Object
    let obj = {
        name: 'Hong',
        age: 20,
        toString: function () {
            return `${this.name} / ${this.age}`;
        },
    };
    console.log(obj.toString());
})(A03ReferenceType || (A03ReferenceType = {}));
//# sourceMappingURL=A03_ReferenceType.js.map