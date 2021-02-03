import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                       // custom tag
  // templateUrl: './app.component.html',     // view html
  template: `
    <h1>{{title}}</h1>

    <b-comp></b-comp>
  `,
  //styleUrls: ['./app.component.css']        // css
  styles: [`
    h1 {color: orange}
  `]
})
export class AppComponent {                   // data or method
  title = 'Hello NolBu';
}
