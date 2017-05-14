import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <app-header></app-header>
  
  <app-left-section></app-left-section>
  <app-right-section></app-right-section>
  
  <app-footer></app-footer>
  
 
  
  `,
})
export class AppComponent  { 
  name = 'Jose D. Vasquez'; 
}
