import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A01CurrencyComponent } from './components/A01.Currency.component';
import { A02BindingComponent } from './components/A02.Binding.component';

@NgModule({
  declarations: [
    AppComponent, 
      A01CurrencyComponent, A02BindingComponent, 
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
