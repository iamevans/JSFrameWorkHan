
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        console.log(`${this.name} / ${this.age}`);
    }
}

let hong = new User('HongGilDong', 20);
let nolbu = new User('NolBu', 30);

hong.getName()
nolbu.getName();
