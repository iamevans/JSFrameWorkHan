import { Component } from '@angular/core';

@Component({
    selector: 'a08-pipe',
    template: `
        <h3>08. PIPE</h3>
        
        <!-- DIRECTIVE => view 요소를 변경 -->
        <!-- pipe => view 요소의 (값)을 변경 -->
        <div class="card-body">

            <h5>Date</h5>
            1. {{today}} - {{today | date}} - {{today | date : 'yyyy-MM-dd EEEE a hh:mm:ss'}}<br>
            2. {{todayUTC}} - {{todayUTC | date}} - {{todayUTC | date : 'yy-M-d EEE a h:m:s'}} <br>
            3. {{todayISO}} - {{todayISO | date}} - {{todayISO | date : 'y-MM-dd EEEE a hh:mm:ss'}} <br>
            4. Date: {{today}} - {{today | date : 'fullDate'}} - {{today | date : 'longDate'}} - {{today | date : 'mediumDate'}} - {{today | date : 'shortDate'}}<br>
            5. Time: {{today}} - {{today | date : 'mediumTime'}} - {{today | date : 'shortTime'}}<br>
            6. All: {{today}} - {{today | date : 'medium'}} - {{today | date : 'short'}}<br>
            <br>

            <h5>통화코드 ISO 4217 규격에 따름.</h5>
            1. {{num | currency}}<br>
            2. {{num | currency : 'KWD'}}<br>
            3. {{num | currency : 'CNY' : 'code'}}<br>
            4. {{num | currency : 'CNY' : 'symbol'}}<br>
            5. {{num | currency : 'CNY' : 'symbol-narrow'}}<br>
            6. {{num | currency : 'CNY' : 'code' : '1.3-10'}}<br>
            <br>

            <h5>Character</h5>
            1. {{str | uppercase}} / {{str | lowercase}} / {{str | titlecase}}<br>
            <br>

            <h5>Percent</h5>
            <div>
                1. {{num | percent}} 기본이 소수점 이하는 표시 안함.<br>
                2. {{0.152356 | percent : '1.3' }}<br>
                3. {{12345.6789 | percent : '1.1' }}<br>
                4. {{12345.6789 | percent : '1.4' }}<br>
            </div>
            <br>

            <h5>Decimal Pipe</h5>
            <div>
                1. {{12345.6789 | number}} 기본이 소수점 3자리. 3 이하는 3자리까지 표시<br>
                2. {{12345.6789 | number : '1.2'}}<br>
                3. {{12345.6789 | number : '1.2-2'}}<br>
                4. {{12345.6789 | number : '1.2-4'}}<br>
            </div>
            <br>

            <h5>String slice</h5>
            <div>
                1. {{str | slice }} 8부터 자리수 지정이 없으면 컴파일 에러 발생.<br>
                2. {{str | slice : 3}}<br>
                3. {{str | slice : 3 : 8}}<br>
                4. {{str | slice : -8 : -3}}<br>
                5. {{str}}<br>
            </div>
            <br>

            <h5>Key Value</h5>
            <div *ngFor="let item of fruit | keyvalue">
                {{item.key}} / {{item.value}}<br>
            </div>
            <br>

            <h5>Custom Pipe</h5>
            1. {{word | abbr }}<br> <!-- module에 등록부터 해야 한다 -->
            2. {{word | abbr : 10}}<br>
            3. {{word | abbr : 10 : '***'}}<br>
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
