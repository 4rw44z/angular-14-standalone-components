import { Component, VERSION } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HelloComponent],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
