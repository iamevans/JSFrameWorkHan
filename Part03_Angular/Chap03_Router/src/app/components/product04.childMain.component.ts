import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="card-boyd">
            <h3>Product Child Component</h3>
            This is Children Main Component<br>

            <div>
                <p>
                    <a routerLink="desc">Description</a> | 
                    <a [routerLink]="['seller']">Seller Info</a>
                </p>

                <router-outlet></router-outlet>
            
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}