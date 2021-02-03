
namespace A07Interface {

    // Object
    let objOne: {name: string, age: number, toString: ()=>string} = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        }
    }
    console.log(objOne.toString());

    // interface로 타입 정의
    interface ObjType {
        name: string;
        age: number;
        toString: () => string
    }

    let objTwo: ObjType = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        }
    }
    console.log(JSON.stringify(objTwo));


    
    let objThree: { [key: string]: string } = {
        'one': 'apple',
        'two': 'banana',
        'three': 'lemon',
        'four': 'watermelon'
    }
    console.log( JSON.stringify(objThree) );

    interface KeyValueType {
        [key: string]: number
    }
    let objFive: KeyValueType = {};
    objFive['one'] = 10;
    objFive['two'] = 20;
    objFive[10] = 30;           // key는 string | number만 지정가능. number는 string으로 캐스팅됨
    console.log( JSON.stringify(objFive) );


}