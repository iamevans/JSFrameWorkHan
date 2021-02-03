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
                {{check}} / {{name}} / {{age + 100}}
            </div>
        </div>
    `
})
export class ProductArgsComponent{
    public check: string;
    public name: string;
    public age: number;

    constructor(public ac: ActivatedRoute){}

    ngOnInit() {
        this.ac.queryParams.subscribe(
            (data: {check: string, name: string, age: string}) => {
                this.check = data.check;
                this.name = data.name;
                this.age = Number(data.age)
            }
        )
    }
}


