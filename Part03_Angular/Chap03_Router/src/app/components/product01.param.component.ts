import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <div>
            <h5>Product Params for Product</h5>
            This is Product Params Component<br>
            <br>
            ID: {{num}}
        </div>
    `
})
export class ProductParamComponent{
    public num: number;

    constructor(private ac: ActivatedRoute){}

    ngOnInit() {
        // 지연객체(Promise). 로드가 완료된 후에 데이터를 받을 목적
        this.ac.params.subscribe(
            (data: {id: string, name: string}) => {
                console.log(data);
                this.num = Number(data.id);
            }
        )
    }
}