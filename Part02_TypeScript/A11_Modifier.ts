
namespace A11Modifier {

    class Jumsu {
        // 멤버변수
        // readonly _name: string;     // 읽기 전용. 값 변경 안됨
        // private _kor: number;
        // private _eng: number;
        // private _math: number;
        private _total: number = 0;
        private _avg: number = 0;

        // 생성자.
        // 접근제한자를 붙이면 지정한 접근제한자를 가진 동일 이름의 멤버변수를 생성해 준다.
        // readonly 멤버변수의 값 세팅은 생성자에서만 가능.
        constructor(readonly _name: string, private _kor: number, private _eng:  number, readonly _math: number) {
            this._name = _name;
            this._kor = _kor;
            this._eng = _eng;
            this._math = _math;
        }

        // Getter / Setter
        public get kor(): number {
            // readonly는 class 내부에서도 참조만 가능하다.
            
            return this._kor;
        }
        public set kor(kor: number) {
            this._kor = kor;
        }

        public onTotal(): number {
            this._total = this._kor + this._eng + this._math;
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

    let nolbu: Jumsu = new Jumsu('놀부', 100, 80, 70);
    nolbu.onTotal();
    nolbu.onAvg(3);
    console.log(nolbu.display());

    nolbu.kor = 50;

}