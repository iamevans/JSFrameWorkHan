import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AComponent } from './A.component';

import { AppComponent } from './app.component';
import { BComponent } from './components/B.component';


@NgModule({
  // 어떤 컴퍼넌트를 불러와 태그를 만들까를 결정
  // <app-root>, <a-comp>, <b-comp>
  declarations: [ AppComponent, AComponent, BComponent ],     
  
  // 위 컴퍼넌트에서 사용할 명령(공통 모듈)을 불러와 사용할 준비
  // BrowserModule => 기본적으로 사용되는 바인딩, *ngFor, *ngIf 등을 미리 준비
  imports: [ BrowserModule ],

  // CUSTOM module(Anular가 지원하는 service file)을 로드
  providers: [],

  // 위의 declarations []에서 작성된 커스텀 태그중 html(index.html)에서 
  // 직접 호출해서 사용할 수 있는 태그를 정의
  bootstrap: [AppComponent, AComponent]
})
export class AppModule { }
