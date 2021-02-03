
(function(){

    // 함수 리터럴
    let onAdd = function(x, y) {
        console.log(`${x} + ${y} = ${x + y}`);
    }

    let onMin = function(x, y) {
        return `${x} - ${y} = ${x - y}`;
    }

    onAdd(10, 20);
    console.log( onMin(10, 20) );
    console.log('')


    // ES6. Arrow 함수. 일반 함수는 변경 불가. 함수 리터럴 방식만 변경 가능
    // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
    let onMulti = (x, y) => {
        console.log(`${x} * ${y} = ${x * y}`);
    }
    onMulti(10, 2);

    let onDiv = (x, y) => {
        return `${x} / ${y} = ${x / y}`;
    }
    console.log( onDiv(10, 2) );

    // {} 안에 리턴 구문 딱 1개만 있다면 {}와 return 생략하고 한줄에 모두 기술
    // return을 기술하면 에러
    let onDiv2 = (x, y) => `${x} / ${y} = ${x / y}`;

    console.log( onDiv2(10, 2) );
    
    // => 값이 오면 리턴이고 명령이 오면 그냥 실행
    let onMulti2 = (x, y) => console.log(`${x} * ${y} = ${x * y}`);
    onMulti2(10, 2);


    // 매개변수가 없으면 빈 가로는 반드시 기술 
    let noParam = () => 10 ** 2;    // 10 * 10
    console.log(noParam());


    // 매개변수가 1개인 경우 ()를 생략할수 있다
    let onDouble = x => x ** 2;
    console.log(onDouble(5));


})();