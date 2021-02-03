
import { Component } from '@angular/core';

@Component({
    selector: 'a03-input',
    template: `
        <div class="panel-body">
            <h3>03. Input Parent Component</h3>
            <div class="card-body">
                <div>
                    <label>Name</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Obj</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Ary</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" class="form-control">
                </div>
            </div>
            <br>

            
        </div>
    `,
    styles: []
})
export class A03InputComponent {
    public name: string = 'HongGilDong';
    public obj: {tel: string, address: string} = {
        tel: '010-1234-5678',
        address: 'Seoul'
    };
    
    public ary: string[] = ['One', 'Two', 'Three'];
    public age: number = 20;

}


@Component({
    selector: 'input-child',
    template: `
        <div class="card-body">
            <h5>Input Child</h5>

            Normal: <br>
            Name: <br>
            Object: <br>
            Array: <br>

            Age: <br>
        </div>
    `,
    styles: ['']
})
export class A03InputChildComponent {

    private _age: number;
    
}