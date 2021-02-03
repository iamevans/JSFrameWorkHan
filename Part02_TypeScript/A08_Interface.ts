
namespace A08Interface {

    interface ITest {
        name: string;
        check: boolean;
        onPlus: (x:number, y: number) => number;
        toString: () => string;
    }
    
    // 인터페이스에서 정의한 멤버변수는 접근제한자가 public이어야 한다.
    class TestClass implements ITest{
        public name: string;
        public check: boolean;

        constructor(name: string, check: boolean) {
            this.name = name;
            this.check = check;
        }

        public onPlus(x: number, y: number): number {
            return x + y;
        }

        public toString(): string {
            return `[TestClass] name: ${this.name}, check: ${this.check}`;
        }
    }

    let testOne: TestClass = new TestClass('NolBu', true);

    console.log(testOne.onPlus(10, 20));
    console.log(testOne.toString())

}