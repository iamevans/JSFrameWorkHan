
(function(){

    // ES5. 함수 리터럴
    var sayHello = function() { 
        return 1;
    };

    console.log( '1 => ' + sayHello() );         // 1

    {
        var sayHello = function() {             // var 변수라 값이 대입되는 순간 변수의 값이 변경됨
            return 2;
        };
        
        console.log( '2 => ' + sayHello() );     // 2
    }

    console.log( '3 => ' + sayHello() );         // 2   var 변수라 값이 대입되는 순간 변수의 값이 변경됨
    console.log("");


    // ES6. Function
    let yourHello = function() { 
        return 1;
    };
    console.log( '1 => ' + yourHello() );        // 1

    {
        let yourHello = function() {
            return 2;
        };
        console.log( '2 => ' + yourHello() );    // 2
    }

    console.log( '3 => ' + yourHello() );        // 1

})();
