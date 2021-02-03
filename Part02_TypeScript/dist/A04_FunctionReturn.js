"use strict";
var A04FunctionReturn;
(function (A04FunctionReturn) {
    function onAdd(x, y) {
        console.log(`${x} + ${y} = ${x + y}`);
    }
    onAdd(10, 20);
    // onAdd('10', 20);
    function infiniteLoop() {
        while (true) {
        }
    }
    ;
    function showError(msg) {
        throw new Error(msg);
        // 호출한 곳으로 처리 이동
    }
    function checkValue(x) {
        if (x < 10)
            showError('10보다 작습니다');
        return x;
    }
    let value = checkValue(13);
    console.log(value);
})(A04FunctionReturn || (A04FunctionReturn = {}));
//# sourceMappingURL=A04_FunctionReturn.js.map