
import { Component } from '@angular/core';

@Component({
    selector: 'a04-output',
    template: `
        <h3>04. Output Parent Component</h3>

        <div class="card-body">
            Name: <br>
            Name: <br>
            Tel: <br>
            Ary: <br>
            <br>

            
        </div>
    `,
    styles: []
})
export class A04OutputComponent {
    public name: string;
    public data: any;
}

@Component({
    selector: 'output-child',
    template: `
        <div class="panel-body">
            <h5>Output Child</h5>
            <div >
                <button>Send Name</button> 
                <button>Send Object</button>
            </div>
        </div>
        <br>
        <br>
    `,
    styles: []
})
export class A04OutputChildComponent {
    public name: string = 'HongGilDong';
    public obj: {tel: string, address: string} = {
        tel: '010-1234-5678',
        address: 'Seoul'
    };
    
    public ary: string[] = ['One', 'Two', 'Three'];
    public age: number = 20;

}