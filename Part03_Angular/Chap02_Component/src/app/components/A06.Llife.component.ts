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


        </div>
        
    `
})
export class A06LifeComponent {
    public age: number = 20;

    constructor(){
        console.log(`A06 Parent Constructor => ${this.age}`);
    }

    ngOnInit(): void {
        console.log(`A06 Parent ngOnInit => ${this.age}`);
    }

    ngAfterContentInit(): void {
        console.log(`A06 Parent ngAfterContentInit => ${this.age}`);
    }

    ngAfterContentChecked(): void {
        console.log(`A06 Parent ngAfterContentChecked => ${this.age}`);
    }

    ngAfterViewInit(): void {
        console.log(`A06 Parent ngAfterViewInit => ${this.age}`);
    }

    ngAfterViewChecked(): void {
        console.log(`A06 Parent ngAfterViewChecked => ${this.age}`);
    }

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

