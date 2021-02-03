
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryLazyComponent } from './luxuryLazy.component';

@NgModule({
    declarations: [],
    imports: [ CommonModule,
        RouterModule.forChild([
            { path: 'luxuryLazy',   component: LuxuryLazyComponent },

        ])
    ],
    exports: [RouterModule],
    providers: [],
})
export class LazyModule {}