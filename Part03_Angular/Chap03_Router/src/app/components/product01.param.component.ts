import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <div>
            <h5>Product Params for Product</h5>
            This is Product Params Component<br>
            <br>
            ID: 
        </div>
    `
})
export class ProductParamComponent{
    public num: number;

    constructor(){}

    ngOnInit() {
        
    }
}