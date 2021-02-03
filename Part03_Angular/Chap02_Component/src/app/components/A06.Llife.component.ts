import { Component } from '@angular/core';

@Component({
    selector: 'a06-life',
    template: `
        <div>
            <div class="card-heading">
                <h3>06. Life Cycle</h3>
            </div>
            <div class="card-body">
                <input type="number" class="form-control" [(ngModel)]="age">
            </div>

            <a06-child></a06-child>
        </div>
        
    `
})
export class A06LifeComponent {
    public age: number = 20;

    constructor(){
        console.log(`A06 Parent Constructor => ${this.age}`);
    }

    // 속성이 만들어진 시점. 초기화 후 어떤 로직에 의해 변경 값이 있는 경우
    ngOnInit(): void {
        console.log(`A06 Parent ngOnInit => ${this.age}`);
    }

    // View Model(Control)의 속성, 메서드 등이 완성. 1번만 실행됨
    ngAfterContentInit(): void {
        console.log(`A06 Parent ngAfterContentInit => ${this.age}`);
    }

    // View Model(Control)의 속성, 메서드 등이 변경. 변경될때마다 실행됨
    ngAfterContentChecked(): void {
        console.log(`A06 Parent ngAfterContentChecked => ${this.age}`);
    }

    // View 완성. 1번만 실행됨
    ngAfterViewInit(): void {
        console.log(`A06 Parent ngAfterViewInit => ${this.age}`);
    }

    // View 변경. View가 변경될때마다 실행됨
    ngAfterViewChecked(): void {
        console.log(`A06 Parent ngAfterViewChecked => ${this.age}`);
    }

    // 컴퍼넌트가 View에서 사라질때
    ngOnDestroy(): void {
        console.log(`A06 Parent Constructor => ${this.age}`);
    }
    
}

@Component({
    selector: 'a06-child',
    template: `
        <div class="card-body">
            <h4>A05 Life Cycle Children</h4>
        </div>
        <br>
        <br>
    `
})
export class A06LifeChildComponent {
    public age: number = 50;

    constructor(){
        console.log(`A06 Child Constructor => ${this.age}`);
    }

    ngOnInit(): void {
        console.log(`A06 Child ngOnInit => ${this.age}`);
    }

    ngAfterContentInit(): void {
        console.log(`A06 Child ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked(): void {
        console.log(`A06 Child ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit(): void {
        console.log(`A06 Child ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked(): void {
        console.log(`A06 Child ngAfterViewChecked => ${this.age}`);
    }

    ngOnDestroy(): void {
        console.log(`A06 Child Constructor => ${this.age}`);
    }
}

