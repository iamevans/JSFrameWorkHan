
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abbr'})
export class AbbrPipe implements PipeTransform {
    // 12345.5678 | currency | 'USD' : 'symbol' 
    // currency => name인 abbr인 이 클래스가 호출되면서 무조건 transform을 실행
    // 매개변수 DATE에 12345.5678을 대입
    // USD => transform의 두번째 매개변수 
    // symbol => transform의 세번째 매개변수 
    transform(data: string, size: number = 20, symbol: string = '...'): string {
        // 동해물과 백두산...
        if(data.length < 20) return data;
        return data.substr(0, (size - symbol.length)) + symbol;
    }
}