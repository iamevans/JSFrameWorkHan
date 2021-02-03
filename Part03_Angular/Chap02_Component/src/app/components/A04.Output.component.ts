
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'a04-output',
    template: `
        <h3>04. Output Parent Component</h3>

        <div class="card-body">
            Name: {{name}}<br>
            Name: {{data?.name}}<br> <!-- 객체는 초기화되지 않은 값을 바인딩하면 에러 -->
            Tel: {{data?.obj.tel}}<br>
            Ary: {{data?.arr[0]}}<br>
            Age: {{data?.age}}
            <br>

            <output-child (sendNameEvent)="getName($event)"
                (sendObjEvent)="getObject($event)"
            ></output-child>
        </div>
    `,
    styles: []
})
export class A04OutputComponent {
    public name: string;
    public data: any;

    public getName(evt: string): void {     // data 변환까지 해서 값을 넣어준다
        this.name = evt;
    }
    public getObject(evt: any): void {
        this.data = evt;
    }
}


// 자식 요소
@Component({
    selector: 'output-child',
    template: `
        <div class="panel-body">
            <h5>Output Child</h5>
            <div >
                <button (click)="sendName()">Send Name</button> 
                <button (click)="sendObject()">Send Object</button>
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

    // 전달 이벤트 객체를 생성한다.
    @Output() sendNameEvent: EventEmitter<string> = new EventEmitter();
    @Output() sendObjEvent: EventEmitter<any> = new EventEmitter();

    // 버튼을 클릭하면 이벤트를 발생하면서 값 전달
    public sendName(): void {
        this.sendNameEvent.emit(this.name);
    }
    public sendObject(): void {
        let data: any = {
            name: this.name,
            obj: this.obj,
            arr: this.ary,
            age: this.age
        }
        this.sendObjEvent.emit(data);
    }

}