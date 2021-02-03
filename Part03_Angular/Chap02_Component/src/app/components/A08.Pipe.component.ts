import { Component } from '@angular/core';

@Component({
    selector: 'a08-pipe',
    template: `
        <h3>08. PIPE</h3>
        
        <div class="card-body">

            <h5>Date</h5>
            1. {{today}} - <br>
            2. {{todayUTC}} -  <br>
            3. {{todayISO}} -  <br>
            4. Date: {{today}}<br>
            5. Time: {{today}}<br>
            6. All: {{today}}<br>
            <br>

            <h5>통화코드 ISO 4217 규격에 따름.</h5>
            1. {{num}}<br>
            2. {{num}}<br>
            3. {{num}}<br>
            4. {{num}}<br>
            5. {{num}}<br>
            6. {{num}}<br>
            <br>

            <h5>Character</h5>
            1. {{str}} / {{str}} / {{str}}<br>
            <br>

            <h5>Percent</h5>
            <div>
                1. {{num}} 기본이 소수점 이하는 표시 안함.<br>
                2. {{num}}<br>
                3. {{12345.6789}}<br>
                4. {{12345.6789}}<br>
            </div>
            <br>

            <h5>Decimal Pipe</h5>
            <div>
                1. {{12345.6789}} 기본이 소수점 3자리. 3 이하는 3자리까지 표시<br>
                2. {{12345.6789}}<br>
                3. {{12345.6789}}<br>
                4. {{12345.6789}}<br>
            </div>
            <br>

            <h5>String slice</h5>
            <div>
                1. {{str}} 8부터 자리수 지정이 없으면 컴파일 에러 발생.<br>
                2. {{str}}<br>
                3. {{str}}<br>
                4. {{str}}<br>
                5. {{str}}<br>
            </div>
            <br>

            <h5>Key Value</h5>
            <div>
                <br>
            </div>
            <br>

            <h5>Custom Pipe</h5>
            1. {{word}}<br>
            2. {{word}}<br>
            3. {{word}}<br>
        </div>
    `,
    styles: []
})
export class A08PipeComponent {
    public today: Date = new Date();       // 날짜 형식
    public todayUTC: number = Date.now();  // 숫자 형식 1970.1.1 00:00:00의 mile sec
    public todayISO: string = this.today.toISOString();    // 문자 형태

    public str: string = 'I am a boy';
    public num: number = 12345.6789;

    public word: string = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.';

    public fruit: {[key:string]: string} = {
        'one': 'Lemon',
        'two': 'Banana',
        'three': 'Melon'
    }

}
