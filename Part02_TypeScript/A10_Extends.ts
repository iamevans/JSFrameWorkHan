
namespace A10Extends {

    class Jumsu {
        // 멤버변수
        private _name: string;
        protected _kor: number;
        protected _eng: number;
        protected _total: number = 0;
        protected _avg: number = 0;

        // 생성자.
        constructor(name: string, kor: number, eng: number) {
            this._name = name;
            this._kor = kor;
            this._eng = eng;
        }

        public onTotal(): number {
            this._total = this._kor + this._eng;
            return this._total;
        }

        public onAvg(num: number): number {
            this._avg = this._total / num;
            return this._avg;
        }

        public display(): string {
            return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다.`;
        }
    }

    // Jumsu Class를 상속받아 사용.
    class JumsuThree extends Jumsu {
        
        private _math: number;

        // 생성자.
        constructor(name: string, kor: number, eng: number, math: number) {
            super(name, kor, eng);
            this._math = math;
        }

        // override
        public onTotal(): number {
            this._total = this._kor + this._eng + this._math;
            return this._total;
        }

    }

    let nolbu: Jumsu = new Jumsu('놀부', 100, 80);
    nolbu.onTotal();
    nolbu.onAvg(2);
    console.log(nolbu.display());

    
    let hungbu: Jumsu = new JumsuThree('흥부', 100, 80, 70);
    hungbu.onTotal();
    hungbu.onAvg(3);
    console.log(hungbu.display());
}