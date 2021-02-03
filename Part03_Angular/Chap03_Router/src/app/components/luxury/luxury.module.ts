
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

@NgModule({
    declarations: [
        LuxuryComponent, 
    ],
    imports: [ CommonModule,
        RouterModule.forChild([
            { path: 'luxury',       component: LuxuryComponent }
        ])
    ],
    // RouterModule을 export하면 구성 요소 모두를 root에서 사용 가능
    exports: [RouterModule],
    providers: [],
})
export class LuxuryModule {}