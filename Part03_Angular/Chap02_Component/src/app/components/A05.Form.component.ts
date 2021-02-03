import { Component } from '@angular/core';

@Component({
    selector: 'a05-form',
    template: `
        <div>
            <h3>05. Form</h3>

            <div class="card-body">
                Form Value: <br>
                Name: <br>
                Name Valid:  <br>
                Name hasError: <br>
            </div>

            <div class="card-body">
                <form>
                    <div>
                        <label>UserName:</label>
                        
                        <input type="text" class="form-control">
                        <div>입력 값이 올바르지 않습니다.</div>

                        <input type="text" class="form-control">
                        <div>필수 입력 항목입니다</div>

                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control">
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control">
                            <option></option>
                        </select>
                    </div>
                    <br>
                    
                    <button class="btn btn-primary" type="submit">Submit</button>
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

    
}
