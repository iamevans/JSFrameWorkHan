
namespace A06Interface {

    // 타입을 직접 정의하는 경우
    let onPlus: (x:number, y: number)=>number = function(x: number, y: number): number {
        return x + y;
    }

    // type을 interface로 작성
    interface MinType {
        (x: number, y: number): number
    }

    let onMin: MinType = function(x: number, y: number): number {
        return x - y;
    }

    console.log(onPlus(10, 20));
    console.log(onMin(10, 20));
    

    // type을 interface로 작성
    interface OneType {
        (x: number, y?: number): number
    }
    let calcTaxOne: OneType = function(amount: number, tax?: number): number {
        if(tax) return amount * tax;
        else return amount * 0.08
    }
    
    console.log(calcTaxOne(1000));
    console.log(calcTaxOne(1000, 0.05));
    
    // type을 interface로 작성. 기본값이 있는 것도 ?로 지정
    interface TwoType {
        (x: number, y?: number): number
    }
    let calcTaxTwo:TwoType = function(amount: number, tax: number = 0.08): number {
        return amount * tax;
    }

    console.log(calcTaxTwo(1000));
    console.log(calcTaxTwo(1000, 0.05));

    interface ParamType {
        (x: {label: string}): void
    }
    let objParam: ParamType = function(arg: {label: string}): void {
        console.log(arg.label)
    }
    
    objParam( {label: 'TV'} );

}