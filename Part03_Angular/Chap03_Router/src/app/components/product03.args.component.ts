import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-args',
    template: `
        <div>
            <h5>Product Argument Component</h5>
            This is Argumemt Component<br>
            <br>

            <div>
                {{check}} / {{name}} / {{age}}
            </div>
        </div>
    `
})
export class ProductArgsComponent{
    public check: boolean;
    public name: string;
    public age: number;

    constructor(public ac: ActivatedRoute){}

    ngOnInit() {
        
    }
}


