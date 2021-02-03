
(function(){
    // Class는 리터럴 방식으로 기술 안됨
    function User(user, age){    // 생성자
        this.user = user;
        this.age = age;
    };

    User.prototype.getName = function() {
        console.log(this.user);
    }

    let hong = new User('홍길동', 20);
    let nolbu = new User('놀부', 30);

    hong.getName();
    nolbu.getName();

})();
