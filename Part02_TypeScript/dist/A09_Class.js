"use strict";
var A09Class;
(function (A09Class) {
    class Jumsu {
        // public은 기본 접근제한자로 생략 가능
        constructor(name, kor, eng) {
            this._name = name;
            this._kor = kor;
            this._eng = eng;
            this._total = 0;
        }
        onTotal() {
            return this._kor + this._eng;
        }
        display() {
            console.log(`${this._name} / ${this.onTotal()} / ${this.onTotal() / 2}`);
        }
        get name() {
            return this._name;
        }
        set name(x) {
            this._name = x;
        }
    }
    let nolbu = new Jumsu('NolBu', 100, 80);
    nolbu.display();
    nolbu.name = 'HungBu';
    console.log(nolbu.name);
})(A09Class || (A09Class = {}));
//# sourceMappingURL=A09_Class.js.map