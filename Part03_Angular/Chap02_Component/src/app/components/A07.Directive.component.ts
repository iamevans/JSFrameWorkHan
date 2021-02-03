
import { Component } from '@angular/core';

@Component({
    selector: 'a07-directive',
    template: `

        <h3>07. Directive</h3>
        
        <div class="card-body">
            <h5>ngIf</h5>
            <div>
                Learn one way to build applications with Angular and reuse your code and<br>
                abilities to build apps for any deployment target.<br>
                For web, mobile web, native mobile and native desktop.
            </div>
            <ng-template><div>Content to render when condition is false.</div></ng-template>
            <div>
                <button (click)="changeView()">{{view ? 'HIDE' : 'SHOW'}}</button>
            </div>
            <br>

            <div>
                <h5>ngSwitch</h5>
                <button (click)="changeSwitch('admin')">Admin</button>
                <button (click)="changeSwitch('member')">Member</button>
                <button (click)="changeSwitch('guest')">Guest</button>
                <button (click)="changeSwitch('abc')">ABC</button>
                <br>
                <div>
                    <span>Admin</span>
                    <span>Member</span>
                    <span>Guest</span>
                    <span>회원등급을 선택해 주세요.</span>
                </div>
            </div>
            <br>


            <h5>ngFor</h5>
            <table class="table">
                <tr>
                    <td>No</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>KOR</td>
                    <td>ENG</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    `,
    styles: []
})
export class A07DirectiveComponent {

    public view: boolean = true;
    public grade: string = 'normal';

    public students: objType[] = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]

    public changeView(): void {
        this.view = !this.view;
    }

    public changeSwitch(value: string): void {
        this.grade = value;
    }

}

type objType = {name: string, age: number, kor: number, eng: number};