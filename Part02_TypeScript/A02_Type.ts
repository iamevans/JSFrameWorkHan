
namespace A02Type {         // 즉시 실행 함수..

    // Type
    let name: string = 'NolBu';
    let age: number = 30;
    let check: boolean = true;

    // name = 30;
    // age = '20';

    console.log(`${name}, ${age}, ${check}`);

    
    // any type. 어떤 타입의 값이든 모두 대입 가능. 자바스크립트의 호환 문제
    let noType: any = 10;
    noType = 'Hungbu';
    noType = true;
    console.log(noType);


    // null, undefined type
    let nullType: null = null;
    let unType: undefined = undefined;

    // let num: number = null;      // "strictNullChecks": false 가능


    // union type
    let address: string | null = null;
    address = 'Seoul';

    let strNum: string | number = 'HungBu';
    strNum = 20;
    
    console.log(`${address}, ${strNum}`);

}
