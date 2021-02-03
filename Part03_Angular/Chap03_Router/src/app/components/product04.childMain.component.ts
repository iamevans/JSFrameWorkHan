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
                    <a>Description</a> | 
                    <a>Seller Info</a>
                </p>

                <router-outlet></router-outlet>
            
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}