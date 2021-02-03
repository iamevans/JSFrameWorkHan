
class HelloWorld {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    private getInfo(): void {
        console.log('Hello World Class');
    }
}

let nolbu = new HelloWorld('NolBu', 30);
console.log(nolbu.getName());
