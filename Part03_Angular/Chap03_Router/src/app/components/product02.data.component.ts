import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-data',
    template: `
        <div>    
            <h5>Product Data Component</h5>
            This is Data Component<br>
            <br>

            {{id}} / {{check}} / {{name}} / {{age}}
        </div>
    `
})
export class ProductDataComponent{
    public check: boolean;
    public name: string;
    public age: number;
    public id: number;

    constructor(private ac: ActivatedRoute){}
    
    ngOnInit(): void {
        
    }
}