import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { HomeComponent } from './components/home.component';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';

@NgModule({
  declarations: [
    AppComponent,ProductChildComponent, SellerComponent, DescriptionComponent, 
    HomeComponent, ProductParamComponent, ProductDataComponent, ProductArgsComponent,

  ],
  imports: [
    BrowserModule, 

    // 사용하는 컴퍼넌트는 declarations에도 등록하자..
    RouterModule.forRoot([
      { path: 'home',         component: HomeComponent},

      // id가 변수명. 주소줄에 param/100 => 100 값
      // id = 100 형태가 된다
      { path: 'param/:id/data/:name',        component: ProductParamComponent},

      // 고정 data 값을 전달 할 목적
      { path: 'data/:name',                 component: ProductDataComponent, 
          data: [
            {check: true, name: 'NolBu', age: 30},
            {check: false, name: 'HungBu', age: 20},
          ]
      },

      // 주소줄 argument를 이용한 데이터 
      // routerList에서 전달할 값을 지정한다
      // <a [routerLink]="['args']" [queryParams]="{check: true, name: 'BangJa', age:18}">
      { path: 'args',                   component: ProductArgsComponent },

      // 하위 라우터 설정
      { path: 'child',                component: ProductChildComponent,
          children: [
            { path: 'seller',             component: SellerComponent},
            { path: 'desc',               component: DescriptionComponent}
          ]
      },

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
