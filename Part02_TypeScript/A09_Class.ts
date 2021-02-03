
namespace A09Class {

    class Jumsu {
        // member변수 선언
        // 접근제한자 private, protected, public 3개의 접근제한자가 존재
        private _name: string;
        private _kor: number;
        private _eng: number;
        private _total: number;

        // public은 기본 접근제한자로 생략 가능
        public constructor(name: string, kor: number, eng: number) {
            this._name = name;
            this._kor = kor;
            this._eng = eng;
            this._total = 0;
        }

        private onTotal(): number {
            return this._kor + this._eng;
        }

        public display(): void {
            console.log(`${this._name} / ${this.onTotal()} / ${this.onTotal() / 2}`);
        }

        public get name(): string {
            return this._name;
        }
        public set name(x: string) {        // 리턴 타입을 기술하면 에러
            this._name = x;
        }
    }

    let nolbu = new Jumsu('NolBu', 100, 80);
    nolbu.display();

    nolbu.name = 'HungBu';
    console.log(nolbu.name);



}