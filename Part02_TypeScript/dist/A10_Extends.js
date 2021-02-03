"use strict";
var A10Extends;
(function (A10Extends) {
    class Jumsu {
        // 생성자.
        constructor(name, kor, eng) {
            this._total = 0;
            this._avg = 0;
            this._name = name;
            this._kor = kor;
            this._eng = eng;
        }
        onTotal() {
            this._total = this._kor + this._eng;
            return this._total;
        }
        onAvg(num) {
            this._avg = this._total / num;
            return this._avg;
        }
        display() {
            return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다.`;
        }
    }
    // Jumsu Class를 상속받아 사용.
    class JumsuThree extends Jumsu {
        // 생성자.
        constructor(name, kor, eng, math) {
            super(name, kor, eng);
            this._math = math;
        }
        // override
        onTotal() {
            this._total = this._kor + this._eng + this._math;
            return this._total;
        }
    }
    let nolbu = new Jumsu('놀부', 100, 80);
    nolbu.onTotal();
    nolbu.onAvg(2);
    console.log(nolbu.display());
    let hungbu = new JumsuThree('흥부', 100, 80, 70);
    hungbu.onTotal();
    hungbu.onAvg(3);
    console.log(hungbu.display());
})(A10Extends || (A10Extends = {}));
//# sourceMappingURL=A10_Extends.js.map