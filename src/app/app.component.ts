import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated //this is the default mode; css is applied to its component only
})
export class AppComponent {}