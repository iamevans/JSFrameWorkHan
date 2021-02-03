
namespace A04FunctionReturn {

    function onAdd(x: number, y: number){
        console.log(`${x} + ${y} = ${x + y}`);
    }

    onAdd(10, 20);
    // onAdd('10', 20);


    function infiniteLoop(): never {
        while(true){
        }
    };

    function showError(msg: string): never {
        throw new Error(msg);
        // 호출한 곳으로 처리 이동
    }

    function checkValue(x: number): number {
        if(x < 10) showError('10보다 작습니다');
        return x;
    }

    let value = checkValue(13);
    console.log(value);

}