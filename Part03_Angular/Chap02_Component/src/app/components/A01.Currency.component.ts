
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'a01-currency',
    template: `
        <div>
            <h3>1. Currency</h3>
            <br>

            <div>
            Qty: <input type="text" class="form-control" [(ngModel)]="qty"><br>
            Cost: <input type="text" class="form-control" [(ngModel)]="cost"><br>
            Country: {{inCurr}}
                <select class="form-control" [(ngModel)]="inCurr">
                    <!-- for(let item of currencies) { --->
                    <option *ngFor="let item of currencies">{{item}}</option>
                    <!-- } -->
                </select>
            </div>
            <br>

            <div>
                Total: <span>단방향 바인딩: {{qty * cost}}</span>
            </div>

            <div>
                Total: <span *ngFor="let item of currencies">{{onTotal(item) | currency : item : 'symbol' }} &nbsp;</span>
            </div>
        </div>
    `,
    styles: [``]
})
export class A01CurrencyComponent {

    public qty: number = 3;
    public cost: number = 5;
    public currencies: string[]  = ['USD', 'EUR', 'CNY'];
    public inCurr: string = 'USD';
    public rate: { [key: string]: number } = {
        'USD': 1,
        'EUR': 1.35,
        'CNY': 6.87
    }

    public onTotal(outCurr: string): number {
        return this.qty * this.cost * this.rate[this.inCurr] / this.rate[outCurr]
    }

    constructor() { }
}
