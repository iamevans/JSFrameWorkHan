import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'a05-form',
    template: `
        <div>
            <h3>05. Form</h3>

            <div class="card-body">
                Form Value: {{myForm.value | json}}<br>
                Form Valid: {{myForm.valid}}<br>
                Name: {{myForm.controls.fName.value}}<br>
                Name Valid:  {{myForm.controls.fName.valid}}<br>
                Name hasError: {{myForm.controls.fName.hasError('minlength')}}<br>
            </div>

            <div class="card-body">
                <!-- formGroup은 FormsModule과는 달리 다른 모듈이 관리
                    FormsModule => View에서 사용되는 요소 관리 명령들
                    ReactiveFormsModule => VM(controller)에서 사용되는 Form 관리 명령
                -->
                <form [formGroup]="myForm">
                    <div>
                        <label>UserName:</label>
                        
                        <input type="text" class="form-control" formControlName="fName">
                        <div *ngIf="myForm.controls.fName.invalid">입력 값이 올바르지 않습니다.</div>

                        <input type="text" class="form-control" formControlName="lName">
                        <div *ngIf="myForm.controls.lName.hasError('required')">필수 입력 항목입니다</div>

                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control" formControlName="password">
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control" formControlName="dept">
                            <option *ngFor="let item of ary">{{item}}</option>
                        </select>
                    </div>
                    <br>
                    
                    <button class="btn btn-primary" type="submit" 
                        [disabled]="myForm.invalid"
                        (click)="sendData()">Submit</button>
                </form>
            </div>
        </div>
        <br>
        <br>
    `,
    styles: []
})
export class A05FormComponent {
    public ary: string[] = ['선택해 주세요', 'Salary', 'Department']

    public myForm: FormGroup;

    constructor(){
        this.myForm = new FormGroup({
            'fName': new FormControl('A', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
            'lName': new FormControl('B', [Validators.required]),
            password: new FormControl(),
            dept: new FormControl()
        })
    }

    public sendData(): void {
        console.log(this.myForm.value);

        // 이 값은 ajax등을 이용해 전달...
    }
}
