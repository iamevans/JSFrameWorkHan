
(function(){

    // 일반 함수. 
    function fn(){
        console.log('funcion');
    }
    fn();

    /* 이런 식으로는 사용불가
    fn() => {

    }
    */

    let ary = [10, 11, 100, 101, 1000];


    // 익명함수(이름이 없는 함수), 함수 리터럴(변수가 함수를 대입한 형태)는 어로우로 변경가능
    // 배열을 순환해서 새로운 배열을 생성. 순서대로 익명함수 X에 하나씩 대입하고 실행.
    let onAdd = ary.map(function(x){
        return x + 1;
    });
    console.log(onAdd);

    // (10, 0), (11, 1), ..
    let onMin = ary.map(function(x, i){
        return {index: i, value: x - 1};
    })
    console.log(onMin);


    // Arrow 함수 이용.
    let add = ary.map( (x) => x + 1 );
    console.log(add);

    // 객체가 바로 리턴될때 첫 {를 함수의 시작으로 인식하므로 반드시 ()로 객체를 묶어야 함
    let min = ary.map( (x, i) => ({index: i, value: x - 10}) );
    console.log(min);

})();