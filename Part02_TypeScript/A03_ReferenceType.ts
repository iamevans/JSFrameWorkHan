
namespace A03ReferenceType {

    // array
    let numAry: number[] = [10, 11, 100];
    let strAry: Array<string> = ['A', 'B', 'C'];
    console.log(`Array=> ${numAry} / ${numAry[0]}`);
    console.log(`strAry=> ${strAry} / ${strAry[0]}`);


    // tuple
    let nolbuTp: [string, number] = ['NolBu', 30];
    console.log(`tuple=> ${nolbuTp} / ${nolbuTp[0]}`);


    // enum
    enum Week { Mon, Tue, Wed };
    let one: Week = Week.Mon;
    let two: string = Week[0];

    console.log(one, two);
    console.log("");


    // Object
    let obj: {name: string, age: number, toString: ()=>string} = {
        name: 'Hong',
        age: 20,
        toString: function() {
            return `${this.name} / ${this.age}`
        },
    }
    console.log(obj.toString());

}