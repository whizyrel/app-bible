import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  public onActivated(e): void {
    console.log({e});
  }

  public onDeactivated(e): void {
    console.log({e});
  }
}
