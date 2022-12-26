import { Component } from '@angular/core';
/** @title Select with 2-way value binding */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple';
  selected = 'option2';
}
