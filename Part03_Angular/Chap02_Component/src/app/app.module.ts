import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A01CurrencyComponent } from './components/A01.Currency.component';
import { A02BindingComponent } from './components/A02.Binding.component';
import { A03InputChildComponent, A03InputComponent } from './components/A03.Input.component';
import { A04OutputChildComponent, A04OutputComponent } from './components/A04.Output.component';
import { A05FormComponent } from './components/A05.Form.component';
import { A06LifeChildComponent, A06LifeComponent } from './components/A06.Llife.component';
import { A07DirectiveComponent } from './components/A07.Directive.component';
import { A08PipeComponent } from './components/A08.Pipe.component';
import { AbbrPipe } from './pipes/Abbr.pipe';

@NgModule({
  declarations: [
    AppComponent, 
      A01CurrencyComponent, A02BindingComponent, A03InputComponent, A03InputChildComponent, 
      A04OutputComponent, A04OutputChildComponent, A05FormComponent, 
      A06LifeComponent, A06LifeChildComponent, A07DirectiveComponent,
      A08PipeComponent,


      // pipe
      AbbrPipe,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
