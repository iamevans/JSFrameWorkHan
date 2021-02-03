"use strict";
var A11Modifier;
(function (A11Modifier) {
    class Jumsu {
        // 생성자.
        // 접근제한자를 붙이면 지정한 접근제한자를 가진 동일 이름의 멤버변수를 생성해 준다.
        // readonly 멤버변수의 값 세팅은 생성자에서만 가능.
        constructor(_name, _kor, _eng, _math) {
            this._name = _name;
            this._kor = _kor;
            this._eng = _eng;
            this._math = _math;
            // 멤버변수
            // readonly _name: string;     // 읽기 전용. 값 변경 안됨
            // private _kor: number;
            // private _eng: number;
            // private _math: number;
            this._total = 0;
            this._avg = 0;
            this._name = _name;
            this._kor = _kor;
            this._eng = _eng;
            this._math = _math;
        }
        // Getter / Setter
        get kor() {
            // readonly는 class 내부에서도 참조만 가능하다.
            return this._kor;
        }
        set kor(kor) {
            this._kor = kor;
        }
        onTotal() {
            this._total = this._kor + this._eng + this._math;
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
    let nolbu = new Jumsu('놀부', 100, 80, 70);
    nolbu.onTotal();
    nolbu.onAvg(3);
    console.log(nolbu.display());
    nolbu.kor = 50;
})(A11Modifier || (A11Modifier = {}));
//# sourceMappingURL=A11_Modifier.js.map