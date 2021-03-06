"use strict";
var A05OptionalParam;
(function (A05OptionalParam) {
    // ? => 생략(정의 하지 않음) 가능 속성
    function calcTaxOne(amount, tax) {
        if (tax)
            return amount * tax;
        else
            return amount * 0.08; // tax 값이 없는 경우 처리
    }
    console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    console.log('');
    // 매개변수의 기본 값을 할당할 수도 있음
    function calcTaxTwo(amount, tax = 0.08) {
        // tax = '0.01';
        return amount * tax;
    }
    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05)); // 값을 할당하면 tax는 지정한 값으로 대입
    console.log('');
    function objParam(arg) {
        console.log(arg.label);
    }
    objParam({ label: 'middle' });
})(A05OptionalParam || (A05OptionalParam = {}));
//# sourceMappingURL=A05_OptionalParam.js.map