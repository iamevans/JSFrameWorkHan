// A01_Variable.js

console.log('name: ' + name + " typeof: " + typeof name);

var name = 'NolBu';
console.log('name: ' + name + " typeof: " + typeof name);

// var 키워드로 동일한 변수명을 재 선언해도 에러 아님
// 먼저 변수를 읽을때 등록된 변수가 있으면 추후에 같은 이름의 변수를 스킵.
var name = 10;
console.log('name: ' + name + " typeof: " + typeof name);

// var은 함수의 {} 이외는 범위를 갖지 않는다
if(true) {
    var name = 'IF Block name';     // 10 => 'IF Block name'
    console.log('IF In: ' + name + " typeof: " + typeof name);
}
console.log('IF Out: ' + name + " typeof: " + typeof name);

for(var i = 0; i < 3; i++) {}
console.log('For i: ' + i + " typeof: " + typeof i);
console.log('');



// ES6(ES2015) => let, const
let age = 30;
console.log('age: ' + age + " typeof: " + typeof age);

// let age = 'NolBu';           // 선언된 변수는 재 선언이 안된다.
age = 'NolBu';                  // 타입이 다른 값 변경은 가능
console.log('age: ' + age + " typeof: " + typeof age);

// let는 모든 {}에서 범위를 갖는다
if(true) {
    let age = 'IF Block name';     // 10 => 'IF Block name'
    console.log('IF In: ' + age + " typeof: " + typeof age);
}
console.log('IF Out: ' + age + " typeof: " + typeof age);

for(let k = 0; k < 3; k++) {}
// console.log('For k: ' + k + " typeof: " + typeof k);     // 참조 불가
console.log('');


// 상수. 값 변경이 안되는 변수
const MY_PI = 3.14159;

// MY_PI = 100;             // 읽기 전용



// var의 변수의 위험성
var A = 10;                 // window에 등록함
let A1 = 100;               // window에 등록하지 않음

// console.log(window);        // node로 확인하면 에러. 브라우저로 확인해야 함

// alert('Hello World');       // window.alert(..) => window는 생략 가능

// alert = 100;

// alert('Alert');             // 함수 => 변수로 위에서 변경함
console.log(window);


// var 변수의 충돌을 막기 위해 즉시실행 함수를 
// 함수는 var, let 모두 범위를 갖는다.
(function(){
    var alert = 100;
    console.log(alert);
})()

alert("Hi NolBu")


