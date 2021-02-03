
import { Component } from '@angular/core';

@Component({
    selector: 'a02-binding',
    template: `
        <h3>02. Binding</h3>

        <div class="card-body">
            <h5>단방향 Binding</h5>

            Name: {{name}}<br>
            일반적인 연산: 1 + 2 = {{1 + 2}}<br>
            좋아하는 과일의 개수: {{person.fruit.length}}<br>
            과일의 개수 * 100 : {{person.fruit.length * 100}}<br>
            Are you NolBu? {{person.name === 'NolBu'}}<br>
            Are you NolBu? {{person.name === 'Nolbu' ? '놀부' : '모름'}}<br>
            과일 개수가 4개보다 많은가? {{person.fruit.length > 4}}<br>
            Method: <br>

            <!-- 10버전부터 없는 요소에 접근하면 에러 -->
            <!--
                angular => {{}}, react => {}, vue => {{}}
                data의 값을 view에 출력 => 단방향 바인딩

            Scope에 없는 객체 요소에 접근:  {{age}}<br>
            Scope에 없는 객체에 접근: {{user.name}}<br>
            -->
        </div>
        <br>

        <div class="panel-body">
            <h5>속성 바인딩</h5>

            바인딩 방식: <input type="text" class="form-control" value="{{name}}"><br>

            <!-- 속성에 []로 묶으면 뒤의 값은 변수명을 의미한다. 
                [value]=> JavaScript 속성에 값 대입. DOM에 속성 안 만듬. 
                [attr.value] => DOM 속성에 값 대입. 없으면 DOM 생성후 값 대입
            -->
            속성 바인딩: <input type="text" class="form-control" [value]="name"><br>
            attr 바인딩: <input type="text" class="form-control" [attr.value]="name"><br>
        </div>
        <br>

        <div class="panel-body">
            <h5>양방향 바인딩</h5>

            양방향 바인딩: <input type="text" class="form-control" ><br>
            양방향 바인딩: <input type="text" class="form-control" ><br>
            Method 방식: <input type="text" class="form-control" ><br>
        </div>
        <br>

        <div class="panel-body">
            <h5>이벤트 바인딩</h5>

            <div>{{result}}</div>
            innerText: <span></span><br>
            innerHTML: <span></span><br>
            <button>명령식</button>
        </div>
        <br>

        <div class="panel-body">
            <h4>Class Style Binding</h4>

            <div>1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            <div>2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            <div>3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            <div>4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
        </div>

        
    `,
    styles: [`
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A02BindingComponent {

    public name: string = 'HongGilDong';
    public address: string = 'Seoul';
    public result: string = '';
    public greenColor: string = 'green';

    public person: { name: string, fruit: string[] } = {
        name: 'NolBu',
        fruit: ['Lemon', 'Banana', 'Orange']
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    public getInfo(): string {
        return `Name: ${this.name}, Fruit: ${this.person.fruit[0]}, Array:  ${this.ary[0]}`;

    }

    public resultChange(): void {
        this.result = '<b>Hello World!!!</b>';
    }

}


http://java13716.cafe24.com/download/js2.zip