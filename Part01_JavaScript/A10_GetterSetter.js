
class Jumsu {

    constructor(name, kor, eng) {
        this._name = name;
        this._kor = kor;
        this._eng = eng;
    }

    // 일반 메서드
    onTotal() {
        return this._kor + this._eng;
    }

    display() {
        console.log(`${this._name}의 총점은 ${this.onTotal()}이고 평균은 ${this.onTotal() / 2}입니다`);
    }

    getName() {
        return this._name;
    }

    // getter / setter. 사용은 프로퍼티와 같이 사용. 즉 ()를 사용하지 않고 변수처럼 사용
    get kor() {
        return this._kor + "님...";
    }

    // 값이 넘어오면 중간 처리가 가능. 이런경우 메서드로 기술이 아닌 getter /setter 이용
    set kor(k) {
        let num = Number(k);
        if(isNaN(num)) num = 0; 

        this._kor = num;
    }

    
};


let nolbu = new Jumsu('Nolbu', 100, 90);
console.log(nolbu._name);                       // Nolbu
nolbu.display();

// getter / setter를 호출
nolbu.kor = 60;
console.log(nolbu.kor);




