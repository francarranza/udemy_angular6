import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleDetails = true;
  log = [];

  toggleOnClick() {
    this.toggleDetails = !this.toggleDetails;
    this.log.push(this.log.length + 1);
    return this.toggleDetails;
  }
}
