
import { Component, Input } from '@angular/core';

@Component({
    selector: 'a03-input',
    template: `
        <div class="panel-body">
            <h3>03. Input Parent Component</h3>
            <div class="card-body">
                <div>
                    <label>Name</label>
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div>
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div>
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" class="form-control" [(ngModel)]="age">
                </div>
            </div>
            <br>

            <!-- 
                일반 속성 normal은 하위에서 받아도 그만 안 받아도 그만.. 
                속성 바인딩으로 전달하면 반드시 자식요소에서 해당 속성의 
                @Input()이 정의되어 있어야 에러 아님
            -->
            <input-child normal="Normal Text" [name]="name" 
                [obj]="obj" [ary]="ary" [age]="age"></input-child>
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


// 자식 컴퍼넌트
@Component({
    selector: 'input-child',
    template: `
        <div class="card-body">
            <h5>Input Child</h5>

            Normal: {{normal}}<br>
            Name: {{name}}<br>
            Object: {{obj.tel}} / {{obj.address}}<br>
            Array: {{arr[0]}} / {{arr[10]}}<br>

            Age: {{age + 10}}<br>
        </div>
    `,
    styles: ['']
})
export class A03InputChildComponent {

    // 상위 컴퍼넌트가 속성 형태로 전달한 값을 받는다. import 되어야 함
    // @Input('상위컴퍼넌트에서전달한 속성명') 사용할변수명: 타입 = 기본값;
    @Input('normal') normal: string = '값 없음';
    @Input() name: string;
    @Input() obj: {tel: string, address: string};
    @Input('ary') arr: string[];
    
    //@Input() age: number;


    private _age: number;

    @Input() 
    public set age(x: number) {
        console.log(typeof x);
        let value = Number(x);
        if(isNaN(value)) value = 0;
        this._age = value;
    }

    public get age(): number {
        return this._age;
    }
    
}