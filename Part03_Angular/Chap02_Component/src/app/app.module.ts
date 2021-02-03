import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A01CurrencyComponent } from './components/A01.Currency.component';
import { A02BindingComponent } from './components/A02.Binding.component';
import { A03InputChildComponent, A03InputComponent } from './components/A03.Input.component';

@NgModule({
  declarations: [
    AppComponent, 
      A01CurrencyComponent, A02BindingComponent, A03InputComponent, A03InputChildComponent, 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
